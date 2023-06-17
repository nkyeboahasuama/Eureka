import Container from "../../../shared_components/atoms/container/Container";
import EmailField from "../components/EmailField";
import FormField from "../components/FormField";
import { questionService } from "../../../../services";
import { useState } from "react";
import { IQuestion } from "../../../../core";
import { useNavigate } from "react-router";
import { BodyContainer } from "../../../shared_components/atoms/container/ContainerStyles";

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
    if (user.trim().length < 0 || body.trim().length < 0) {
      alert("User field cannot be empty");
      return;
    }

    try {
      const res = await questionService.addQuestion(payload);

      console.log(res);
    } catch (error: any) {
      console.log(error);
    }
    navigate("/askquestion/success");
  };
  return (
    <Container justify="space-between">
      <BodyContainer style={{ height: "35%" }}>
        <EmailField userFnc={userFnc} />
      </BodyContainer>

      <BodyContainer
        bg="black"
        style={{ height: "65%", color: "white", gap: 5 }}
      >
        <FormField bodyFnc={bodyFnc} handleSubmit={handleSubmit} />
      </BodyContainer>
    </Container>
  );
};

export default FormPage;
