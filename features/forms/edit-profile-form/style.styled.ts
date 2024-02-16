import styled from "styled-components";
import { Form } from "formik";

const EditButtonContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const FormInnerWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 250px 250px 250px;
  grid-template-rows: auto auto auto;
`;

export { EditButtonContainer, FormInnerWrapper, CustomForm };
