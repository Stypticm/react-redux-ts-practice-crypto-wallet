import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IallCrypts {
  name: string;
  id: string;
  symbol: string;
  current_price: string;
  image: string;
  market_cap_rank: number;
  description: string;
  market_data: {
    current_price: {
      bmd: string;
    };
  };
}

export const cryptsApi = createApi({
  reducerPath: 'cryptsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc'
  }),
  endpoints: (builder) => ({
    getAllCrypts: builder.query<IallCrypts, []>({
      query: () => 'crypts'
    })
  })
});

export const { useGetAllCryptsQuery } = cryptsApi;
