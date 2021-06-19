import {AdType, SsLvInterval, SsLvLang} from "./types";
import path from "path";

export interface SearchOptions {
    adType: AdType;
    city: string;
    interval: SsLvInterval;
    lang: SsLvLang;
}

export function createInitialUrl(baseUrl: string, options: SearchOptions): string {
    return path.join(baseUrl, options.lang, 'real-estate/flats', options.city, options.interval, options.adType) + '/';
}
