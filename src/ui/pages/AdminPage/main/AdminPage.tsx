import React from "react";
import Container from "../../../shared_components/atoms/container/Container";
import Header from "../../../shared_components/header/Header";
import Typography from "../../../shared_components/atoms/typography/Typography";
import QuestionField from "../components/QuestionField";
import AnswerField from "../components/AnswerField";
import InfoField from "../components/InfoField";

const AdminPage = () => {
  return (
    <Container border="solid 1px black" m="20px auto">
      <Header />
      <InfoField />
      <QuestionField />
      <AnswerField />
    </Container>
  );
};

export default AdminPage;
