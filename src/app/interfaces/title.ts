export enum TitleTypes {
    Series, Movies
}

export interface Title {
    id?: string,
    name: string,
    type: TitleTypes,
    description: string,
    imageUrl: string,
    tags: string[],
    recent: boolean
}