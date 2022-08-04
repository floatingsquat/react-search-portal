import { createSlice } from "@reduxjs/toolkit";
import data from "../../config/data.json";
const initialState = {
  items: data.data,
  searchedItems: [],
  searchQuery: "",
  errorBarActive: false,
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
      //console.log(action.payload);
      state.items.push(action.payload);
    },
    setErrorBarActive: (state, action) => {
      state.errorBarActive = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setNewRecord,
  getSearchedItems,
  setErrorBarActive,
} = searchSlice.actions;
export default searchSlice.reducer;
