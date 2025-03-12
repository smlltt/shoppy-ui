"use client";
import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../modal";
import ProductForm from "@/app/forms/product-form";

const CreateProductButton = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="absolute bottom-8 left-10">
      <Fab color="primary" aria-label="add" onClick={() => setShowModal(true)}>
        <AddIcon />
      </Fab>
      <Modal
        title={"Create Product"}
        open={showModal}
        handleClose={() => setShowModal(false)}
        childrenWrapperProps={{ className: "w-80" }}
      >
        <ProductForm />
      </Modal>
    </div>
  );
};

export default CreateProductButton;
