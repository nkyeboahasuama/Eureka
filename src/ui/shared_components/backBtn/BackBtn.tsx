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
        width: "28px",
        height: "28px",
        display: "flex",
        justifyContent: "center",
        fontSize: "15px",
      }}
    >
      <Icon icon="ion:chevron-back" />
    </Button>
  );
};

export default BackBtn;
