import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  account: null,
  walletAddress: "Connect!",
  accBalance: "",
  selectedOption: "0xaa36a7",
  isTransactionComplete: false,
  tokenBal: null,
  slippageTolerance: "2",
  transactionDeadline: "10",
  swapRatio: null,
  swappedPrice: 0,
  swapTransaction: null,
  inputTokenSelected: null,
  outputTokenSelected: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload;
    },
    setWalletAddress: (state, action) => {
      state.walletAddress = action.payload;
    },
    setAccBalance: (state, action) => {
      state.accBalance = action.payload;
    },
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
    setIsTransactionComplete: (state, action) => {
      state.isTransactionComplete = action.payload;
    },
    setTokenBal: (state, action) => {
      state.tokenBal = action.payload;
    },
    setSlippageTolerance: (state, action) => {
      state.slippageTolerance = action.payload;
    },
    setTransactionDeadline: (state, action) => {
      state.transactionDeadline = action.payload;
    },
    setSwapRatio: (state, action) => {
      state.swapRatio = action.payload;
    },
    setSwappedPrice: (state, action) => {
      state.swappedPrice = action.payload;
    },
    setSwapTransaction: (state, action) => {
      state.swapTransaction = action.payload;
    },
    setInputTokenSelected: (state, action) => {
      state.inputTokenSelected = action.payload;
    },
    setOutputTokenSelected: (state, action) => {
      state.outputTokenSelected = action.payload;
    },
  },
});

export const {
  account,
  setAccount,
  setWalletAddress,
  setAccBalance,
  setSelectedOption,
  setIsTransactionComplete,
  setTokenBal,
  setSlippageTolerance,
  setTransactionDeadline,
  setSwapRatio,
  setSwappedPrice,
  setSwapTransaction,
  setInputTokenSelected,
  setOutputTokenSelected,
  swapTransaction
} = appSlice.actions;

export default appSlice.reducer;

