import { LogoStyles } from "../logo/LogoStyles";
import Container from "../atoms/container/Container";

const HeaderStyles = () => {
  return (
    <Container h="35px" align="end" justify="end">
      <LogoStyles />
    </Container>
  );
};

export default HeaderStyles;
