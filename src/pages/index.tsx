import { Divider, Flex, Image, Text } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Slide } from '../components/Slide';

export default function Home() {
  // return <Slide />;
  return (
    <>
      <Flex direction="column">
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
                fontWeight="medium"
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

        <Flex w="full" p="0 8.75rem" align="center" direction="column">
          <Flex
            display="grid"
            gridTemplateColumns="repeat(5, 1fr)"
            w="full"
            my="20"
          >
            <Flex direction="column" align="center" justify="center">
              <Image
                w="5.31rem"
                h="5.31rem"
                src="/airplane.svg"
                alt="airplane"
              />
              <Text
                as="strong"
                fontSize="2xl"
                fontWeight="semibold"
                color="dark.text"
                align="center"
              >
                Vida noturna
              </Text>
            </Flex>
            <Flex direction="column" align="center" justify="center">
              <Image
                w="5.31rem"
                h="5.31rem"
                src="/airplane.svg"
                alt="airplane"
              />
              <Text
                as="strong"
                fontSize="2xl"
                fontWeight="semibold"
                color="dark.text"
                align="center"
              >
                Vida noturna
              </Text>
            </Flex>
            <Flex direction="column" align="center" justify="center">
              <Image
                w="5.31rem"
                h="5.31rem"
                src="/airplane.svg"
                alt="airplane"
              />
              <Text
                as="strong"
                fontSize="2xl"
                fontWeight="semibold"
                color="dark.text"
                align="center"
              >
                Vida noturna
              </Text>
            </Flex>
            <Flex direction="column" align="center" justify="center">
              <Image
                w="5.31rem"
                h="5.31rem"
                src="/airplane.svg"
                alt="airplane"
              />
              <Text
                as="strong"
                fontSize="2xl"
                fontWeight="semibold"
                color="dark.text"
                align="center"
              >
                Vida noturna
              </Text>
            </Flex>
            <Flex direction="column" align="center" justify="center">
              <Image
                w="5.31rem"
                h="5.31rem"
                src="/airplane.svg"
                alt="airplane"
              />
              <Text
                as="strong"
                fontSize="2xl"
                fontWeight="semibold"
                color="dark.text"
                align="center"
              >
                Vida noturna
              </Text>
            </Flex>
          </Flex>

          <Divider w="5.625rem" border="2px" borderColor="dark.text" />

          <Text
            as="h1"
            my="13"
            fontSize="4xl"
            fontWeight="medium"
            color="dark.text"
            align="center"
          >
            Vamos nessa? Então escolha seu continente
          </Text>

          <Slide />
        </Flex>
      </Flex>
    </>
  );
}
