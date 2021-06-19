import {createInitialUrl, SearchOptions} from "./searchOptions";
import {DEFAULT_SS_LV_BASE_URL} from "./consts";

test('create simple url #1', () => {
    const params: SearchOptions = {
        interval: "today",
        adType: 'sell',
        city: 'riga',
        lang: 'lv'
    };
    const actual = createInitialUrl(DEFAULT_SS_LV_BASE_URL, params);
    const expected = 'https:/www.ss.lv/lv/real-estate/flats/riga/today/sell/';
    expect(actual).toStrictEqual(expected);
});

test('create simple url #2', () => {
    const params: SearchOptions = {
        interval: "all",
        adType: 'hand_over',
        city: 'ogre-and-reg',
        lang: 'ru'
    };
    const actual = createInitialUrl(DEFAULT_SS_LV_BASE_URL, params);
    const expected = 'https:/www.ss.lv/ru/real-estate/flats/ogre-and-reg/all/hand_over/';
    expect(actual).toStrictEqual(expected);
});
