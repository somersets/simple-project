import Image from "next/image";
import * as S from "./style.styled";
const DropdownIndicator = ({
  onClick,
  isDropdownOpen,
}: {
  onClick?: () => void;
  isDropdownOpen: boolean;
}) => {
  const SIZE = 20;
  return (
    <S.DropdownIndicatorStyled $menuIsOpen={isDropdownOpen}>
      <Image
        id="dropdown-indicator"
        onClick={onClick}
        src="/images/icons/arrow.svg"
        width={SIZE}
        height={SIZE}
        alt="chevron"
      />
    </S.DropdownIndicatorStyled>
  );
};

export default DropdownIndicator;
