import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const env = import.meta.env;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${env.VITE_API_URL}/auth`,
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: '/register',
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
