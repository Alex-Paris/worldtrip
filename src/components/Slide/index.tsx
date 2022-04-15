import { Flex, Image, Text } from '@chakra-ui/react';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';

import styled from './slide.module.scss';

const swiper: SwiperProps = {
  className: styled.swiper,
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

export function Slide() {
  return (
    <Flex w="full">
      <Swiper {...swiper}>
        <SwiperSlide>
          <Flex w="full" justify="center" align="center">
            <Image
              w="100%"
              h="100%"
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
              <Text as="h1" fontSize="5xl" fontWeight="bold" color="light.text">
                Europa
              </Text>
              <Text as="p" fontSize="2xl" fontWeight="bold" color="light.info">
                O continente mais antigo.
              </Text>
            </Flex>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
