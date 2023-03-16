import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SectionStyle = styled.section`
  margin-bottom: 7px;
  padding: 15px;
  border: 1px solid rgba(189, 188, 188, 0.521);
  border-collapse: collapse;
  background-color: white;
`;

export const Header = styled.div`
  margin: 0;

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
    `}

  ${({ grid }) =>
    grid &&
    css`
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
  font-size: 20px;
  margin: 8px 0;
`;
export const HeaderContent = styled.span`
  padding: 10px;
  font-size: 16px;
`;
