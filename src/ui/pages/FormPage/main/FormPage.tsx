import Container from "../../../shared_components/atoms/container/Container";
import EmailField from "../components/EmailField";
import FormField from "../components/FormField";
import { questionService } from "../../../../services";
import { useState } from "react";
import { IQuestion } from "../../../../core";

const FormPage = () => {
  const [user, setUser] = useState("");
  const [body, setBody] = useState("");

  const userFnc = (identity: string) => {
    setUser(identity);
  };
  const bodyFnc = (body: string) => {
    setBody(body);
  };

  const payload: Pick<IQuestion, "body" | "user"> = {
    user: user,
    body: body,
  };

  const handleSubmit = async () => {
    try {
      const res = await questionService.addQuestion(payload);
      console.log(res);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <Container justify="space-between">
      <EmailField userFnc={userFnc} />
      <FormField bodyFnc={bodyFnc} handleSubmit={handleSubmit} />
    </Container>
  );
};

export default FormPage;
