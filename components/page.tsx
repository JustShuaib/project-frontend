import Head from "next/head";
import { ReactNode } from "react";

const Page = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <>{children}</>
    </>
  );
};

export default Page;
