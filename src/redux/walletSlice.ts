import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
import type { RootState } from '../redux';

type WalletState = {
  value: number;
  boughtCrypts: IPurchase[];
};

interface IPurchase {
  id?: string;
  value: string;
  price: number;
  status: 'hold' | 'processing' | 'completed';
  method?: string;
}

interface IGetMethodAndId {
  method: string;
  id: string;
}

const initialState: WalletState = {
  value: 20000,
  boughtCrypts: []
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    decrease(state, action: PayloadAction<number>) {
      state.value -= action.payload;
    },
    purchase(state, action: PayloadAction<IPurchase>) {
      state.boughtCrypts.push({
        ...action.payload,
        id: uniqid()
      });
    },
    changeStatus(state, action: PayloadAction<IGetMethodAndId>) {
      const cryptItem = state.boughtCrypts.find((item) => item.id === action.payload.id);
      if (cryptItem) {
        (cryptItem.method = action.payload.method), (cryptItem.status = 'processing');
      }
    },
    changeStatusToCompleted(state, action: PayloadAction<IGetMethodAndId>) {
      const cryptItem = state.boughtCrypts.find((item) => item.id === action.payload.id);
      if (cryptItem?.status === 'processing') {
        (cryptItem.method = action.payload.method), (cryptItem.status = 'completed');
      }
    }
  }
});

export const { decrease, purchase, changeStatus, changeStatusToCompleted } = walletSlice.actions;

export const selectState = (state: RootState) => state.wallet;

export default walletSlice.reducer;
