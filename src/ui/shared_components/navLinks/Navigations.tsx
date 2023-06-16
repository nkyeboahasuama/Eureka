import { NavLink, useParams } from "react-router-dom";
import { navStyle } from "./NavLinkStyles";

const Navigations = () => {
  const superAdminData = localStorage.getItem("isSuperLocal")
    ? JSON.parse(localStorage.getItem("isSuperLocal")!)
    : null;
  const em = superAdminData.email;
  console.log(em);
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <NavLink style={navStyle} to={`/superadmin/validatequestions`}>
        Question poll
      </NavLink>
      <NavLink style={navStyle} to={`/superadmin/validateanswers`}>
        Answer poll
      </NavLink>
    </div>
  );
};

export default Navigations;
