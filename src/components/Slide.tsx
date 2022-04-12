import { Flex, Image } from '@chakra-ui/react';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const swiper: SwiperProps = {
  modules: [Navigation, Pagination, Autoplay, Keyboard],
  speed: 500,
  keyboard: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  onSlideChange: () => console.log('slide change'),
  onSwiper: swiper => console.log(swiper),
};

export function Slide() {
  return (
    <Flex w="full">
      <Swiper style={{ width: '100%', height: '100%' }} {...swiper}>
        <SwiperSlide
          style={{
            width: '1000px',
            justifyContent: 'center',
            alignItems: 'center',

            textAlign: 'center',
            fontSize: '18px',
            background: '#fff',

            display: 'flex',
            justifyItems: 'center',
            alignContent: 'center',
          }}
        >
          <Flex w="full" justify="center" align="center">
            sss
            {/* <Image
              w="100%"
              h="100%"
              display="block"
              objectFit="cover"
              src="/airplane.svg"
              alt="airplane"
            /> */}
          </Flex>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: '1000px',
            justifyContent: 'center',
            alignItems: 'center',

            textAlign: 'center',
            fontSize: '18px',
            background: '#fff',

            display: 'flex',
            justifyItems: 'center',
            alignContent: 'center',
          }}
        >
          <Flex w="full" justify="center" align="center">
            <Image
              w="100%"
              h="100%"
              display="block"
              objectFit="cover"
              src="/airplane.svg"
              alt="airplane"
            />
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
