# Apache Teaclave (incubating) Website

The website is generated with the VuePress static site generator. Documentation
are fetched from the original repository.

You need to install
[VuePress](https://vuepress.vuejs.org/guide/getting-started.html#global-installation)
and `yarn` first. Then, install dependencies with `yarn install`. To
deploy the generated site, `gph-import` is also needed.

To preview the website, you can invoke:

```
make dev
```

To commit generated files to the `asf-staging` and `asf-site` branches you can call:

```
make asf-staging
make asf-site
```

When pushing the branches to remote, the site are automatically deployed to the following links.
- `asf-staging`: https://teaclave.staged.apache.org (for preview)
- `asf-site`: https://teaclave.apache.org
