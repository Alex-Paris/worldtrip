import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex w="100%" h="100px" align="center" justify="center">
      <Image maxH="2.87rem" src="/images/logo.svg" alt="logo" />
    </Flex>
  );
}
