import React, { PropsWithChildren } from "react";
import Header from "./Header";

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  );
}

export default Layout;
