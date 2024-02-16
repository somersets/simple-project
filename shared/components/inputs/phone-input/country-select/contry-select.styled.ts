import styled from "styled-components";

const CodeSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: 1.5px;
`;
const CodeSelectLabel = styled.div`
  position: relative;
  padding-top: 10px;
  padding-left: 5px;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.colors.white}}
`;

const CodeSelect = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.roundCorners.medium} 0 0
    ${({ theme }) => theme.roundCorners.medium};
`;
const Code = styled.span`
  margin-right: 16px;
  color: ${({ theme }) => theme.colors.white}}
`;

const IconWrapper = styled.div``;

export { CodeSelect, CodeSelectContainer, IconWrapper, CodeSelectLabel, Code };
