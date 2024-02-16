import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { APP_ROUTES } from "@/shared/enums/app-routes";

export default function useSidebarStaticData() {
  const t = useTranslations("sidebarMenu");
  const menuItems = useMemo(
    () => [
      {
        icon: "faUser",
        name: `${t("profile")}`,
        route: APP_ROUTES.PROFILE,
      },
      {
        icon: "faSearch",
        name: `${t("searchPartner")}`,
        route: APP_ROUTES.SEARCH_PARTNER,
      },
      {
        icon: "faMessage",
        name: `${t("messages")}`,
        route: APP_ROUTES.MESSENGER,
      },
      {
        icon: "faDownLeftAndUpRightToCenter",
        name: `${t("matches")}`,
        route: APP_ROUTES.MATCHES,
      },
      {
        icon: "faStar",
        name: `${t("favorites")}`,
        route: APP_ROUTES.FAVORITES,
      },
      {
        icon: "faClockRotateLeft",
        name: `${t("swipeHistory")}`,
        route: APP_ROUTES.SEARCH_PARTNER_HISTORY,
      },
      {
        icon: "faGear",
        name: `${t("settings")}`,
        route: APP_ROUTES.SETTINGS,
      },
    ],
    [t],
  );

  return {
    menuItems,
  };
}
