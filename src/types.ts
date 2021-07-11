export interface Flat {
    id: number;
    title: string;
    city: string;
    district: string;
    street: string;
    rooms: number;
    apartmentArea: number;
    floor: string;
    houseType: string;
    price: number;
    adType: AdType;
    url: string;
}

export const AD_TYPE_SELL = 'sell';
export const AD_TYPE_RENT = 'hand_over';

export type AdType = typeof AD_TYPE_SELL | typeof AD_TYPE_RENT;

export const AD_INTERVAL_ALL = 'all';
export const AD_INTERVAL_TODAY = 'today';
export const AD_INTERVAL_TWO_DAYS = 'today-2';
export const AD_INTERVAL_FIVE_DAYS = 'today-5';

export type AdInterval =
    typeof AD_INTERVAL_ALL
    | typeof AD_INTERVAL_TODAY
    | typeof AD_INTERVAL_TWO_DAYS
    | typeof AD_INTERVAL_FIVE_DAYS;

export const AD_LANG_RU = 'ru';
export const AD_LANG_LV = 'lv';

export type AdLang = typeof AD_LANG_RU | typeof AD_LANG_LV;
