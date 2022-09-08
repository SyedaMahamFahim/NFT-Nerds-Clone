import { styled } from "@mui/material/styles";
import {
  Box,
  InputBase,
  List,
  ListItem,
} from "@mui/material";

const HeaderBox = styled(Box)(() => ({
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  alignContent: "space-between",
  justifyContent: "space-between",
  alignItems: "center",
}));

const HeaderLeftBox = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
}));

const HeaderRightBox = styled(Box)(() => ({}));

const HeaderRightBoxList = styled(List)(() => ({
  display: "flex",
  color: "#978CC3",
  fontFamily: "Montserrat",
}));
const HeaderRightBoxListItem = styled(ListItem)(() => ({
  color: "#978CC3",
  fontFamily: "Montserrat",

  "&:hover": {
    color: "white",
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#262633",

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color: "#fff",
  },
}));



export{
    HeaderBox,
    HeaderLeftBox,
    HeaderRightBox,
    HeaderRightBoxList,
    HeaderRightBoxListItem,
    Search ,
    SearchIconWrapper,
    StyledInputBase
}