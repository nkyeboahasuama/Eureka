export const navStyle = ({ isActive }: { isActive: boolean }) => {
  return {
    color: "white",
    fontWeight: isActive ? "bold" : "normal",
    fontSize: isActive ? "13px" : "11px",
    textDecoration: "none",
  };
};
