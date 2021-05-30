import React, { PropsWithChildren } from "react";

function Wrapper({ children }: PropsWithChildren<{}>) {
  return <div className="container mx-auto px-4">{children}</div>;
}

export default Wrapper;
