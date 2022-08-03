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
        return item[0]
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase().trim());
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
