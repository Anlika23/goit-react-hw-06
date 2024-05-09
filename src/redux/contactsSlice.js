import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = { items: [] };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const { id, name, number } = action.payload;
        state.items.push({ id, name, number });
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => {
        console.log("Deleted contact:", item);
        return item.id !== action.payload;
  });
},
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const selectContact = (state) => state.contacts.items;
export const contactReducer = contactSlice.reducer;
