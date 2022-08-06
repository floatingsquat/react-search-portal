import { createSlice } from "@reduxjs/toolkit";
import data from "../../config/data.json";
import {
  DEFAULT_ERROR_BAR_VISIBILITY,
  DEFAULT_PAGE,
  DEFAULT_PAGE_RANGE,
  DEFAULT_SEARCH_QUERY,
  ORDER_BY_ASCENDING_NAME,
  ORDER_BY_ASCENDING_YEAR,
  ORDER_BY_DESCENDING_NAME,
} from "../../constants";
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
  searchQuery: DEFAULT_SEARCH_QUERY,
  errorBarActive: DEFAULT_ERROR_BAR_VISIBILITY,
  totalPages: Math.ceil(data.data.length / DEFAULT_PAGE_RANGE),
  currentPage: DEFAULT_PAGE,
  pageRange: DEFAULT_PAGE_RANGE,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;

      state.currentPage = DEFAULT_PAGE;
      if (!state.searchQuery) {
        state.searchedItems = state.items;
        state.slicedSearchedItems = state.searchedItems;
        state.totalPages = Math.ceil(
          state.searchedItems.length / DEFAULT_PAGE_RANGE
        );
      }
    },
    getSearchedItems: (state) => {
      state.searchedItems = state.items.filter((item) => {
        const nameSurname = item[0].toLowerCase();
        const query = state.searchQuery.toLowerCase().trim();
        const doesContain = nameSurname.includes(query);
        return doesContain;
      });
      state.totalPages = Math.ceil(
        state.searchedItems.length / DEFAULT_PAGE_RANGE
      );
    },
    setSlicedSearchedItems: (state) => {
      const indexOfLastPost = state.currentPage * DEFAULT_PAGE_RANGE;
      const indexOfFirstPost = indexOfLastPost - DEFAULT_PAGE_RANGE;
      const currentPost = state.searchedItems.slice(
        indexOfFirstPost,
        indexOfLastPost
      );
      state.slicedSearchedItems = currentPost;
    },

    setNewRecord: (state, action) => {
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
    setCleanUp: (state) => {
      state.searchedItems = [];
    },

    setOrderByFilter: (state, action) => {
      if (Number(action.payload) === ORDER_BY_ASCENDING_NAME) {
        state.slicedSearchedItems = ascendingNameSort(
          state.slicedSearchedItems
        );
      } else if (Number(action.payload) === ORDER_BY_DESCENDING_NAME) {
        state.slicedSearchedItems = descendingNameSort(
          state.slicedSearchedItems
        );
      } else if (Number(action.payload) === ORDER_BY_ASCENDING_YEAR) {
        state.slicedSearchedItems = ascendingYearSort(
          state.slicedSearchedItems
        );
      } else {
        //ORDER_BY_DESCENDING_YEAR
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
