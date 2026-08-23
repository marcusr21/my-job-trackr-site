document.addEventListener('DOMContentLoaded', function () {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Smooth scroll for in-page anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.length < 2) return;
            const target = document.querySelector(targetId);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        });
    });

    // Nav background on scroll
    const nav = document.querySelector('.v2-nav');
    if (nav) {
        const toggleNavScrolled = function () {
            nav.classList.toggle('-scrolled', window.scrollY > 8);
        };
        window.addEventListener('scroll', toggleNavScrolled, { passive: true });
        toggleNavScrolled();
    }

    // Reveal-on-scroll engine
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
        document.querySelectorAll('.reveal-stagger').forEach(function (group) {
            Array.from(group.children).forEach(function (child, i) {
                child.style.setProperty('--reveal-index', i);
            });
        });
        const revealObserver = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        revealEls.forEach(function (el) { revealObserver.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('in'); });
    }

    // Count-up stats: [data-countup] holds the target value, counts up once when visible
    const countEls = document.querySelectorAll('[data-countup]');
    if (countEls.length && !prefersReducedMotion && 'IntersectionObserver' in window) {
        const countObserver = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseFloat(el.getAttribute('data-countup'));
                const duration = 1200;
                const start = performance.now();
                function tick(now) {
                    const progress = Math.min((now - start) / duration, 1);
                    el.textContent = Math.round(target * progress).toLocaleString();
                    if (progress < 1) requestAnimationFrame(tick);
                    else el.textContent = target.toLocaleString();
                }
                requestAnimationFrame(tick);
                obs.unobserve(el);
            });
        }, { threshold: 0.4 });
        countEls.forEach(function (el) { countObserver.observe(el); });
    }

    // Spine scroll fallback (browsers without animation-timeline: view())
    const supportsScrollTimeline = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('animation-timeline: view()');
    if (!supportsScrollTimeline) {
        document.querySelectorAll('[data-spine-scroll]').forEach(function (spine) {
            const beats = spine.querySelectorAll('[data-spine-beat]');
            if (!beats.length || !('IntersectionObserver' in window)) return;
            const beatObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        spine.querySelectorAll('.-active-beat').forEach(function (b) { b.classList.remove('-active-beat'); });
                        entry.target.classList.add('-active-beat');
                    }
                });
            }, { threshold: 0.5 });
            beats.forEach(function (beat) { beatObserver.observe(beat); });
        });
    }

    // Mobile sticky CTA bar
    const stickyCta = document.getElementById('sticky-cta');
    const heroSentinel = document.querySelector('[data-hero-sentinel]');
    if (stickyCta) {
        const dismissed = sessionStorage.getItem('sticky-cta-dismissed') === '1';
        if (!dismissed) {
            stickyCta.classList.add('-visible');
            if (heroSentinel && 'IntersectionObserver' in window) {
                const barObserver = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        const shown = !entry.isIntersecting;
                        stickyCta.classList.toggle('-shown', shown);
                        document.body.classList.toggle('-sticky-cta-shown', shown);
                    });
                }, { threshold: 0 });
                barObserver.observe(heroSentinel);
            } else {
                stickyCta.classList.add('-shown');
                document.body.classList.add('-sticky-cta-shown');
            }
        }
        const dismissBtn = document.getElementById('sticky-cta-dismiss');
        if (dismissBtn) {
            dismissBtn.addEventListener('click', function () {
                stickyCta.classList.remove('-shown', '-visible');
                document.body.classList.remove('-sticky-cta-shown');
                sessionStorage.setItem('sticky-cta-dismissed', '1');
            });
        }
    }

    // GA4 CTA click tracking
    document.querySelectorAll('[data-cta-location]').forEach(function (el) {
        el.addEventListener('click', function () {
            if (typeof gtag !== 'function') return;
            gtag('event', 'cta_click', {
                cta_location: el.getAttribute('data-cta-location'),
                cta_target: el.getAttribute('data-cta-target') || ''
            });
        });
    });
});
