import Container from "../../../shared_components/atoms/container/Container";
import Typography from "../../../shared_components/atoms/typography/Typography";
import Logo from "../../../shared_components/logo/Logo";

const EmailField = () => {
  return (
    <Container text="left" w="100%" h="40%">
      <Logo />
      <Container align="start" w="90%" h="75%">
        <Typography variant="h1">Share your worries</Typography>
        <Typography textAlign="start" variant="normal" m="2px 0 ">
          An amazing lorem ipsum is used for dummy texts
        </Typography>
        <Typography weight={600}>Enter your email</Typography>
        <input style={{ height: "40px", width: "100%", fontSize: 18 }} />
      </Container>
    </Container>
  );
};

export default EmailField;
