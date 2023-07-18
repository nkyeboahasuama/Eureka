import React from "react";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";
import Date from "../../../shared_components/date/Date";
import UserEmail from "../../../shared_components/user/UserEmail";

interface ISuperAdminUserProps {
  user: string;
  date: string;
}

const SAQUserDetails: React.FC<ISuperAdminUserProps> = ({ user, date }) => {
  return (
    <BodyContainer justify="space-between" w="100%" fd="row">
      <Date date={date} />
      <UserEmail user={user} />
    </BodyContainer>
  );
};

export default SAQUserDetails;
