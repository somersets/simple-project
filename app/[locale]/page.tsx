import { FacingPageHeader } from "../../widgets/face-page-header";
import "./style.css";
import { FacePageLayout } from "@/widgets/face-page-layout";

export default function Page() {
  return (
    <div className="main-layout">
      <FacingPageHeader />
      <FacePageLayout />
    </div>
  );
}
