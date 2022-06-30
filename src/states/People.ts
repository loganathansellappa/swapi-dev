import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {PersonType, ResourceType} from "../@types/People";


type FavouritePerson = Array<Record<PersonType['url'], ResourceType>>;

export interface PeopleState {
    favourites: Array<ResourceType> | [];
}

const initialState: PeopleState = {
    favourites: []
};

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        add:  (state, action: PayloadAction<ResourceType>) => {
            // @ts-ignore
            state.favourites = [...state.favourites,action.payload]
        },
        remove:  (state, action: PayloadAction<string>) => {
            // @ts-ignore
            state.favourites = state.favourites.filter((person: PersonType) => action.payload !== person.url)
        },
    },
});

export const {add, remove } = peopleSlice.actions;

export default peopleSlice.reducer;
