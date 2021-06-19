# ss lv scrapper

# Usage:

```js
const crawler = new SsLvCrawler({
    lang: 'ru',
    adType: 'sell',
    city: 'riga',
    interval: 'today',
    maxConcurrentRequests: 1,
    requestDelayInMs: 500,
});

const flats = await crawler.run();
```
