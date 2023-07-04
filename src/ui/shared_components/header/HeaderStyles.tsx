import Container from "../atoms/container/Container";
import { icons } from "../../assets";

const HeaderStyles = () => {
  return (
    <Container h="35px" align="end" justify="end">
      <img src={icons.ic_logo} style={{ height: "42px", width: "35px" }} />
    </Container>
  );
};

export default HeaderStyles;
