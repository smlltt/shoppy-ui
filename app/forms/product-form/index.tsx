"use client";

import { Button, Stack, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { useActionState } from "react";
import { ActionState } from "../models";
import { createProductAction } from "./createProductAction";
import { parseError } from "@/app/util/parseError";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0.1, "Price is required"),
});

export interface ProductFormData {
  name: string;
  description: string;
  price: number;
}

const ProductForm = () => {
  const [state, formAction] = useActionState<ActionState, FormData>(
    createProductAction,
    null
  );
  const {
    control,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  return (
    <form action={formAction} className="w-full max-w-sm">
      <Stack spacing={2}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
          name="name"
          defaultValue={""}
          control={control}
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Description"
              variant="outlined"
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          )}
          defaultValue={""}
          name="description"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Price"
              variant="outlined"
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          )}
          defaultValue={0}
          name="price"
          control={control}
        />
        {state?.error && parseError(state?.message)}
        <Button variant="contained" type="submit">
          Create
        </Button>
      </Stack>
    </form>
  );
};

export default ProductForm;
