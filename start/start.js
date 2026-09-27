// /start link-in-bio page: device-aware CTA order + UTM passthrough.
// No redirects. Every option stays visible; only order and emphasis change.
(function () {
    var APPLE_PT = '128350469';
    var APP_STORE = 'https://apps.apple.com/app/apple-store/id6756327792';
    var PLAY = 'https://play.google.com/store/apps/details?id=com.myjobtrackr.mobileapp';
    var WEB = 'https://app.myjobtrackr.com/register';
    var SOURCES = { tiktok: 'TikTok', instagram: 'Instagram', desktop_qr: null };
    var SAFE = /^[a-z0-9_-]{1,40}$/i;

    function detectDevice() {
        var ua = navigator.userAgent || '';
        if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
        if (/Android/.test(ua)) return 'android';
        return 'desktop';
    }

    function readUtm() {
        var p = new URLSearchParams(window.location.search);
        var source = (p.get('utm_source') || '').toLowerCase();
        if (!Object.prototype.hasOwnProperty.call(SOURCES, source)) return null;
        var medium = p.get('utm_medium') || '';
        var campaign = p.get('utm_campaign') || '';
        return {
            source: source,
            medium: SAFE.test(medium) ? medium : 'social',
            campaign: SAFE.test(campaign) ? campaign : 'bio'
        };
    }

    function query(utm) {
        return 'utm_source=' + encodeURIComponent(utm.source) +
            '&utm_medium=' + encodeURIComponent(utm.medium) +
            '&utm_campaign=' + encodeURIComponent(utm.campaign);
    }

    var device = detectDevice();
    var utm = readUtm();
    document.body.setAttribute('data-device', device);

    var ctas = {
        'app-store': document.getElementById('cta-app-store'),
        'google-play': document.getElementById('cta-google-play'),
        'web': document.getElementById('cta-web')
    };
    if (!ctas['app-store'] || !ctas['google-play'] || !ctas['web']) return;

    // Outbound links carry the campaign through to each store / signup.
    if (utm) {
        var ct = (utm.source + '_' + utm.campaign).slice(0, 40);
        ctas['app-store'].href = APP_STORE + '?pt=' + APPLE_PT + '&ct=' + encodeURIComponent(ct) + '&mt=8';
        ctas['google-play'].href = PLAY + '&referrer=' + encodeURIComponent(query(utm));
        ctas['web'].href = WEB + '?' + query(utm);

        var label = SOURCES[utm.source];
        if (label) document.getElementById('start-eyebrow').textContent = 'You found us on ' + label;
    }

    // Order and emphasis by device.
    var orders = {
        ios: ['app-store', 'web', 'google-play'],
        android: ['google-play', 'web', 'app-store'],
        desktop: ['web', 'app-store', 'google-play']
    };
    var roles = device === 'desktop' ? ['primary', 'link', 'link'] : ['primary', 'secondary', 'link'];
    var list = document.getElementById('start-ctas');

    var note = document.getElementById('start-note');
    orders[device].forEach(function (key, i) {
        var el = ctas[key];
        var role = roles[i];
        el.classList.remove('-primary', '-secondary', '-link');
        el.classList.add('-' + role);
        el.textContent = el.getAttribute('data-label-' + role);
        list.appendChild(el);
        if (i === 0 && note) {
            note.textContent = el.getAttribute('data-note');
            list.appendChild(note); // caption sits directly under the primary CTA
        }
    });

    if (typeof gtag === 'function') {
        gtag('event', 'start_view', { source: utm ? utm.source : 'direct', device: device });
    }
})();
