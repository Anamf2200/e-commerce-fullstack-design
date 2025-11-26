import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL=import.meta.env.VITE_API_URL

export const authApi=createApi({
      reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:API_URL,
          tagTypes: ["User"],
        prepareHeaders:(headers,{getState})=>{
            const token=getState().auth.token
            if(token){
                headers.set(`Authorization`,`Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints:(builder)=>({
        addUser:builder.mutation({
            query:(newUser)=>({
                url:'/users',
                method:"POST",
                body:newUser

            }),
            invalidatesTags:["User"],
        }),

        login:builder.mutation({
query:(credentials)=>({
    url:'/auth/login',
    method:"POST",
    body:credentials

})
        }),
        getUser:builder.query({
            query:()=>'/users'
        }),
        getUserById:builder.query({
            query:(id)=>`/users/${id}`,
            providesTags:['User']
        }),
        updateUser:builder.mutation({
            query:({id,updateUser})=>({
                url:`/users/${id}`,
                method:"PUT",
                body:updateUser
            }),
            invalidatesTags:["User"]
        }),

        deleteUser:builder.mutation({
            query:(id)=>({
                url:`/users/${id}`,
                method:"DELETE",

            }),
    invalidatesTags:["User"]

        }),
    })
    

})

export const {useGetUserQuery,useGetUserByIdQuery,useAddUserMutation,useUpdateUserMutation,useDeleteUserMutation,useLoginMutation}=authApi