import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  cardLists: [],
  resetCardLists: [],
  checkedItems: [],
};

export const getCardLists = createAction("GET_CARD_LISTS");
export const backUpCardLists = createAction("BACKUP_CARD_LISTS");
export const addCheckedItem = createAction("ADD_CHECKED_ITEM");
export const resetCheckedItem = createAction("RESET_CHECKED_ITEM");
export const removeCheckedItem = createAction("REMOVE_CHECKED_ITEM");

const DashboardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getCardLists, (state, { payload }) => {
      state.cardLists = payload;
    })
    .addCase(backUpCardLists, (state, { payload }) => {
      state.resetCardLists = payload;
    })
    .addCase(addCheckedItem, (state, { payload }) => {
      state.checkedItems = [...state.checkedItems, payload];
    })
    .addCase(resetCheckedItem, (state) => {
      state.checkedItems = [];
    })
    .addCase(removeCheckedItem, (state, { payload }) => {
      state.checkedItems = state.checkedItems.filter((i) => i !== payload);
    });
});

export const actionCreator = {
  addCheckedItem,
  removeCheckedItem,
  resetCheckedItem,
};

export default DashboardReducer;
