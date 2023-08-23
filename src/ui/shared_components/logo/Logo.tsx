import { icons } from "../../assets";
import Container from "../atoms/container/Container";
import { LogoStyles } from "./LogoStyles";
import logo from "../../../assets/logo_eureka.svg";

interface LogoProps {
  icon?: any;
}

const Logo = ({ icon = icons.ic_logoLt }: LogoProps) => {
  return (
    <Container h="35px" align="start" justify="end">
      <LogoStyles>
        <img width={"100%"} src={logo} alt="Logo" />
      </LogoStyles>
    </Container>
  );
};

export default Logo;
