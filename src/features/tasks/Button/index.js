import styled, { css } from "styled-components";

export default styled.button`
  border: none;
  background-color: white;
  color: rgb(0, 128, 128);
  padding: 10px 0;
  margin-right: 10px;
  align-self: center;
  transition: 1s;

  ${({ disabled }) =>
    disabled &&
    css`
      color: grey;
      transform: none;
    `}

  &:hover {
    color: rgba(31, 100, 100, 0.74);
    transform: scale(1.1);
  }
  &:active {
    color: rgba(0, 128, 128, 0.5);
    transform: scale(1.1);
  }
`;
