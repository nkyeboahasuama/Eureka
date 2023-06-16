import Container from "../../../shared_components/atoms/container/Container";
import EmailField from "../components/EmailField";
import FormField from "../components/FormField";
import { questionService } from "../../../../services";
import { useState } from "react";
import { IQuestion } from "../../../../core";
import { useNavigate } from "react-router";

const FormPage = () => {
  const [user, setUser] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const userFnc = (identity: string) => {
    if (identity.trim().length > 0) {
      setUser(identity);
    } else {
      console.log("Cannot submit texts less than 5 characters");
    }
  };
  const bodyFnc = (body: string) => {
    if (body.trim().length > 0) {
      setBody(body);
    } else {
      console.log("Body cannot have less than 5 characters");
    }
  };

  const payload: Pick<IQuestion, "body" | "user"> = {
    user: user,
    body: body,
  };

  const handleSubmit = async () => {
    if (user.trim().length < 5 || body.trim().length < 5) {
      alert("User field cannot be empty");
      return;
    }

    try {
      navigate("/askquestion/success");
      const res = await questionService.addQuestion(payload);
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
