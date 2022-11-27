import { Icon } from "@chakra-ui/react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcPrevious, FcNext } from "react-icons/fc";
const Eye = () => <Icon as={FiEye} />;
const EyeClose = () => <Icon as={FiEyeOff} />;
const Previous = () => <Icon as={FcPrevious} />;
const Next = () => <Icon as={FcNext} />;
export { Eye, EyeClose, Previous, Next };
export { default as Wave } from "./wave";
