import { Flex, IconButton, Text } from "@chakra-ui/react";
import { Next } from "../icons";

const SeeAll = ({ onClick }: { onClick: () => void }) => {
  return (
    <Flex align="center" mt={4} gap={2}>
      <Text fontSize="sm">See All</Text>
      <IconButton
        onClick={onClick}
        variant="unstyled"
        aria-label="see all"
        p={0}
        size="sm"
        sx={{
          pt: 0.5,
          borderRadius: "50%",
          border: "1px solid #0099ff",
          "&:hover": {
            bg: "gray.50",
          },
        }}
        icon={<Next />}
      />
    </Flex>
  );
};

export default SeeAll;
