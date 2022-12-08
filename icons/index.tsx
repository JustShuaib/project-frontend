import { Icon } from "@chakra-ui/react";
import type { IconProps } from "@chakra-ui/react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcPrevious, FcNext } from "react-icons/fc";
import { BsArrowLeft } from "react-icons/bs";
import { IoChevronBackOutline } from "react-icons/io5";
const Eye = () => <Icon as={FiEye} />;
const EyeClose = () => <Icon as={FiEyeOff} />;
const Previous = () => <Icon as={FcPrevious} />;
const Next = () => <Icon as={FcNext} />;
const ArrowLeft = (props: IconProps) => <Icon as={BsArrowLeft} {...props} />;
const Back = (props: IconProps) => (
  <Icon as={IoChevronBackOutline} {...props} />
);
export { Eye, EyeClose, Previous, Next, ArrowLeft, Back };
export { default as Wave } from "./wave";
