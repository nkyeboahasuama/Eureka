import { NavLink } from "react-router-dom";
import { navStyle } from "./NavLinkStyles";
import { AppRoutes } from "../../types/routing";

const Navigations = () => {
  const admin = localStorage.getItem("isAdminLocal")
    ? JSON.parse(localStorage.getItem("isAdminLocal")!)
    : null;

  return (
    <div style={{ display: "flex", gap: 20, fontSize: "11px" }}>
      {admin.isSuper ? (
        <>
          <NavLink style={navStyle} to={AppRoutes.SADMIN_QUESTIONS}>
            Question pool
          </NavLink>
          <NavLink style={navStyle} to={AppRoutes.SADMIN_ANSWERS}>
            Answer pool
          </NavLink>
        </>
      ) : (
        <>
          <NavLink style={navStyle} to={AppRoutes.ADMIN_QUESTIONS}>
            Question pool
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Navigations;
