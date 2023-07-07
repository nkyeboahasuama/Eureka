import Button from "../atoms/button/Button";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      variant="secondary"
      w="100px"
      style={{
        marginLeft: 0,
        borderRadius: "30px",
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        fontSize: "20px",
      }}
    >
      <Icon icon="ion:chevron-back" />
    </Button>
  );
};

export default BackBtn;
