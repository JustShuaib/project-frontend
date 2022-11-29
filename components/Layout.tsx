import Head from "next/head";
import { ReactNode } from "react";

const Layout = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <>{children}</>
    </>
  );
};

export default Layout;
