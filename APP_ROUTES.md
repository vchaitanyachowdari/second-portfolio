## Application Routes

This document outlines the various routes available in the application, as generated during the build process.

```
Route (app)                                            Size  First Load JS
┌ ○ /                                               41.1 kB         225 kB
├ ○ /_not-found                                       145 B         100 kB
├ ○ /about                                          2.95 kB         179 kB
├ ƒ /api/authenticate                                 145 B         100 kB
├ ƒ /api/check-auth                                   145 B         100 kB
├ ○ /blog                                           1.47 kB         186 kB
├ ● /blog/[slug]                                      146 B         178 kB
├   ├ /blog/8-open-source-tools
├   ├ /blog/ai-agents-frontier-beyond-chatbots
├   └ /blog/open-sourced-attribution-graph-toolkit
├ ○ /contact                                          145 B         100 kB
├ ○ /gallery                                         2.2 kB         183 kB
├ ƒ /og                                               511 B         164 kB
├ ○ /privacy                                          145 B         100 kB
├ ○ /refund                                           145 B         100 kB
├ ○ /resource                                        2.6 kB         178 kB
├ ○ /robots.txt                                       145 B         100 kB
├ ○ /services                                       2.07 kB         166 kB
├ ○ /sitemap.xml                                      145 B         100 kB
├ ○ /store                                          1.49 kB         165 kB
├ ○ /tech-stack                                     30.4 kB         194 kB
├ ○ /terms                                            145 B         100 kB
├ ○ /tools                                          1.31 kB         165 kB
├ ○ /work                                             518 B         185 kB
└ ● /work/[slug]                                      145 B         178 kB
    ├ /work/portfolio
    ├ /work/portfolioideas
    └ /work/seo-automation
+ First Load JS shared by all                        100 kB
  ├ chunks/4bd1b696-9911af18dede28aa.js             54.1 kB
  ├ chunks/964-31dafd2ad9407dd2.js                  43.8 kB
  └ other shared chunks (total)                     1.98 kB


○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```
