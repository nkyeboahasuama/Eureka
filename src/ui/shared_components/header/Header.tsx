import Container from "../atoms/container/Container";
import Typography from "../atoms/typography/Typography";
import HeaderStyles from "./HeaderStyles";
import React, { ReactNode } from "react";

interface HeaderProps {
  page?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ page }) => {
  return (
    <Container style={{ flexShrink: 0 }} variant="secondary" w="100%" h="100px">
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
