import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import type { SignUpFormData } from "../pages/signup";
import type { PasswordForm } from "../pages/update-password";
import { BACKEND_URL } from "../utils";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
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
      query: ({ data, token }: { data: PasswordForm; token: string }) => ({
        url: "/users/updatepassword",
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: data,
      }),
    }),
  }),
});
export const {
  useSignupMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useUpdatePasswordMutation,
} = api;
