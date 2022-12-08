import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { Center, Flex, Spinner, Toast } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../services/hooks";
import { setRedirectLink } from "../services/slices";

const RouteGuard = ({ children }: { children: ReactElement }) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const { token } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authCheck = () => {
      if (!token) {
        setAuthorized(false);
        dispatch(setRedirectLink({ goto: router.asPath }));
        router.push({
          pathname: "/login",
        });
      } else setAuthorized(true);
    };

    authCheck();

    const preventAccess = () => setAuthorized(false);

    router.events.on("routeChangeStart", preventAccess);
    router.events.on("routeChangeComplete", authCheck);

    return () => {
      router.events.off("routeChangeStart", preventAccess);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [dispatch, router, router.events, token]);

  return authorized ? (
    <>{children}</>
  ) : (
    <Center
      h="100vh"
      // w="100vw"
      // justifyContent="right"
      // alignItems="flex-start"
      // justifyContent="center"
      // alignItems="center"
      // p={8}
      bg="gray.100"
    >
      {/* <Toast
        description="Looks like your session expired, please login again"
        status="error"
      /> */}
      {/* <Spinner size="xl" sx={{ position: "fixed", left: "50%", top: "50%" }} /> */}
      <Spinner size="xl" />
    </Center>
  );
};

export default RouteGuard;
