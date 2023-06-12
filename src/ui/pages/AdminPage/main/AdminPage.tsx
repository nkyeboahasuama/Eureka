import React from "react";
import Container from "../../../shared_components/atoms/container/Container";
import Header from "../../../shared_components/header/Header";
import QuestionField from "../components/QuestionField";
import AnswerField from "../components/AnswerField";
import InfoField from "../components/InfoField";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../shared_components/atoms/button/Button";

const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <Container justify="space-between">
      <Header page="Questions" />

      <InfoField />
      <QuestionField />
      <AnswerField />
    </Container>
  );
};

export default AdminPage;
