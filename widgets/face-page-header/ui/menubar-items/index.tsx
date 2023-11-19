import * as S from "../header/style.styled";
import { useTranslations } from "next-intl";
import { CollapsableTextButton } from "@/shared/components";
import { useState } from "react";

export default function MenubarItems() {
  const t = useTranslations("menubar");
  const [menubarItems, setMenubarItems] = useState([
    {
      id: 1,
      title: t("menuItems.products.title"),
      isActive: false,
      dropdownItems: [
        t("menuItems.products.dropdownItem1"),
        t("menuItems.products.dropdownItem2"),
      ],
    },
    {
      id: 2,
      title: t("menuItems.about.title"),
      isActive: false,
      dropdownItems: [],
    },
    {
      id: 3,
      title: t("menuItems.safety.title"),
      isActive: false,
      dropdownItems: [
        t("menuItems.safety.dropdownItem1"),
        t("menuItems.safety.dropdownItem2"),
        t("menuItems.safety.dropdownItem3"),
        t("menuItems.safety.dropdownItem4"),
        t("menuItems.safety.dropdownItem5"),
      ],
    },
    {
      id: 4,
      title: t("menuItems.support.title"),
      isActive: false,
      dropdownItems: [],
    },
    {
      id: 5,
      title: t("menuItems.download.title"),
      isActive: false,
      dropdownItems: [],
    },
  ]);
  const onSetActiveItem = (id: string) => {
    setMenubarItems((prevState) =>
      prevState.map((item) => {
        return {
          ...item,
          isActive: item.id.toString() === id,
        };
      }),
    );
  };
  return (
    <S.MenubarItems role="header-menubar">
      {menubarItems.map((item, index) => {
        return (
          <S.LineItemsItem
            id={(index + 1).toString()}
            onMouseEnter={() => onSetActiveItem((index + 1).toString())}
            onMouseLeave={() =>
              setMenubarItems((prevState) =>
                prevState.map((menubarItem) => ({
                  ...menubarItem,
                  isActive: false,
                })),
              )
            }
            key={index}>
            <CollapsableTextButton
              isActive={item.isActive}
              collapseItems={item.dropdownItems}>
              {item.title}
            </CollapsableTextButton>
          </S.LineItemsItem>
        );
      })}
    </S.MenubarItems>
  );
}
