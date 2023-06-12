import { NavLink } from "../header/Header";

export const navigations = (
  <>
    <NavLink href="/questions" isActive={true}>
      Question poll
    </NavLink>
    <NavLink href="/verifyanswer">Answer poll</NavLink>
  </>
);
