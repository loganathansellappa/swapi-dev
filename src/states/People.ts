import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersonType, ResourceType } from '../@types/People';

export interface PeopleState {
  favourites: Array<ResourceType> | [];
}

const initialState: PeopleState = {
  favourites: [],
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ResourceType>) => {
      state.favourites = [...state.favourites, action.payload];
    },
    remove: (state, action: PayloadAction<string>) => {
      state.favourites = state.favourites.filter(
        (person) => action.payload !== person.url
      );
    },
  },
});

export const { add, remove } = peopleSlice.actions;

export default peopleSlice.reducer;
