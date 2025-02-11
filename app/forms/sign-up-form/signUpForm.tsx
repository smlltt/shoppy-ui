"use client";

import { Button, Stack, TextField, Link } from "@mui/material";
import NextLink from "next/link";
import { useForm, Controller } from "react-hook-form";
import { LoginFormData } from "../login-form/loginForm";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpAction, State } from "./signUpAction";
import { useActionState } from "react";

export const signUpSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

interface SignupFormData extends LoginFormData {}

const SignUpForm = () => {
  const [state, formAction] = useActionState<State, FormData>(
    signUpAction,
    null
  );
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = (data: SignupFormData) => console.log(data);
  return (
    <form action={formAction}>
      <Stack spacing={2} className="sm:w-[300px] ">
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
        <Button variant="contained" type="submit">
          Sign up
        </Button>
        <Link component={NextLink} href={"/auth/login"} className="self-center">
          Login
        </Link>
      </Stack>
    </form>
  );
};

export default SignUpForm;
