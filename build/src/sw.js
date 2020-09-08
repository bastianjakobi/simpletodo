if (!self.define) {
    const e = (e) => {
            'require' !== e && (e += '.js');
            let r = Promise.resolve();
            return (
                s[e] ||
                    (r = new Promise(async (r) => {
                        if ('document' in self) {
                            const s = document.createElement('script');
                            (s.src = e), document.head.appendChild(s), (s.onload = r);
                        } else importScripts(e), r();
                    })),
                r.then(() => {
                    if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
                    return s[e];
                })
            );
        },
        r = (r, s) => {
            Promise.all(r.map(e)).then((e) => s(1 === e.length ? e[0] : e));
        },
        s = { require: Promise.resolve(r) };
    self.define = (r, t, i) => {
        s[r] ||
            (s[r] = Promise.resolve().then(() => {
                let s = {};
                const o = { uri: location.origin + r.slice(1) };
                return Promise.all(
                    t.map((r) => {
                        switch (r) {
                            case 'exports':
                                return s;
                            case 'module':
                                return o;
                            default:
                                return e(r);
                        }
                    })
                ).then((e) => {
                    const r = i(...e);
                    return s.default || (s.default = r), s;
                });
            }));
    };
}
define('./sw.js', ['./workbox-f810d34f'], function (e) {
    'use strict';
    self.addEventListener('message', (e) => {
        e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
    }),
        e.precacheAndRoute(
            [
                { url: 'index.html', revision: '7ea89f48b7255bc52783ea53092e6f40' },
                { url: 'src/app.js', revision: 'bc32ee475530f653fbbfd36ffac44935' },
                { url: 'style/style.css', revision: 'ca7a4563491b22476ae8fb68cb343d28' },
                { url: 'todo.html', revision: '6282587cae3c9da743e99171f90a8c8e' },
            ],
            {}
        );
});
//# sourceMappingURL=sw.js.map
