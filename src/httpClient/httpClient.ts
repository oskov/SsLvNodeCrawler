import got from "got";

export interface HttpClient {
    loadPage(url: string): Promise<string>;
}

export class GotHttpClient implements HttpClient {
    constructor(private userAgent?: string) {
    }

    async loadPage(url: string): Promise<string> {
        const response = await got(url, {
            headers: {
                'user-agent': this.userAgent
            }
        });
        return response.body;
    }
}
