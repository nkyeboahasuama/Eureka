import Container from "../atoms/container/Container";
import Typography from "../atoms/typography/Typography";
import HeaderStyles from "./HeaderStyles";
import styled, { css } from "styled-components";
import React, { ReactNode } from "react";

interface HeaderProps {
  page?: ReactNode;
}

export const NavLink = styled.a<{ isActive?: boolean }>`
  color: inherit;
  width: 100vw;
  margin: 0 20px 0 0;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  &:hover {
    font-weight: 700;
  }
`;

const Header: React.FC<HeaderProps> = ({ page }) => {
  return (
    <Container variant="secondary" w="100%" h="100px">
      <Container fd="row" h="60%">
        <Typography variant="medium" m="0 20px">
          @Emoo201
        </Typography>
        <HeaderStyles />
      </Container>
      <Container h="40%" fd="row" justify="space-between" w="100%">
        <Typography variant="medium" m="0 20px">
          {page}
        </Typography>
      </Container>
    </Container>
  );
};

export default Header;
