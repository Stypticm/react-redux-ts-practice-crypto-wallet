import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../redux';

type WalletState = {
  value: number;
};

const initialState: WalletState = {
  value: 20000
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    decrease(state, action: PayloadAction<number>) {
      state.value -= action.payload;
    }
  }
});

export const { decrease } = walletSlice.actions;

export const selectState = (state: RootState) => state.wallet.value;

export default walletSlice.reducer;
