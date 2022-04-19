import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';

import styled from './slide.module.scss';

export function Slide() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  const swiper: SwiperProps = {
    className: isWideVersion ? styled.swiper : styled.swiperMobile,
    modules: [Navigation, Pagination, Autoplay, Keyboard],
    speed: 500,
    loop: true,
    keyboard: true,
    navigation: true,

    pagination: {
      clickable: true,
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },

    onSlideChange: () => console.log('slide change'),
    onSwiper: swiper => console.log(swiper),
  };

  return (
    <Flex w="full">
      <Swiper {...swiper}>
        <SwiperSlide>
          <Flex w="full" h="full" justify="center" align="center">
            <Image
              w="full"
              h="full"
              display="block"
              objectFit="cover"
              src="/images/continent.svg"
              alt="continent"
            />
            <Flex
              position="absolute"
              justify="center"
              align="center"
              flexDir="column"
            >
              <Text
                as="h1"
                fontSize={['2xl', '5xl']}
                fontWeight="bold"
                color="light.text"
              >
                Europa
              </Text>
              <Text
                as="p"
                mt={[3, 4]}
                fontSize={['sm', '2xl']}
                fontWeight="bold"
                color="light.info"
              >
                O continente mais antigo.
              </Text>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex w="full" h="full" justify="center" align="center">
            <Image
              w="full"
              h="full"
              display="block"
              objectFit="cover"
              src="/images/continent.svg"
              alt="continent"
            />
            <Flex
              position="absolute"
              justify="center"
              align="center"
              flexDir="column"
            >
              <Text
                as="h1"
                fontSize={['2xl', '5xl']}
                fontWeight="bold"
                color="light.text"
              >
                Europa
              </Text>
              <Text
                as="p"
                mt={[3, 4]}
                fontSize={['sm', '2xl']}
                fontWeight="bold"
                color="light.info"
              >
                O continente mais antigo.
              </Text>
            </Flex>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
