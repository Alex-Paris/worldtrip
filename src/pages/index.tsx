import { Flex, Image, Text } from '@chakra-ui/react';

import { Header } from '../components/Header';

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" direction="column">
      <Header />

      <Flex w="full" align="center">
        <Image
          w="full"
          h="sm"
          objectFit="cover"
          src="/background.svg"
          alt="background"
        />
        <Flex
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          w="full"
          p="0 8.75rem"
          align="center"
          position="absolute"
        >
          <Flex flexDir="column">
            <Text
              as="h1"
              fontSize="4xl"
              fontWeight="semibold"
              color="light.text"
            >
              5 Continentes, <br /> infinitas possibilidades.
            </Text>
            <Text as="p" mt="20px" fontSize="xl" color="light.info">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Flex>
          <Flex visibility={['hidden', 'hidden', 'visible']}>
            <Image
              h="xs"
              marginTop="10.25rem"
              marginLeft="auto"
              src="/airplane.svg"
              alt="airplane"
            />
          </Flex>
        </Flex>
      </Flex>

      <Flex p="0 8.75rem">asd</Flex>
    </Flex>
  );
}
