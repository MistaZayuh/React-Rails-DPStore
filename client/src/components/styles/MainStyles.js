import React from "react";
import styled from "styled-components";
import { Card, } from "semantic-ui-react";

export const StyledCard = styled(Card)`
  background: linear-gradient(to top right, lightpink, lightblue) !important;
  text-align: center; 
  color: white !important;
`;

export const HeaderText = styled.h1`
  color: white;
  text-align: center;
  padding: 15px;
`;

export const HeaderBox = styled.div`
  border: 5px;
  color: #FFF;
  background: #000;
  background-clip: padding-box; 
  border: solid $border transparent;
  border-radius: 1em;
  border-radius: inherit;
  background: linear-gradient(to right, red, orange);
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: -1;
  margin: -$border;
`;

