import React from "react";
import WhiteField from "../components/WhiteField";
import SuccessField from "../components/SuccessField";
import Container from "../../../shared_components/atoms/container/Container";

const SuccessPage = () => {
  return (
    <Container m="10px auto" border="solid 1px black">
      <WhiteField />
      <SuccessField />
    </Container>
  );
};

export default SuccessPage;
