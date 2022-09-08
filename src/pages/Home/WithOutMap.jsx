import { Box } from "@mui/material";
import React from "react";
import { ImageBox, TextBox } from "../../components/index";

import {
  HeroSectionBox,
  HeroSectionLeftBox,
  HeroSectionRightBox,
} from "./homeStyle";
const Home = () => {
  return (
    <>
      <Box>
        <HeroSectionBox paddingLeft={4} marginTop={4}>
          <HeroSectionLeftBox>
            <TextBox
              title="Buy quicker than others"
              para1=" From spotting a listing to approving the transaction in 4 seconds."
              para2="Alerts with buy auto-triggers when a token matches your filter criteria."
            />
          </HeroSectionLeftBox>
          <HeroSectionRightBox>
            <ImageBox
              imgSrc={"https://d354yzmfb4qqsa.cloudfront.net/static/buy4.png"}
            />
          </HeroSectionRightBox>
        </HeroSectionBox>
        <br />
        <br />

        <HeroSectionBox paddingLeft={4} marginTop={4}>
          <HeroSectionLeftBox>
          <ImageBox
              imgSrc={
                "https://d354yzmfb4qqsa.cloudfront.net/static/alert-new.png"
              }
            />
          </HeroSectionLeftBox>
          <HeroSectionRightBox>
           
            <TextBox
              title="Buy quicker than others"
              para1=" From spotting a listing to approving the transaction in 4 seconds."
              para2="Alerts with buy auto-triggers when a token matches your filter criteria."
            />
          </HeroSectionRightBox>
        </HeroSectionBox>
        <br />
        <br />

        <HeroSectionBox paddingLeft={4} marginTop={4}>
          <HeroSectionLeftBox>
            <TextBox
              title="Buy quicker than others"
              para1=" From spotting a listing to approving the transaction in 4 seconds."
              para2="Alerts with buy auto-triggers when a token matches your filter criteria."
            />
          </HeroSectionLeftBox>
          <HeroSectionRightBox>
            <ImageBox
              imgSrc={"https://d354yzmfb4qqsa.cloudfront.net/static/nerd3.png"}
            />
          </HeroSectionRightBox>
        </HeroSectionBox>
        <br />
        <br />
        <HeroSectionBox paddingLeft={4} marginTop={4}>
          <HeroSectionLeftBox>
          
            <ImageBox
              imgSrc={"https://d354yzmfb4qqsa.cloudfront.net/static/nerds4.png"}
            />
          </HeroSectionLeftBox>
          <HeroSectionRightBox>
          <TextBox
              title="Buy quicker than others"
              para1=" From spotting a listing to approving the transaction in 4 seconds."
              para2="Alerts with buy auto-triggers when a token matches your filter criteria."
            />
          </HeroSectionRightBox>
        </HeroSectionBox>
      </Box>
    </>
  );
};

export default Home;
