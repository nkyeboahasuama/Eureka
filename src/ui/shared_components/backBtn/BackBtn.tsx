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
        borderRadius: "28px",
        width: "28px",
        height: "28px",
        display: "flex",
        justifyContent: "center",
        padding: 0,
        margin: 0,
      }}
    >
      <Icon
        icon="ion:chevron-back"
        style={{
          fontSize: "15px",
          padding: 0,
          margin: 0,
          width: "12px",
        }}
      />
    </Button>
  );
};

export default BackBtn;
