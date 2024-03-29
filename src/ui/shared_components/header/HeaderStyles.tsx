import Container from "../atoms/container/Container";
import logo from "../../../assets/logo_eureka.svg";
import { LogoStyles } from "../logo/LogoStyles";

const HeaderStyles = () => {
  return (
    <Container h="35px" align="start" justify="start">
      <LogoStyles>
        {" "}
        <img width={"100%"} src={logo} alt="Logo" />
      </LogoStyles>
    </Container>
  );
};

export default HeaderStyles;
