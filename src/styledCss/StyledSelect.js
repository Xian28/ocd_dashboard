import { Select } from "@mui/material";
import styled from "styled-components";
import { RootCss } from "../rootCss/RootCss";

export const StyledSelect = styled(Select)({
    '& label.Mui-focused': {
      color: `${RootCss.colors.primaryColor}`,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: `${RootCss.colors.primaryColor}`,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: `${RootCss.colors.neutralColor}`,
      },
      '&:hover fieldset': {
        borderColor: `${RootCss.colors.primaryColor}`,
      },
      '&.Mui-focused fieldset': {
        borderColor: `${RootCss.colors.primaryColor}`,
      },
    },
})