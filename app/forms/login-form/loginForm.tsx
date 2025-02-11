"use client";

import { Button, Stack, TextField, Link } from "@mui/material";
import NextLink from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

export interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: LoginFormData) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
