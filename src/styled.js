import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  &.${activeClassName} {
    color: white;
    font-weight: 700;
    transform: scale(1.1);
  }
  text-decoration: none;
  color: white;
`;
