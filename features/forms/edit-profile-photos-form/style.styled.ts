import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const PhotosContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 290px 290px 290px;
  grid-template-rows: 230px 230px;
  justify-content: center;
  //gap: 15px;
  align-items: center;
  width: 80%;
  //height: 380px;
  //overflow-x: scroll;
  border-radius: 5px;
  //flex-shrink: 0;
`;

const Title = styled.h1`
  
`;

const Photo = styled.div`
  position: relative;
  height: 100%;
  //width: 320px;
  width: auto;
  flex: 0 0 auto;
  border-radius: 5px;
  touch-action: none;
`;

const AddPhotoSlot = styled.label`
  background-color: ${({ theme }) => theme.colors.grey4};
  height: 100%;
  //width: 320px;
  flex: 0 0 auto;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PhotoImage = styled(Image)`
  width: 100%;
  height: 100%;
  transition: filter 0.2s ease-in-out;
  cursor: pointer;
`;

const PhotoImageEditLayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  z-index: 1;
  opacity: 0;
  top: 0;
  transition: opacity ease-in-out 0.2s;
  position: absolute;
  width: 100%;
  height: 100%;
  &:hover {
    cursor: grab;
    z-index: 2;
    opacity: 1;
    & + img {
      filter: blur(8x);
      -webkit-filter: blur(8px);
      backdrop-filter: blur(8px);
    }
  }
`;

const EditBtn = styled.label`
  cursor: pointer;
`;
const RemoveBtn = styled.div`
  cursor: pointer;
`;


export {
  PhotosContainer,
  Photo,
  PhotoImage,
  AddPhotoSlot,
  Container,
  Title,
  PhotoImageEditLayer,
  EditBtn,
  RemoveBtn,
};
