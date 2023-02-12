import React, { Dispatch, SetStateAction } from "react";
import Button, { ButtonProps } from "@mui/material/Button";

interface Button {
  onClick: any,
  innerText: string;
  disabled: boolean;
}

export const FormButton: React.FC<Button> = ({
  onClick,
  innerText,
  disabled,
}) => {
  return (
    <>
      <Button
        // type="submit"
        disabled={disabled}
        size="medium"
        onClick={onClick}
      >
        {innerText}
      </Button>
    </>
  );
};
