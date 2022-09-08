import { styled } from "@mui/material/styles";
import {
  Button,
  Typography,
} from "@mui/material";

const TextBoxTypographyPara = styled(Button)(() => ({
    margin: '0px',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '27px',
    fontFamily: 'Montserrat, sans-serif',
    color: 'rgb(134, 134, 160)'
}));
const TextBoxTypographyH1 = styled(Typography)(() => ({
    margin: '0px 0px 32px',
    fontSize: '30px',
    fontWeight: '400',
    fontFamily: 'Montserrat, sans-serif',
    lineHeight: '1.235'
}));
const TextBoxBtn = styled(Button)(() => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    outline: "0px",
    margin: "24px 0px 0px",
    cursor: "pointer",
    verticalAlign: "middle",
    appearance: "none",
    textDecoration: "none",
    fontFamily: "Montserrat, sans-serif",
    lineHeight: "1.75",
    textTransform: "uppercase",
    minWidth: "64px",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    color: "rgb(137, 101, 211)",
    padding: "6.4px 24px",
    fontWeight: "600",
    fontSize: "16px",
    border: "1px solid",
    borderRadius: "4px",
}));


export{
    TextBoxBtn,
  TextBoxTypographyPara,
  TextBoxTypographyH1
}

