import styled, { css } from "styled-components";

export const TaskList = styled.ul`
  padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 20px;
    padding: 10px;
    border-bottom: 1px solid gray;
    align-items: center;

  ${({ hidden }) => hidden && css`
      display: none;
  `}
`;

export const TaskDone = styled.span`
  ${({ done }) => done && css`
    text-decoration: line-through;
  `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    color: white;
`;

export const ToggleDoneButton = styled(Button)`
    background-color: rgb(0, 128, 0);
    transition: 1s;

        &:hover {
            background-color: rgba(0, 128, 0, 0.75);
        };
        &:active {
            background-color: rgba(0, 128, 0, 0.5);
        };
`;

export const RemoveButton = styled(Button)`
    background-color: rgb(255, 0, 0);
    transition: 1s;

      &:hover {
        background-color: rgba(255, 0, 0, 0.75);
      };
      &:active {
        background-color: rgba(255, 0, 0, 0.5);
        };
`;