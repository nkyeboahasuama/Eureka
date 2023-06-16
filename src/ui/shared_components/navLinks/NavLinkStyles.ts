export const navStyle = ({ isActive }: { isActive: boolean }) => {
  return {
    color: "white",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
    fontSize: "11px",
  };
};
