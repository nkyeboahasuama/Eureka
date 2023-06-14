import Container from "../../../shared_components/atoms/container/Container";
import Typography from "../../../shared_components/atoms/typography/Typography";
import Button from "../../../shared_components/atoms/button/Button";
import { useNavigate } from "react-router-dom";

const SuccessField = () => {
  const navigate = useNavigate();
  return (
    <Container h="65%" variant="secondary">
      <Container w="90%">
        <Container w="90%" h="83%" justify="start">
          <Typography variant="h1">{"\u{1F389}"}Congratulations!</Typography>
          <Typography variant="normal">
            An answer will be sent to via your mail soon.
          </Typography>
        </Container>
        <Button onClick={() => navigate(-1)} variant="primary">
          Back to home
        </Button>
      </Container>
    </Container>
  );
};

export default SuccessField;
