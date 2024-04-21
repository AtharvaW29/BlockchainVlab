import React from "react";
import styled from "styled-components";

export default function Main({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

const MainContainer = styled.main`
  width: 100vw;
  padding: 50px;
`;
