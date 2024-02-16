import styled from "styled-components";
import * as S from "../input/style.styled";

const SelectContainer = styled.div`
  position: relative;
`;

const SelectInput = styled(S.Input)`
  appearance: none;
  cursor: pointer;
`;

const DropdownList = styled.div`
  position: absolute;
  max-width: 300px;
  width: 100%;
  top: 88px;
  z-index: 99;
  transition: opacity 0.1s ease-in-out;
  background-color: ${({ theme }) => theme.colors.bgColor1};
  border-radius: ${({ theme }) => theme.roundCorners.medium};
  border: 1px ${({ theme }) => theme.colors.black} solid;
  overflow-y: hidden;
  overflow-x: visible;
  padding: 10px;
`;

const DropdownListItem = styled.div<{ $isSelected: boolean }>`
  padding: 10px;
  cursor: pointer;
  transition: background-color;
  border-radius: 5px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "rgba(0, 0, 0, 0.2)" : "none"};
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export { SelectContainer, DropdownList, DropdownListItem, SelectInput };
