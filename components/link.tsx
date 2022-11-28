import NextLink from "next/link";
import { Inter } from "@next/font/google";
import { ReactNode } from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
const inter = Inter({ weight: ["400"] });

const Link = ({
  href,
  children,
  color,
}: {
  href: string;
  children: ReactNode;
  color?: string;
}) => {
  return (
    <NextLink href={href} legacyBehavior passHref>
      <ChakraLink className={inter.className} color={color || "blue.500"}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};
export default Link;
