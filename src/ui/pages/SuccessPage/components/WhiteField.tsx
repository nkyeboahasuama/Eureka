import Container from "../../../shared_components/atoms/container/Container";
import Logo from "../../../shared_components/logo/Logo";
import Typography from "../../../shared_components/atoms/typography/Typography";

const WhiteField = () => {
  return (
    <Container variant="primary" h="40%">
      <Logo />
      <Container h="80%" w="91%">
        <Typography variant="h1">Just white space!</Typography>
      </Container>
    </Container>
  );
};

export default WhiteField;
