import { IAdminDocument } from "../../../core";
import Container from "../atoms/container/Container";
import Typography from "../atoms/typography/Typography";
import HeaderStyles from "./HeaderStyles";
import React, { ReactNode } from "react";

interface HeaderProps {
  page?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ page }) => {
  const user: IAdminDocument = localStorage.getItem("isAdminLocal")
    ? JSON.parse(localStorage.getItem("isAdminLocal")!)
    : null;

  return (
    <Container style={{ flexShrink: 0 }} variant="secondary" w="100%" h="100px">
      <Container
        style={{ fontSize: "11px", color: "white" }}
        justify="space-between"
        fd="row"
        h="60%"
        w="90%"
      >
        <Container align="start" h="100%" w="100%">
          @{user?.username}
        </Container>

        <HeaderStyles />
      </Container>
      <Container
        style={{ fontSize: "11px", color: "white" }}
        h="40%"
        w="90%"
        fd="row"
        justify="space-between"
      >
        <Container
          h="100%"
          fd="row"
          justify="space-between"
          w="100%"
          align="center"
        >
          {page}
        </Container>
      </Container>
    </Container>
  );
};

export default Header;
