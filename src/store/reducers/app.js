import { createSlice } from "@reduxjs/toolkit";

import { API_STATUS } from "_/constants/api";

const initialState = {
  toolTips: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addTooltip: (state, payload) => {
      state.toolTips.push(payload);
    },
    hideTooltip: (state, { id: tooltipId }) => {
      state.toolTips = state.toolTips.filter(({ id }) => id !== tooltipId);
    },
  },
});

export default appSlice;
