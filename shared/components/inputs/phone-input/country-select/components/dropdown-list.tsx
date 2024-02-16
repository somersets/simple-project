import * as S from "./style.styled";
import { Input } from "@/shared/components/inputs";
import {
  ForwardedRef,
  forwardRef,
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { PhoneInputContext } from "../../store/phone-input-provider";
import DropdownListItem from "./dropdown-list-item";
import { ICountryCode } from "@/shared/constants/types";
import { debounce } from "@/shared/utils/custom-lodash";
import { PHONE_INPUT_REDUCER_ACTIONS } from "@/shared/components/inputs/phone-input/model";

interface DropdownListProps {
  onSelectCodeInfo: (codeInfo: ICountryCode) => void;
  countriesLocalization: ICountryCode[] | undefined;
}

export default memo(
  forwardRef(function DropdownList(
    { onSelectCodeInfo, countriesLocalization }: DropdownListProps,
    ref: ForwardedRef<unknown>,
  ) {
    const { state, dispatch } = useContext(PhoneInputContext);

    const [searchCountry, setSearchCountry] = useState<string>("");
    const [countryCodes, setCountryCodes] = useState<ICountryCode[]>([]);

    const searchCountryCode = (searchableCountry: string) => {
      if (countriesLocalization) {
        setCountryCodes(() =>
          countriesLocalization.filter(
            (countryCode) =>
              countryCode.countryName
                .toLowerCase()
                .includes(searchableCountry.toLowerCase()) ||
              countryCode.dialCode === searchableCountry,
          ),
        );
      }
    };

    const debouncedSearchCountryCode = useCallback(
      debounce(searchCountryCode, 300),
      [countryCodes],
    );

    useEffect(() => {
      debouncedSearchCountryCode(searchCountry);
    }, [searchCountry]);

    useEffect(() => {
      if (countriesLocalization && countriesLocalization.length) {
        setCountryCodes(countriesLocalization);
      }
    }, [countriesLocalization]);

    return state.isDropdownOpen ? (
      <S.DropdownListContainerStyled
        ref={ref}
        $menuIsOpen={state.isDropdownOpen}>
        <S.DropdownListSearchContainer>
          <Input
            value={searchCountry}
            onChange={(event) => {
              setSearchCountry(event.target.value);
            }}
            label="Type country or phone code"
          />
        </S.DropdownListSearchContainer>
        <S.DropdownListStyled>
          {countryCodes && countryCodes.length
            ? countryCodes.map((countryCode) => {
                return (
                  <DropdownListItem
                    onSelectCodeInfo={(codeInfo) => {
                      onSelectCodeInfo(codeInfo);
                      dispatch(PHONE_INPUT_REDUCER_ACTIONS.DROPDOWN_CLOSE);
                    }}
                    key={countryCode.countryCode}
                    countryCodeItem={countryCode}
                  />
                );
              })
            : null}
        </S.DropdownListStyled>
      </S.DropdownListContainerStyled>
    ) : null;
  }),
);
