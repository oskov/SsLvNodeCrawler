import {AdType, Flat} from "./types";
import * as cheerio from 'cheerio';
import {Node, NodeWithChildren} from 'cheerio';
import {isText} from "domhandler/lib/node";
import {isTag} from "cheerio/lib/utils";
import path from "path";

function extractDataFromNode(node: Node): string {
    if (isText(node)) {
        return node.data;
    }
    return '';
}

function extractDataFromSingleChildNode(node: NodeWithChildren): string {
    return extractDataFromNode(node.children[0]);
}

function extractAsPrice(node: NodeWithChildren): number {
    return Number(extractDataFromSingleChildNode(node).replace(/[^0-9]/g, '')); //filter currency and others non-number symbols
}

function extractLinkNode(node: NodeWithChildren) {
    let href = '';
    let title = '';
    const singleChild = node.children[0] as NodeWithChildren;
    const refNode = singleChild.children[0] as NodeWithChildren;
    if (isTag(refNode)) {
        href = refNode.attribs.href;
        const textNode = refNode.children[0];
        if (isText(textNode)) {
            title = textNode.data;
        }
    }
    return {href, title};
}

export interface SsLvListPageParserOptions {
    baseUrl: string;
    city: string;
    adType: AdType;
}

export interface SsLvListPageParserResult {
    flats: Flat[];
    pageLinks: string[];
}

export class SsLvListPageParser {
    constructor(private options: SsLvListPageParserOptions) {
    }

    parseMainPage(html: string): SsLvListPageParserResult {
        const preparedHtml = html.replace(/<b>/g, '').replace(/<b>/g, ''); // remove bold, to simplify parsing
        const htmlRoot = cheerio.load(preparedHtml);
        const flats = this.parseFlats(htmlRoot);
        const pageLinks = this.parsePageLinks(htmlRoot);
        return {
            flats,
            pageLinks
        };
    }

    private getAbsoluteUrl(urlPath: string) {
        return path.join(this.options.baseUrl + urlPath);
    }

    private processHtmlFlatRow(element: cheerio.Element): Flat {
        const id = element.attribs.id.slice(3);
        const flat = {} as Flat;
        flat.id = Number(id);
        flat.adType = this.options.adType;
        flat.city = this.options.city;
        for (let i = 2; i < element.children.length; i++) {
            const currentChild = element.children[i] as NodeWithChildren;
            switch (i) {
                case 2:
                    // eslint-disable-next-line no-case-declarations
                    const value = extractLinkNode(currentChild);
                    flat.title = value.title;
                    flat.url = this.getAbsoluteUrl(value.href);
                    break;
                case 3:
                    if (currentChild.children.length === 1) {
                        flat.district = extractDataFromNode(currentChild.children[0]);
                    } else {
                        [flat.district, flat.street] = [extractDataFromNode(currentChild.children[0]), extractDataFromNode(currentChild.children[2])];
                    }
                    break;
                case 4:
                    flat.rooms = Number(extractDataFromSingleChildNode(currentChild));
                    break;
                case 5:
                    flat.apartmentArea = Number(extractDataFromSingleChildNode(currentChild));
                    break;
                case 6:
                    flat.floor = extractDataFromSingleChildNode(currentChild);
                    break;
                case 7:
                    flat.houseType = extractDataFromSingleChildNode(currentChild);
                    break;
                case 8:
                    flat.price = extractAsPrice(currentChild);
                    break;
                case 9:
                    flat.price = extractAsPrice(currentChild);
                    break;
            }
        }
        return flat;
    }

    private parseFlats(htmlRoot: cheerio.CheerioAPI): Flat[] {
        const htmlRows = htmlRoot('tr[id]');
        const flats: Flat[] = [];
        htmlRows.each(((index, element) => {
            if (element.attribs.id.startsWith('tr_') && !element.attribs.id.startsWith('tr_bnr')) {
                const flat = this.processHtmlFlatRow(element);
                flats.push(flat);
            }
        }));
        return flats;
    }

    private parsePageLinks(htmlRoot: cheerio.CheerioAPI): string[] {
        const linkNodes = htmlRoot('a[name]');
        const links: string[] = [];
        linkNodes.each((index, element) => {
            const url = this.getAbsoluteUrl(element.attribs.href);
            links.push(url);
        });

        return links;
    }
}
