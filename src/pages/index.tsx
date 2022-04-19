import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { GoPrimitiveDot } from 'react-icons/go';

import { Header } from '../components/Header';
import { Slide } from '../components/Slide';

const travelTypes = [
  {
    title: 'nightlife',
    icon: '/images/cocktail.svg',
    description: 'vida noturna',
  },
  {
    title: 'beach',
    icon: '/images/surf.svg',
    description: 'praia',
  },
  {
    title: 'modern',
    icon: '/images/building.svg',
    description: 'moderno',
  },
  {
    title: 'classic',
    icon: '/images/museum.svg',
    description: 'clássico',
  },
  {
    title: 'more',
    icon: '/images/earth.svg',
    description: 'e mais...',
  },
];

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  function isMobileEntireRow(index: number): number {
    if (
      !isWideVersion && // When it's mobile version
      travelTypes.length - 1 === index && // and it's the last index one
      travelTypes.length % 2 !== 0 // and travel vector it's odd
    ) {
      return 2; // Occupy the entire row
    }
    return 1;
  }

  function isMobileAlignment(index: number): string {
    if (
      isWideVersion || // When it's not mobile version
      (travelTypes.length === index + 1 && // or if it's the last index one
        travelTypes.length % 2 !== 0) // and travel vector it's odd
    ) {
      return 'center'; // Occupy the center
    }

    // If it's odd
    if ((index + 1) % 2 !== 0) {
      return 'left';
    }

    // If it's even
    return 'right';
  }

  return (
    <>
      <Flex direction="column">
        <Header />

        <Flex w="full" align="center" justify="center">
          <Image
            w="full"
            h={[40, 'sm']}
            objectFit="cover"
            src="/images/background.svg"
            alt="background"
          />
          <Flex
            display="grid"
            gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
            w="full"
            maxW="1240px"
            align="center"
            px={[4, 10]}
            position="absolute"
          >
            <Flex flexDir="column">
              <Text
                as="h1"
                fontSize={['xl', '4xl']}
                fontWeight="medium"
                color="light.text"
              >
                5 Continentes, <br /> infinitas possibilidades.
              </Text>
              <Text
                as="p"
                mt={[2, 5]}
                fontSize={['sm', 'xl']}
                color="light.info"
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Flex>
            {isWideVersion && (
              <Flex>
                <Image
                  h="xs"
                  mt={41}
                  ml="auto"
                  src="/images/airplane.svg"
                  alt="airplane"
                />
              </Flex>
            )}
          </Flex>
        </Flex>

        <Flex w="full" maxW="1240px" alignSelf="center" direction="column">
          <Grid
            templateColumns={['repeat(2, 1fr)', 'repeat(5, 1fr)']}
            w="full"
            my={[9, 20]}
            px={12}
            // gap={6}
            gridColumnGap={2}
            gridRowGap={6}
          >
            {travelTypes.map((travel, index) => (
              <GridItem
                key={travel.title}
                display="flex"
                flexDirection={['row', 'column']}
                alignItems="center"
                colSpan={isMobileEntireRow(index)}
                justifySelf={isMobileAlignment(index)}
              >
                {isWideVersion ? (
                  <Image
                    w="5.31rem"
                    h="5.31rem"
                    src={travel.icon}
                    alt={travel.title}
                  />
                ) : (
                  <Icon as={GoPrimitiveDot} mr={2} color="highlight" />
                )}
                <Text
                  as="strong"
                  fontSize={['lg', '2xl']}
                  fontWeight="semibold"
                  color="dark.text"
                  verticalAlign="center"
                >
                  {travel.description}
                </Text>
              </GridItem>
            ))}
          </Grid>

          <Divider
            w="5.625rem"
            border="2px"
            borderStyle="solid"
            borderColor="dark.text"
            alignSelf="center"
          />

          <Text
            as="h1"
            my={[6, 13]}
            fontSize={['xl', '4xl']}
            fontWeight="medium"
            color="dark.text"
            align="center"
          >
            Vamos nessa? {!isWideVersion && <br />} Então escolha seu continente
          </Text>

          <Slide />
        </Flex>
      </Flex>
    </>
  );
}
