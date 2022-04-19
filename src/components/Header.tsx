import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex w="100%" h={[13, 25]} align="center" justify="center">
      <Image h={[5, 11]} src="/images/logo.svg" alt="logo" />
    </Flex>
  );
}
