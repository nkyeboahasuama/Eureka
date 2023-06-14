import Button from "../atoms/button/Button";
import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      variant="secondary"
      w="100px"
      style={{ marginLeft: 0 }}
    >
      Back
    </Button>
  );
};

export default BackBtn;
