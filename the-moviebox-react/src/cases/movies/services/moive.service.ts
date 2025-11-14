import { api } from "../../../lib/axios";

export type MovieDTO = {
    title: string;
    year: number;
    image: string;
    genres: string;
    duration: string;
    sinopse: string;
    hightlight: string;
}

const _ENDPOINT = '/movies?key=2fae2a70';

export const MovieService = {
    async list(): Promise<MovieDTO[]> {
        const result = await api.get(_ENDPOINT);
        return result.data
    }
}