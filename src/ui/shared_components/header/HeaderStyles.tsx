import { LogoStyles } from "../logo/LogoStyles";
import Container from "../atoms/container/Container";
import logo from "../../../assets/logo_eureka.svg";

const HeaderStyles = () => {
  return (
    <Container h="35px" align="end" justify="end">
      <LogoStyles>
        {" "}
        <img width={"100%"} src={logo} alt="Logo" />
      </LogoStyles>
    </Container>
  );
};

export default HeaderStyles;
