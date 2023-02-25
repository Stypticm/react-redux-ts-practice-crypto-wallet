import { AppDispatch } from './index';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  amountOfCurrency: number;
  status: 'hold' | 'processing' | 'completed';
  method?: string;
  isVisible: boolean;
}

interface IGetMethodAndId {
  method: string;
  id: string;
}

const initialState: WalletState = {
  value: 20000,
  boughtCrypts: []
};

const createAppAsync = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
}>();

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    decrease(state, action: PayloadAction<number>) {
      try {
        state.value -= action.payload;
      } catch (error) {
        console.log(error);
      }
    },
    purchase(state, action: PayloadAction<IPurchase>) {
      try {
        state.boughtCrypts.push({
          ...action.payload,
          price: Number(Number(action.payload.price / action.payload.amountOfCurrency).toFixed(4)),
          id: uniqid(),
          isVisible: true
        });
      } catch (error) {
        console.log(error);
      }
    },
    changeStatus(state, action: PayloadAction<IGetMethodAndId>) {
      try {
        const cryptItem = state.boughtCrypts.find((item) => item.id === action.payload.id);
        if (cryptItem) {
          (cryptItem.method = action.payload.method), (cryptItem.status = 'processing');
        }
      } catch (error) {
        console.log(error);
      }
    },
    changeStatusToCompleted(state, action: PayloadAction<IGetMethodAndId>) {
      try {
        const cryptItem = state.boughtCrypts.find((item) => item.id === action.payload.id);
        if (cryptItem?.status === 'processing') {
          (cryptItem.method = action.payload.method), (cryptItem.status = 'completed');
        }
      } catch (error) {
        console.log(error);
      }
    },
    showFilteredStatus(state, action: PayloadAction<string>) {
      try {
        if (action.payload === 'hold') {
          state.boughtCrypts.map((value) => {
            if (value.status !== 'hold') {
              value.isVisible = false;
            } else {
              value.isVisible = true;
            }
          });
        } else if (action.payload === 'processing') {
          state.boughtCrypts.map((value) => {
            if (value.status !== 'processing') {
              value.isVisible = false;
            } else {
              value.isVisible = true;
            }
          });
        } else if (action.payload === 'completed') {
          state.boughtCrypts.map((value) => {
            if (value.status !== 'completed') {
              value.isVisible = false;
            } else {
              value.isVisible = true;
            }
          });
        } else if (action.payload === 'all') {
          state.boughtCrypts.map((value) => {
            value.isVisible = true;
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
});

export const { decrease, purchase, changeStatus, changeStatusToCompleted, showFilteredStatus } =
  walletSlice.actions;

export const selectState = (state: RootState) => state.wallet;

export default walletSlice.reducer;
