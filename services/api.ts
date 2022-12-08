import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import type { SignUpFormData } from "../pages/signup";
import type { PasswordForm } from "../pages/update-password";
import { BACKEND_URL, ProductProps } from "../utils";
import { RootState } from "./store";

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).login.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),

  endpoints: (build) => ({
    signup: build.mutation({
      query: (data: SignUpFormData) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),

    login: build.mutation({
      query: (data: FormData) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),

    forgotPassword: build.mutation({
      query: (data: { email: string }) => ({
        url: "/forgetpassword",
        method: "POST",
        body: data,
      }),
    }),

    updatePassword: build.mutation({
      query: (data: PasswordForm) => ({
        url: "/users/updatepassword",
        method: "POST",
        body: data,
      }),
    }),

    getProducts: build.query<ProductProps[], string>({
      query: () => "/products",
    }),

    getProductsByCategory: build.query<ProductProps[], string>({
      query: (category) => `/products/${category}`,
    }),
  }),
});
export const {
  useSignupMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useUpdatePasswordMutation,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  usePrefetch,
} = api;
