import styled from "styled-components";

const RegisterButtonContainer = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 10px;
  justify-content: center;
`;

export { RegisterButtonContainer, FormInnerWrapper };
