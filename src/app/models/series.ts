import { Title } from "./title"

interface Season {
    index: number;
    episodes: Episode[];
}

interface Episode {
    idx: number;
    name: string;
    videoUrl: string;
}

export interface Series extends Title {
    seasons: Season[];
}
