import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const HeroSectionBox = styled(Box)(() => ({
  display: 'flex',
flexWrap: 'wrap',
alignContent: 'center',
justifyContent: 'space-between',
alignItems: 'center'
}));

const HeroSectionLeftBox = styled(Box)(() => ({
  flexBasis: '50%'
}));
const HeroSectionRightBox = styled(Box)(() => ({

  flexBasis: '50%',
  display: 'flex',
  justifyContent: 'center'

}));
export { HeroSectionBox, HeroSectionLeftBox, HeroSectionRightBox };
