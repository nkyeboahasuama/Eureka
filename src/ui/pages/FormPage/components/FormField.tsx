import Container from "../../../shared_components/atoms/container/Container";
import { TextArea } from "../../../shared_components/atoms/input/Input";

import Button from "../../../shared_components/atoms/button/Button";
import Typography from "../../../shared_components/atoms/typography/Typography";
import { useEffect, useState } from "react";

interface IBodyFnc {
  bodyFnc: (body: string) => void;
  handleSubmit: () => Promise<void>;
}
const FormField: React.FC<IBodyFnc> = ({ bodyFnc, handleSubmit }) => {
  const [textareaContent, setTextareaContent] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      bodyFnc(textareaContent);
    }, 1000);
    return () => {
      clearTimeout(debounce);
    };
  }, [textareaContent, bodyFnc]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaContent(e.target.value);
  };

  return (
    <Container w="100%" h="65%" variant="secondary">
      <Container w="90%">
        <Container text="left" align="start" h="20%">
          <Typography variant="h2">What is on your mind?</Typography>
          <Typography variant="normal">
            Share your thoughts with an amazing community of leaders.
          </Typography>
        </Container>
        <Container h="80%">
          <TextArea
            onChange={handleChange}
            style={{
              backgroundColor: "black",
              color: "white",
              height: "79%",
              margin: 0,
            }}
          />
          <Button onClick={handleSubmit} variant="primary">
            Submit
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default FormField;
