import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100%;
  padding: ${({ theme }) => theme.margins.mediumLarge};
  background-color: #222222;
  border-radius: ${({ theme }) => theme.roundCorners.large};
`;

const LeftSide = styled.div`
  max-width: 316px;
  border-right: 1px solid ${({ theme }) => theme.colors.grey3};
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const RightSideHeader = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey3};
`;

const RightSideHeaderLeft = styled.div`
  padding: 15px 20px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const RightSideHeaderRight = styled.div`
`;

const RecipientName = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;
const RecipientStatus = styled.span`
  color: ${({ theme }) => theme.colors.grey3};
`;

const ChatMessageListContainer = styled.div`
  flex: 1;
  overflow: auto;
`;

const ChatInputContainer = styled.div`
  padding: 10px 20px;
`;

export {
  Container,
  LeftSide,
  RightSide,
  ChatMessageListContainer,
  ChatInputContainer,
  RightSideHeader,
  RightSideHeaderLeft,
  RightSideHeaderRight,
  RecipientName,
  RecipientStatus,
};
