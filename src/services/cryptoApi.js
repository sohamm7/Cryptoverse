import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'ea0fd56567mshabac591b2e5cdefp137065jsn0d6f9c46adb2'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ uuid, timePeriod }) => createRequest(`coin/${uuid}/history?timeperiod=${timePeriod}`),
    }),
    // getExchanges: builder.query({
    //   query: () => createRequest('/exchanges'),
    // }),
  }),
});


export const {
  useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery,
} = cryptoApi;