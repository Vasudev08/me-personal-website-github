import { ReactNode } from "react";
import Sidebar from "./components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex ">
      <Sidebar />
      <main className="flex-1 p-4 ml-32">{children}</main>
    </div>
  );
};
export default Layout;
