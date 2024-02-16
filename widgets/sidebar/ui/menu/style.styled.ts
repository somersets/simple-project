import styled from "styled-components";

const SidebarMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 400px;
  width: 100%;
  padding: 16px 0 16px 0;
  background: linear-gradient(to right, #fc5c7d, #6a82fb);
`;

const SidebarMenuItem = styled.div`
  padding: 16px;
  cursor: pointer;
  transition: --myColor1 0.2s ease-in-out;
  background: var(--myColor1);
  &:hover {
    --myColor1: ${({ theme }) => theme.colors.bgColor1};
  }
  & > svg:first-child {
    margin-right: ${({ theme }) => theme.margins.upperbase};
  }
`;

export { SidebarMenuContainer, SidebarMenuItem };
