import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type DivClassNameProps = Pick<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "className"
>;

interface ModalProps {
  handleClose: () => void;
  open: boolean;
  title?: string;
  childrenWrapperProps?: DivClassNameProps;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({
  handleClose,
  open,
  title,
  childrenWrapperProps,
  children,
}) => {
  return (
    <Dialog onClose={handleClose} open={open}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <div className={clsx("p-3", childrenWrapperProps?.className)}>
        {children}
      </div>
    </Dialog>
  );
};

export default Modal;
