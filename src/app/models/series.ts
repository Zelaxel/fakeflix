import { Title } from "./title"

export interface SeasonInterface {
    index: number;
    episodes: Episode[];
}

export interface Episode {
    idx: number;
    name: string;
    videoUrl: string;
}

export interface Series extends Title {
    seasons: SeasonInterface[];
}
