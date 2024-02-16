"use client";
import { FacingPageHeader } from "../../widgets/face-page-header";
import { FacePageLayout } from "@/widgets/face-page-layout";
import "./style.css";
import useServerAction from "@/shared/hooks/use-server-action";

export default function Page() {
  useServerAction();
  return (
    <div className="main-layout">
      <FacingPageHeader />
      <FacePageLayout />
    </div>
  );
}
