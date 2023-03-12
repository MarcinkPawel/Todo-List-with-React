import {ListItem, Navigation, UnList} from "./styled"
import { StyledNavLink } from "../../styled";

export default () => {
  return (
  <Navigation>
    <UnList>
      <ListItem>
        <StyledNavLink activeClassName to="/tasks">
          Tasks
        </StyledNavLink>
      </ListItem>
      <ListItem>
        <StyledNavLink activeClassName to="/author">
          About
        </StyledNavLink>
      </ListItem>
    </UnList>
  </Navigation>
)};
