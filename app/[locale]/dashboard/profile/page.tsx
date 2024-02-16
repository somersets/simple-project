"use client";
import WithAuth from "@/shared/hocs/with-auth";
import EditProfileForm from "@/features/forms/edit-profile-form";
import EditProfilePhotosForm from "@/features/forms/edit-profile-photos-form";

export default WithAuth(function Page() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        paddingTop: "30px",
        flexDirection: "column",
        alignItems: "center",
        gap: "80px",
        justifyContent: "center",
        overflowY: "scroll",
      }}>
      <EditProfilePhotosForm />
      <EditProfileForm />
    </div>
  );
});
