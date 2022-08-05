import { createSlice } from "@reduxjs/toolkit";
import data from "../../config/data.json";
const initialState = {
  items: data.data,
  searchedItems: data.data,
  slicedSearchedItems: [],
  searchQuery: "",
  errorBarActive: false,
  totalPages: Math.ceil(data.data.length / 5),
  currentPage: 1,
  pageRange: 3,

  /* 
  
  totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          pageRange={pageRange}
          setPageRange={setPageRange}
  */
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      //state.totalPages = 2;
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
} = searchSlice.actions;
export default searchSlice.reducer;
