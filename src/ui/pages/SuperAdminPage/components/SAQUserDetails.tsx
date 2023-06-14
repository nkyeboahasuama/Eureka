import React from "react";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";
import Date from "../../../shared_components/date/Date";
import UserEmail from "../../../shared_components/user/UserEmail";

const SAQUserDetails = () => {
  return (
    <BodyContainer justify="space-between" w="100%" fd="row" m="10px 0">
      <Date />
      <UserEmail />
    </BodyContainer>
  );
};

export default SAQUserDetails;
