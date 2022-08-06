import { createSlice } from "@reduxjs/toolkit";
import data from "../../config/data.json";
import {
  ascendingNameSort,
  ascendingYearSort,
  descendingNameSort,
  descendingYearSort,
} from "../../helpers/sortBy";
const initialState = {
  items: data.data,
  searchedItems: data.data,
  slicedSearchedItems: [],
  searchQuery: "",
  errorBarActive: false,
  totalPages: Math.ceil(data.data.length / 5),
  currentPage: 1,
  pageRange: 5,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;

      state.currentPage = 1;
      if (!state.searchQuery) {
        state.searchedItems = state.items;
        state.slicedSearchedItems = state.searchedItems;
        state.totalPages = Math.ceil(state.searchedItems.length / 5);
      }
    },
    getSearchedItems: (state) => {
      state.searchedItems = state.items.filter((item) => {
        const nameSurname = item[0].toLowerCase();
        const query = state.searchQuery.toLowerCase().trim();
        const doesContain = nameSurname.includes(query);
        //console.log("searchedItems", state.searchedItems);

        return doesContain;
      });
      state.totalPages = Math.ceil(state.searchedItems.length / 5);
    },
    setSlicedSearchedItems: (state) => {
      const indexOfLastPost = state.currentPage * 5;
      const indexOfFirstPost = indexOfLastPost - 5;
      const currentPost = state.searchedItems.slice(
        indexOfFirstPost,
        indexOfLastPost
      );
      state.slicedSearchedItems = currentPost;
    },

    setNewRecord: (state, action) => {
      //console.log(action.payload);
      state.items.push(action.payload);
      state.searchedItems.push(action.payload);
    },
    setErrorBarActive: (state, action) => {
      state.errorBarActive = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPageRange: (state, action) => {
      state.pageRange = action.payload;
    },
    setCleanUp: (state, action) => {
      state.searchedItems = [];
    },

    setOrderByFilter: (state, action) => {
      if (Number(action.payload) === 0) {
        state.slicedSearchedItems = ascendingNameSort(
          state.slicedSearchedItems
        );
      } else if (Number(action.payload) === 1) {
        state.slicedSearchedItems = descendingNameSort(
          state.slicedSearchedItems
        );
      } else if (Number(action.payload) === 2) {
        state.slicedSearchedItems = ascendingYearSort(
          state.slicedSearchedItems
        );
      } else {
        state.slicedSearchedItems = descendingYearSort(
          state.slicedSearchedItems
        );
      }
    },
  },
});

export const {
  setSearchQuery,
  setNewRecord,
  getSearchedItems,
  setErrorBarActive,
  totalPages,
  setCurrentPage,
  setPageRange,
  setSlicedSearchedItems,
  setOrderByFilter,
  setCleanUp,
} = searchSlice.actions;
export default searchSlice.reducer;
