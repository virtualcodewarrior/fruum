
##Search Engine Optimization (SEO)

Modern search engines are able to execute Javascript and index your pages. However for fruum to be indexed by spiders you should provide a page where your fruum forum appears in full page mode in par with the embedded one.

To do this, follow this [guide](setting-up-full-page-forums.md) and see as an example how the forum you are reading looks like in full page mode [here](https://fruum.github.io/forum.html).

The reason for using the full page mode, is that you must provide to the crawler full url paths for each fruum section, e.g.

```
https://fruum.github.io/#v/how-it-works
```

for the section you are reading.

Google and Microsoft propose the use of pushState Javascript API for indexing.
Fruum supports the pushState api, however the hosting website must make a few modifications for this to work.

To enable pushState make you sure you setup your full page forum with the pushState instructions on the [guide](setting-up-full-page-forums.md).
