"use client";

import { Button, Stack, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { z } from "zod";
import { useActionState } from "react";
import { ActionState } from "../models";
import { createProductAction } from "./createProductAction";
import { parseError } from "@/app/util/parseError";
import { styled } from "@mui/material/styles";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0.1, "Price is required"),
  image: z
    .any()
    .refine((file) => file?.size <= 5000000, `Max image size is 5MB.`)
    .refine(
      (file) => file?.type === "image/jpeg",
      ".jpeg formats is supported."
    ),
});

export interface ProductFormData {
  name: string;
  description: string;
  price: number;
  image: File;
}

const ProductForm = () => {
  const [state, formAction] = useActionState<ActionState, FormData>(
    createProductAction,
    null
  );
  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const image = watch("image");

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
        <Controller
          render={({ field }) => (
            <>
              <Button
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                Upload image
                <VisuallyHiddenInput
                  accept="image/jpeg"
                  name="image"
                  type="file"
                  onChange={(event) => {
                    return setValue(
                      field.name,
                      event.target.files?.[0] as File
                    );
                  }}
                />
              </Button>
            </>
          )}
          defaultValue={undefined}
          name="image"
          control={control}
        />
        <div className="">
          {image && (
            <Typography sx={{ position: "absolute", bottom: 55 }}>
              {image.name}
            </Typography>
          )}
        </div>
        {state?.error && parseError(state?.message)}
        <Button variant="contained" type="submit">
          Create
        </Button>
      </Stack>
    </form>
  );
};

export default ProductForm;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
