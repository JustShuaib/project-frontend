import { useState, useEffect, useCallback } from "react";
import { IconButton } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll, checkScrollTop]);
  return (
    <IconButton
      aria-label="Back to top"
      icon={<ChevronUpIcon w={7} h={7} />}
      size={["md"]}
      position="fixed"
      bottom={4}
      right={4}
      zIndex={30}
      display={showScroll ? "flex" : "none"}
      onClick={scrollTop}
      sx={{
        bg: "gray.200",
        "&:hover": {
          bg: "gray.300",
        },
        "@keyframes expand": {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        animation: "expand 1.5s infinite",
      }}
    />
  );
};
export default BackToTop;
