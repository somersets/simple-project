import styled from "styled-components";

interface IDropdownIndicatorStyled {
  $menuIsOpen: boolean;
}

interface IDropdownListContainerStyled {
  $menuIsOpen: boolean;
}

const DropdownListContainerStyled = styled.div<IDropdownListContainerStyled>`
  position: absolute;
  width: 300px;
  top: 88px;
  z-index: 99;
  transition: opacity 0.1s ease-in-out;
  background-color: ${({ theme }) => theme.colors.bgColor1};
  border-radius: ${({ theme }) => theme.roundCorners.medium};
  border: 1px ${({ theme }) => theme.colors.black} solid;
  height: 300px;
  overflow-y: hidden;
  overflow-x: visible;
`;
const DropdownListStyled = styled.div`
  padding: 10px;
  overflow: scroll;
  height: 180px;
`;

const DropdownListItemStyled = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  transition: background-color;
  border-radius: 5px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "rgba(0, 0, 0, 0.2)" : "none"};
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const DropdownListItemFlagStyled = styled.div`
  margin-right: 10px;
`;
const DropdownListItemNameStyled = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;
const DropdownListItemCodeStyled = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin-right: 10px;
`;

const DropdownListSearchContainer = styled.div`
  padding: 10px;
`;

const DropdownIndicatorStyled = styled.div<IDropdownIndicatorStyled>`
  transition: transform 0.1s ease-in-out;
  cursor: pointer;
  transform: ${({ $menuIsOpen }) => ($menuIsOpen ? "rotateZ(180deg)" : "")};
`;

export {
  DropdownIndicatorStyled,
  DropdownListStyled,
  DropdownListContainerStyled,
  DropdownListSearchContainer,
  DropdownListItemStyled,
  DropdownListItemFlagStyled,
  DropdownListItemNameStyled,
  DropdownListItemCodeStyled,
};
