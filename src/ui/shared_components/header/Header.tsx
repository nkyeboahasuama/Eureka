import Container from "../atoms/container/Container";
import Typography from "../atoms/typography/Typography";

import HeaderStyles from "./HeaderStyles";
const Header = () => {
  return (
    <Container variant="secondary" w="100%" h="15%">
      <Container fd="row" h="60%">
        <Typography variant="medium" m="0 20px">
          @Emoo201
        </Typography>
        <HeaderStyles />
      </Container>
      <Container h="40%" fd="row" justify="start">
        <Typography variant="medium" m="0 20px">
          Answer
        </Typography>
      </Container>
    </Container>
  );
};

export default Header;
