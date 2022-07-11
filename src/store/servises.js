import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  tagTypes: ['Products', 'ProductsByCategory'],
  endpoints: (builder) => ({
    getProducts: builder.query({
        query: ({lim=5, skip=0}) => ({
          url: `products/?limit=${lim}&skip=${skip}`,
        }),
      }),
    getProductById: builder.query({
        query: ({id}) => ({
          url: `products/${id}`,
        }),
      }),
    getSearchProducts: builder.query({
        query: ({search,skip}) => ({
          url: `/products/search?q=${search}&limit=5&skip=${skip}`,
        }),
        providesTags: result => ['Products']
      }),


    getCategories: builder.query({
        query: () => ({
          url : `products/categories/`,
        }),
      }),
    getProductsOfCategories: builder.query({
        query: ({category}) => ({
          url : `products/category/${category}`,
        }),
        providesTags: result => ['ProductsByCategory']
      }),
  }),
})
