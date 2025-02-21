"use client";

import { Button, Stack, TextField, Link, capitalize } from "@mui/material";
import NextLink from "next/link";
import { useForm, Controller } from "react-hook-form";
import { LoginFormData } from "../login-form/loginForm";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpAction } from "./signUpAction";
import { useActionState } from "react";
import { parseError } from "@/app/util/parseError";
import { ActionState } from "../models";

export const signUpSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

interface SignupFormData extends LoginFormData {}

const SignUpForm = () => {
  const [state, formAction] = useActionState<ActionState, FormData>(
    signUpAction,
    null
  );
  const {
    control,
    formState: { errors },
  } = useForm<SignupFormData>({ resolver: zodResolver(signUpSchema) });

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

        <div className="pt-1 flex flex-col gap-2">
          <Button variant="contained" type="submit">
            Sign up
          </Button>
          <Link
            component={NextLink}
            href={"/auth/login"}
            className="self-center"
          >
            Login
          </Link>
        </div>
      </Stack>
    </form>
  );
};

export default SignUpForm;
