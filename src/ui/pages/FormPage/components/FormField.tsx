import Container from "../../../shared_components/atoms/container/Container";
import { TextArea } from "../../../shared_components/atoms/input/Input";

import Button from "../../../shared_components/atoms/button/Button";
import Typography from "../../../shared_components/atoms/typography/Typography";
import { useNavigate } from "react-router-dom";
import { questionService } from "../../../../services";

const FormField = () => {
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const res = await questionService.getValidatedQuestions();
      console.log(res);
    } catch (error: any) {
      console.log(error);
    }
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
