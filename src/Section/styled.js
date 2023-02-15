import styled, {css} from "styled-components";

export const SectionStyle = styled.section`
    padding: 10px;
    border: 1px solid rgba(189, 188, 188, 0.521);
    border-collapse: collapse;
    background-color: white; 
`;

export const Header = styled.div`
    margin: 0;
   
    ${({grid}) => grid && css`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 50px;
    gap: 0px 10px;
    grid-auto-flow: row;
    align-items: center;
    border-bottom: 1px solid rgba(189, 188, 188, 0.521);
    `}
`;

export const SubHeader = styled.h2`
    padding: 10px 20px;
    font-size: 20px;
    display: inline-block;  
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 50px;
    gap: 0px 10px;
    grid-auto-flow: row;
    align-items: center;
`;
