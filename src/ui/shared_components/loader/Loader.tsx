import { BodyContainer } from "../atoms/container/ContainerStyles";
import { LoaderStyles } from "./LoaderStyles";

const Loader = () => {
  return (
    <BodyContainer style={{ height: 100 }}>
      <LoaderStyles />
    </BodyContainer>
  );
};

export default Loader;
