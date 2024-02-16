import useSidebarStaticData from "@/shared/hooks/use-sidebar-static-data";
import * as S from "./style.styled";
import { Typography } from "@/shared/components";
import Icon from "@/shared/components/icon";
import { BaseIcon } from "@/shared/components/icon/model";
import theme from "@/theme/theme";
import { useRouter } from "next/navigation";
export default function SidebarMenu() {
  const { menuItems } = useSidebarStaticData();
  const router = useRouter();
  return (
    <S.SidebarMenuContainer>
      {menuItems.map((item) => {
        return (
          <S.SidebarMenuItem
            onClick={() => router.push(item.route)}
            key={item.name}>
            <Icon
              size="xl"
              color={theme.colors.white}
              icon={item.icon as BaseIcon}
            />
            <Typography>{item.name}</Typography>
          </S.SidebarMenuItem>
        );
      })}
    </S.SidebarMenuContainer>
  );
}
