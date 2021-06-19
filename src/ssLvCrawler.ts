import {GotHttpClient, HttpClient} from "./httpClient/httpClient";
import {SsLvListPageParser} from "./ssLvPageParser";
import {MonoHttpClient, MonoHttpClientOptions} from "./httpClient/monoHttpClient";
import {Flat} from "./types";
import {DEFAULT_SS_LV_BASE_URL, DEFAULT_USER_AGENT} from "./consts";
import {createInitialUrl, SearchOptions} from "./searchOptions";
import {flatArray} from "./util/flatArray";

export interface SsLvCrawlerOptions extends MonoHttpClientOptions, SearchOptions {
    baseUrl?: string;
    userAgent?: string;
}

export class SsLvCrawler {
    private parser: SsLvListPageParser;
    private httpClient: HttpClient;
    private initialUrl: string;

    private visitedUrls: string[] = [];

    constructor(options: SsLvCrawlerOptions) {
        const baseUrl = options?.baseUrl ?? DEFAULT_SS_LV_BASE_URL;

        this.initialUrl = createInitialUrl(baseUrl, options);

        this.parser = new SsLvListPageParser({
            baseUrl: baseUrl,
            adType: options.adType,
            city: options.city,
        });

        const httpClient = new GotHttpClient(options.userAgent ?? DEFAULT_USER_AGENT);
        if (!options || (!options.maxConcurrentRequests && !options.requestDelayInMs)) {
            this.httpClient = httpClient;
        } else {
            this.httpClient = new MonoHttpClient(httpClient, {
                requestDelayInMs: options.requestDelayInMs,
                maxConcurrentRequests: options.requestDelayInMs
            });
        }
    }

    async run(): Promise<Flat[]> {
        return this.processUrl(this.initialUrl);
    }

    private async processUrl(url: string): Promise<Flat[]> {
        this.visitedUrls.push(url);
        const page = await this.httpClient.loadPage(url);
        const parsed = this.parser.parseMainPage(page);
        const flats = parsed.flats;
        const flatPromises = await Promise.all(parsed.pageLinks
            .filter(link => !this.visitedUrls.includes(link))
            .map(async link => this.processUrl(link)));
        flats.push(...flatArray(flatPromises));
        return flats;
    }
}
