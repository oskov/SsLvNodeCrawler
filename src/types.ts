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

export type AdType = 'sell' | 'hand_over';

export type SsLvInterval = 'all' | 'today' | 'today-2' | 'today-5';

export type SsLvLang = 'ru' | 'lv';
