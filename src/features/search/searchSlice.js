import { createSlice } from "@reduxjs/toolkit";
import data from "../../config/data.json";
const initialState = {
  items: data.data,
  searchQuery: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setNewRecord: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { setSearchQuery, setNewRecord } = searchSlice.actions;
export default searchSlice.reducer;
