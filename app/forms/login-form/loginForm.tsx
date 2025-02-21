"use client";

import { Button, Stack, TextField, Link } from "@mui/material";
import NextLink from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { useActionState } from "react";
import { ActionState } from "../models";
import { loginAction } from "./loginAction";
import { parseError } from "@/app/util/parseError";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [state, formAction] = useActionState<ActionState, FormData>(
    loginAction,
    null
  );
  const {
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form action={formAction} className="w-full max-w-sm">
      <Stack spacing={2}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
          name="email"
          defaultValue={""}
          control={control}
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              variant="outlined"
              type="password"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
          defaultValue={""}
          name="password"
          control={control}
        />
        {state?.error && parseError(state?.message)}
        <Button variant="contained" type="submit">
          Login
        </Button>
        <Link
          component={NextLink}
          href={"/auth/signup"}
          className="self-center"
        >
          Signup
        </Link>
      </Stack>
    </form>
  );
};

export default LoginForm;
