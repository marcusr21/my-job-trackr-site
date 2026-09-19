#!/usr/bin/env node
// Stamps partials/*.html into <!-- partial:name --> ... <!-- /partial:name -->
// marker pairs across every *.html page. Dependency-free, idempotent.
// Usage: node scripts/stamp-partials.js [--check]

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PARTIALS_DIR = path.join(ROOT, 'partials');
const SKIP_DIRS = new Set(['node_modules', 'partials', 'preview', '.git', '_design-reference']);
const CHECK = process.argv.includes('--check');

function findHtmlFiles(dir) {
    let results = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (entry.isDirectory()) {
            if (SKIP_DIRS.has(entry.name)) continue;
            results = results.concat(findHtmlFiles(path.join(dir, entry.name)));
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            results.push(path.join(dir, entry.name));
        }
    }
    return results;
}

function loadPartials() {
    const partials = {};
    if (!fs.existsSync(PARTIALS_DIR)) return partials;
    for (const file of fs.readdirSync(PARTIALS_DIR)) {
        if (!file.endsWith('.html')) continue;
        const name = file.replace(/\.html$/, '');
        partials[name] = fs.readFileSync(path.join(PARTIALS_DIR, file), 'utf8').replace(/\s+$/, '');
    }
    return partials;
}

function stampContent(content, partials) {
    let changed = false;
    const markerRe = /<!--\s*partial:(\S+)\s*-->([\s\S]*?)<!--\s*\/partial:\1\s*-->/g;
    const next = content.replace(markerRe, (whole, name, interior) => {
        const replacement = partials[name];
        if (replacement === undefined) return whole;
        const desired = `<!-- partial:${name} -->\n${replacement}\n<!-- /partial:${name} -->`;
        if (whole !== desired) changed = true;
        return desired;
    });
    return { next, changed };
}

function main() {
    const partials = loadPartials();
    const files = findHtmlFiles(ROOT);
    const drifted = [];

    for (const file of files) {
        const original = fs.readFileSync(file, 'utf8');
        const { next, changed } = stampContent(original, partials);
        if (!changed) continue;

        if (CHECK) {
            drifted.push(path.relative(ROOT, file));
        } else {
            fs.writeFileSync(file, next, 'utf8');
            console.log(`stamped: ${path.relative(ROOT, file)}`);
        }
    }

    if (CHECK) {
        if (drifted.length > 0) {
            console.error('Drift detected in:');
            for (const f of drifted) console.error(`  ${f}`);
            process.exit(1);
        }
        console.log(`--check passed: ${files.length} pages scanned, no drift.`);
    } else {
        console.log(`done: ${files.length} pages scanned.`);
    }
}

main();
