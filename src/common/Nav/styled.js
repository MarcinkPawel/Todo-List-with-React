import styled from "styled-components";

export const Navigation = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 128, 128);
    height: 50px;
`;

export const UnList = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const ListItem = styled.li`
    padding: 15px;
    letter-spacing: 1px;


    &:hover {
    color: rgba(31, 100, 100, 0.74);
    transform: scale(1.1);
    transition: 1.5s;
  }
`;