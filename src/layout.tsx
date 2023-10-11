import React, { ReactNode } from "react";

type LayoutProps = {
  // Define your props here, if needed
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
