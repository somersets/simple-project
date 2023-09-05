import styled from "styled-components";

const FacingPageHeader = styled.header`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 28px;
  gap: 20px;
  position: relative;
`;

const LineItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSideItems = styled(LineItems)`
  flex-wrap: wrap;
  gap: 20px;
`;

const MenubarItems = styled(LineItems)`
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
    display: none;
  }
`;
const ActionItems = styled(LineItems)`
  gap: 10px;
  @media (max-width: ${({ theme }) => theme.deviceSize.laptop}) {
    display: none;
  }
`;

const LineItemsItem = styled.div``;

export {
  FacingPageHeader,
  LineItemsItem,
  MenubarItems,
  ActionItems,
  LeftSideItems,
};
