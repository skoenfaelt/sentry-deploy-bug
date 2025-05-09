# Sentry Deploy Bug

> https://github.com/getsentry/sentry-javascript/issues/16243

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Build

```bash
# npm
npm run build
```

## Mock Deployment

Copy now the .output folder somewhere else (eg.: Desktop)

now start the prod server (adjust the path to your needs)

node .output/server/index.mjs

Now open the localhost:3000

This page should not open. On my IIS I have the iis-handler, which creates logs. This is what it shows


node:internal/modules/esm/resolve:215
  const resolvedOption = FSLegacyMainResolve(packageJsonUrlString, packageConfig.main, baseStringified);
                         ^

Error: Cannot find package 'app_folder\server\node_modules\@sentry\node\node_modules\@opentelemetry\semantic-conventions\index.js' imported from app_folder\server\node_modules\@sentry\node\build\esm\integrations\tracing\koa.js
    at legacyMainResolve (node:internal/modules/esm/resolve:215:26)
    at packageResolve (node:internal/modules/esm/resolve:841:14)
    at moduleResolve (node:internal/modules/esm/resolve:927:18)
    at defaultResolve (node:internal/modules/esm/resolve:1169:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:542:12)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:510:25)
    at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:239:38)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:96:40)
    at link (node:internal/modules/esm/module_job:95:36) {
  code: 'ERR_MODULE_NOT_FOUND'
}

Node.js v20.18.0
