import React from "react";
import Loader from "../../shared_components/loader/Loader";
import Header from "../../shared_components/header/Header";
import { BodyContainer } from "../../shared_components/atoms/container/ContainerStyles";
import Typography from "../../shared_components/atoms/typography/Typography";
import BackBtn from "../../shared_components/backBtn/BackBtn";

const NoContent = () => {
  return (
    <div>
      <Header />
      <BodyContainer>
        <BodyContainer
          w="90%"
          style={{
            display: "flex",
            alignItems: "start",
            height: "50px",
          }}
        >
          <BackBtn />
        </BodyContainer>
        <BodyContainer>
          <Typography variant="h1">404</Typography>
          <Typography variant="h3">
            Sorry, we couldn't find that page.
          </Typography>
        </BodyContainer>
      </BodyContainer>
    </div>
  );
};

export default NoContent;
