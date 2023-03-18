import styled, { css } from "styled-components";

export default styled.button`
  border: none;
  background-color: white;
  color: rgb(0, 128, 128);
  padding: 10px 0;
  margin-right: 10px;
  align-self: center;
  transition: all 1.5s ease 0s;

  ${({ disabled }) =>
    disabled &&
    css`
      color: grey;
      transition: none;
    `}

  &:hover {
    color: rgba(31, 100, 100, 0.74);
  }
  &:active {
    color: rgba(0, 128, 128, 0.5);
  }
`;
