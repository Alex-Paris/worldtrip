import { Divider, Flex, Image, Text } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Slide } from '../components/Slide';

export default function Home() {
  // return <Slide />;
  return (
    <>
      <Flex direction="column">
        <Header />

        <Flex w="full" align="center" justify="center">
          <Image
            w="full"
            h="sm"
            objectFit="cover"
            src="/images/background.svg"
            alt="background"
          />
          <Flex
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            w="full"
            maxW="1240px"
            align="center"
            px={10}
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
                src="/images/airplane.svg"
                alt="airplane"
              />
            </Flex>
          </Flex>
        </Flex>

        <Flex w="full" maxW="1240px" alignSelf="center" direction="column">
          <Flex
            display="grid"
            gridTemplateColumns="repeat(5, 1fr)"
            w="full"
            my={20}
          >
            <Flex direction="column" align="center" justify="center">
              <Image
                w="5.31rem"
                h="5.31rem"
                src="/images/cocktail.svg"
                alt="nightlife"
              />
              <Text
                as="strong"
                fontSize="2xl"
                fontWeight="semibold"
                color="dark.text"
                align="center"
              >
                vida noturna
              </Text>
            </Flex>
            <Flex direction="column" align="center" justify="center">
              <Image
                w="5.31rem"
                h="5.31rem"
                src="/images/surf.svg"
                alt="beach"
              />
              <Text
                as="strong"
                fontSize="2xl"
                fontWeight="semibold"
                color="dark.text"
                align="center"
              >
                praia
              </Text>
            </Flex>
            <Flex direction="column" align="center" justify="center">
              <Image
                w="5.31rem"
                h="5.31rem"
                src="/images/building.svg"
                alt="modern"
              />
              <Text
                as="strong"
                fontSize="2xl"
                fontWeight="semibold"
                color="dark.text"
                align="center"
              >
                moderno
              </Text>
            </Flex>
            <Flex direction="column" align="center" justify="center">
              <Image
                w="5.31rem"
                h="5.31rem"
                src="/images/museum.svg"
                alt="classic"
              />
              <Text
                as="strong"
                fontSize="2xl"
                fontWeight="semibold"
                color="dark.text"
                align="center"
              >
                clássico
              </Text>
            </Flex>
            <Flex direction="column" align="center" justify="center">
              <Image
                w="5.31rem"
                h="5.31rem"
                src="/images/earth.svg"
                alt="more"
              />
              <Text
                as="strong"
                fontSize="2xl"
                fontWeight="semibold"
                color="dark.text"
                align="center"
              >
                e mais...
              </Text>
            </Flex>
          </Flex>

          <Divider
            w="5.625rem"
            border="2px"
            borderStyle="solid"
            borderColor="dark.text"
            alignSelf="center"
          />

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
