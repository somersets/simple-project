import styled from "styled-components";
import Image from "next/image";

const ProfileLogoWrapper = styled.div`
  width: 120px;
  height: 120px;
`;

const ProfileLogoImage = styled(Image)`
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;

export { ProfileLogoImage, ProfileLogoWrapper };
