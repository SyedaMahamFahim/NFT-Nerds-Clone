import { Box } from "@mui/material";
import React from "react";
import { ImageBox, TextBox } from "../../components/index";
import { AllBox } from "../../StaticData";
import {
  HeroSectionBox,
  HeroSectionLeftBox,
  HeroSectionRightBox,
} from "./homeStyle";
const Home = () => {
 
  return (
    <>
      <Box>
        {AllBox.map((element, index) => {
          return (
            <Box key={index}>
            <HeroSectionBox paddingLeft={4} marginTop={4} >
              <HeroSectionLeftBox>
                {index == 0 || index % 2 == 0 ? (
                  <TextBox
                    title={element.title}
                    para1={element.para1}
                    para2={element.para2}
                  />
                ) : (
                  <ImageBox imgSrc={element.imgSrc} />
                )}
              </HeroSectionLeftBox>
              <HeroSectionRightBox>
                {index == 0 || index % 2 == 0 ? (
                  <ImageBox imgSrc={element.imgSrc} />
                ) : (
                  <TextBox
                    title={element.title}
                    para1={element.para1}
                    para2={element.para2}
                  />
                )}
              </HeroSectionRightBox>
            </HeroSectionBox>
              <br />
              <br />
              </Box>
          );
        })}

      
      </Box>
    </>
  );
};

export default Home;

