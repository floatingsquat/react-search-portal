import { createSlice } from "@reduxjs/toolkit";
import data from "../../config/data.json";
const initialState = {
  items: data.data,
  searchedItems: [],
  searchQuery: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    getSearchedItems: (state) => {
      state.searchedItems = state.items.filter((item) => {
        const nameSurname = item[0].toLowerCase();
        const query = state.searchQuery.toLowerCase().trim();
        const doesContain = nameSurname.includes(query);

        return doesContain;
      });
    },
    setNewRecord: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { setSearchQuery, setNewRecord, getSearchedItems } =
  searchSlice.actions;
export default searchSlice.reducer;
