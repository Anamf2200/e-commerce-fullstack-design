
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const productApi=createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3000',
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
            query:()=>'/product'

        }),

        getProductById:builder.query({
            query:(id)=>`/product/${id}`,
            providesTags: ["Product"],

        }),
        updateProduct:builder.mutation({
            query:({id,updatedProduct})=>({
                url:`/product/${id}`,
                method:"PUT",
                body:updatedProduct
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