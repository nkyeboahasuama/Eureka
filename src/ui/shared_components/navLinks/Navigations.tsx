import { NavLink } from "react-router-dom";
import { navStyle } from "./NavLinkStyles";

const Navigations = () => {
  const admin = localStorage.getItem("isAdminLocal")
    ? JSON.parse(localStorage.getItem("isAdminLocal")!)
    : null;

  return (
    <div style={{ display: "flex", gap: 20, fontSize: "11px" }}>
      {admin.isSuper ? (
        <>
          <NavLink style={navStyle} to={`/superadmin/validatequestions`}>
            Question poll
          </NavLink>
          <NavLink style={navStyle} to={`/superadmin/validateanswers`}>
            Answer poll
          </NavLink>
        </>
      ) : (
        <>
          <NavLink style={navStyle} to={`/admin/validquestions`}>
            Question poll
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Navigations;
