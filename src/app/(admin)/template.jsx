"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthProvider } from "../../components/Authentication/Authentication";
import LogoutButton from "./admin/login/__container/Logout";
import NavbarForDashboard from "../../components/shared/navbar/NavbarForDashboard";

const template = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <AuthProvider>
      <div className="min-h-screen bg-gray-100">

        <NavbarForDashboard />

            {/* Main Content */}
            <div className="ml-64 p-8">{children}</div>
          </div>
      </AuthProvider>
    </>
  );
};

export default template;
