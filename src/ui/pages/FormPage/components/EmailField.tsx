import Container from "../../../shared_components/atoms/container/Container";

import { BaseInput } from "../../../shared_components/atoms/input/Input";
import Typography from "../../../shared_components/atoms/typography/Typography";
import Logo from "../../../shared_components/logo/Logo";

const EmailField = () => {
  return (
    <Container variant="primary" text="left" w="100%" h="30%">
      <Logo />
      <Container align="start" w="90%" h="70%">
        <Typography variant="h1">Share your worries</Typography>
        <Typography variant="normal" m="2px 0 ">
          An amazing lorem ipsum is used for dummy texts
        </Typography>
        <Typography weight={600}>Enter your email</Typography>
        <BaseInput border="solid 1px gray" w="100%" h="40px" />
      </Container>
    </Container>
  );
};

export default EmailField;
