export interface IProducts {
    categories: string[];
    name: string;
    priceInPounds: number;
    status: EStatuses
}

export enum EStatuses {
    active = 'active',
    disabled = 'disabled',
    pendingReview = 'pendingReview'
}