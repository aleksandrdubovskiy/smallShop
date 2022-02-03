import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IProductItem} from "../../models";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://fakestoreapi.com'}),
    tagTypes: ['product'],
    endpoints: (build) => ({
        fetchAllProducts: build.query<IProductItem[], number>({
            query: (limit = 5) => ({
                url: `/products?limit=${limit}`,
            }),
            providesTags: result => ['product'],
            transformResponse: (response: IProductItem[]) => {

                // const state = useTypedSelector(state => state);
                // updateCart(response.length - count)
                // console.log(state);
                return response;
            }
        }),
        fetchProduct: build.query<IProductItem, number>({
            query: (product) => ({
                url: `/products/${product}`
            }),
            providesTags: result => ['product'],
        }),
    })
})

export const {useFetchAllProductsQuery} = productAPI