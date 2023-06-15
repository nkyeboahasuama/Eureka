import { NavLink } from "react-router-dom";
import { navStyle } from "./NavLinkStyles";

const Navigations = () => {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <NavLink style={navStyle} to="/validatequestions">
        Question poll
      </NavLink>
      <NavLink style={navStyle} to="/validateanswers">
        Answer poll
      </NavLink>
    </div>
  );
};

export default Navigations;
