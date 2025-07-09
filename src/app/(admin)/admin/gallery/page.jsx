import ProtectedRoute from "../../../../components/Protected_Route/ProtectedRoute";
import UploadImage from "./_components/UploadImage";
import ViewGallery from "./_components/ViewGallery";

export default function page() {
  return (
    <ProtectedRoute>
      <div>
        <UploadImage />
        <ViewGallery />
      </div>
    </ProtectedRoute>
  );
}
