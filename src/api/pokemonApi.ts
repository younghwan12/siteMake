import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface PokemonType {
    id: number;
    name: string;
    order: number;
    species: {
        name: string;
        url: string;
    };
    sprites: {
        front_default: string;
        front_shiny: string;
    };
    stats: {
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        };
    }[];
    weight: number;
}


export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<PokemonType, string>({
            query: (name) => `pokemon/${name}`,
        }),
    }),
})

export const { useGetPokemonByNameQuery } = pokemonApi;