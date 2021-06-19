import {HttpClient} from "./httpClient";
import Bottleneck from "bottleneck";

export interface MonoHttpClientOptions {
    requestDelayInMs?: number;
    maxConcurrentRequests?: number;
}

const defaultMonoHttpClientOptions: MonoHttpClientOptions = {
    requestDelayInMs: 1000,
    maxConcurrentRequests: 1,
}

// wrapper for http client to call it in sync with delay
export class MonoHttpClient implements HttpClient {
    private options: MonoHttpClientOptions;
    private limiter: Bottleneck;

    constructor(private httpClient: HttpClient, options: MonoHttpClientOptions) {
        this.options = {...defaultMonoHttpClientOptions, ...options};
        this.limiter = new Bottleneck({
            maxConcurrent: this.options.maxConcurrentRequests,
            minTime: this.options.requestDelayInMs
        });
    }

    async loadPage(url: string): Promise<string> {
        return await this.limiter.schedule(() => this.httpClient.loadPage(url));
    }

}
