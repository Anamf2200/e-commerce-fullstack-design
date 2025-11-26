
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const API_URL=import.meta.env.VITE_API_URL

export const productApi=createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({
        baseUrl:API_URL,
        prepareHeaders:(headers,{getState})=>{
            const token=getState().auth.token
            if(token){
                headers.set(`Authorization`,`Bearer ${token}`)
            }
            return headers
        }
    }),
    tagTypes:["Product"],
    endpoints:(builder)=>({
        addProduct:builder.mutation({
            query:(newProduct)=>({
                url:'/product',
                method:'POST',
                body:newProduct
            }),
        invalidatesTags: ["Product"],

        }),

        getProduct:builder.query({
            query:()=>'/product',
            providesTags:["Product"]

        }),

        getProductById:builder.query({
            query:(id)=>`/product/${id}`,
            providesTags: ["Product"],

        }),
   updateProduct: builder.mutation({
  query: ({ id, updatedProduct }) => ({
    url: `/product/${id}`,
    method: "PUT",
    body: updatedProduct, // Pass FormData directly
    // DO NOT set 'Content-Type' header; browser will handle it
  }),
  invalidatesTags: ["Product"],
}),

        deletedProduct:builder.mutation({
            query:(id)=>({
                url:`/product/${id}`,
                method:'DELETE'
            }),
        invalidatesTags: ["Product"],

        }),

        getproduct:builder.query({
            query:(filters)=>{
                const param=new URLSearchParams()
                if(filters.name)param.append("name",filters.name)
                if(filters.category)param.append("category",filters.category)
                    return `/product/search?${param.toString()}`

            }
        }),
    })
})

export const {useAddProductMutation,useGetProductQuery,useGetProductByIdQuery,useUpdateProductMutation,useDeletedProductMutation,useLazyGetproductQuery}=productApi