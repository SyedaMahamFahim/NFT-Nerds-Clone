import React from 'react'
import {
  Box,
} from "@mui/material";
import {  TextBoxBtn,
  TextBoxTypographyPara,
  TextBoxTypographyH1} from './textBoxStyle'

const TextBox = ({title,para1,para2}) => {
  return (
    <>
    <Box>
      <TextBoxTypographyH1 variant="h1" >
      {title}
      </TextBoxTypographyH1>
      <br/>
      <TextBoxTypographyPara variant="p" >
      {para1}
      </TextBoxTypographyPara>
      <br/>
      <TextBoxTypographyPara variant="p">
     {para2}
      </TextBoxTypographyPara>
      <br/>
      <TextBoxBtn>
        SETUP ALERTS
      </TextBoxBtn>
    </Box>
    </>
  )
}

export default TextBox