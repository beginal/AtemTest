import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  checkedItems: [],
};

export const addCheckedItem = createAction("ADD_CHECKED_ITEM");
export const removeCheckedItem = createAction("REMOVE_CHECKED_ITEM");

const DashboardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addCheckedItem, (state, { payload }) => {
      state.checkedItems = [...state.checkedItems, payload];
    })
    .addCase(removeCheckedItem, (state, { payload }) => {
      state.checkedItems = state.checkedItems.filter((i) => i !== payload);
    });
});

export const actionCreator = {
  addCheckedItem,
  removeCheckedItem,
};

export default DashboardReducer;
