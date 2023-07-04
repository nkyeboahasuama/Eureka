import { icons } from "../../assets";
import Container from "../atoms/container/Container";

interface LogoProps {
  icon?: any;
}

const Logo = ({ icon = icons.ic_logoLt }: LogoProps) => {
  return (
    <Container h="55px" align="start" justify="end">
      <img src={icon} style={{ height: "50px", width: "45px" }} />
    </Container>
  );
};

export default Logo;
