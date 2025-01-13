import React from 'react';
import Group_1 from '../../assets/Group_1.png';
import Group_2 from '../../assets/Group_2.png';
import Group_3 from '../../assets/Group_3.png';
import Group_4 from '../../assets/Group_4.png';
import Group_5 from '../../assets/Group_5.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, A11y, Autoplay, Navigation } from 'swiper/modules';

const OurTeam = () => {
  return (
    <div className='bg-blue-500 w-full h-auto md:h-[80vh] rounded-lg p-4 md:p-8'>
      <div className='flex justify-center items-center text-center'>
        <h1 className='text-white capitalize text-2xl md:text-4xl pt-4 md:pt-12'>Our Team</h1>
      </div>

      <div className='flex justify-center items-center text-center mt-8 md:mt-16'>
        <Swiper
          modules={[Pagination, A11y, Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className='flex flex-col items-center'>
              <img src={Group_1} alt="Group_1" className='w-24 h-24 md:w-36 md:h-36 rounded-full mx-5' />
              <h4 className='text-white text-lg mt-5'>Adewole Samuel Adebola</h4>
              <h5 className='text-white text-lg mt-2'>CO founder/CEO</h5>
              <p className='text-white text-sm mt-5 px-4 md:px-36 lg:px-72 mb-10'>
                "This platform is exceptionally well-designed, reflecting a deep understanding of customer needs and preferences. 
                The intuitive layout makes it effortless to navigate and highly user-friendly."
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flex flex-col items-center'>
              <img src={Group_2} alt="Group_2" className='w-24 h-24 md:w-36 md:h-36 rounded-full mx-5' />
              <h4 className='text-white text-lg mt-5'>Adewunmi Sodiq</h4>
              <h5 className='text-white text-lg mt-2'>Co-founder/COO/CFO</h5>
              <p className='text-white text-sm mt-5 px-4 md:px-36 lg:px-72 mb-10'>
                "I can confidently say that FoodLab is thoughtfully designed with our customers in mind. 
                The layout is intuitive and user-friendly, making it easy to navigate. FoodLab saves significant time by providing 
                a comprehensive solution with everything needed to set up a seamless multi-vendor system."
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flex flex-col items-center'>
              <img src={Group_3} alt="Group_3" className='w-24 h-24 md:w-36 md:h-36 rounded-full mx-5' />
              <h4 className='text-white text-lg mt-5'>Daniel Ofuokwu</h4>
              <h5 className='text-white text-lg mt-2'>Chief Of Data and Technology</h5>
              <p className='text-white text-sm mt-5 px-4 md:px-36 lg:px-72 mb-10'>
                "Working at Foodlab Logistics as the Chief of Data and Technology has been a fantastic journey. 
                We’ve developed a robust, data-driven solution for the food delivery industry, integrating advanced technologies to optimize operations and enhance efficiency."
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flex flex-col items-center'>
              <img src={Group_4} alt="Group_4" className='w-24 h-24 md:w-36 md:h-36 rounded-full mx-5' />
              <h4 className='text-white text-lg mt-5'>Garba Abubakar O.</h4>
              <h5 className='text-white text-lg mt-2'>Chief of Customer Relations</h5>
              <p className='text-white text-sm mt-5 px-4 md:px-36 lg:px-72 mb-10'>
                "My primary focus is on enhancing the customer experience at every touchpoint. 
                Our mission is to provide an unparalleled food delivery service that not only meets but exceeds the expectations of our valued customers."
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flex flex-col items-center'>
              <img src={Group_5} alt="Group_5" className='w-14 h-14 md:w-36 md:h-36 rounded-full mx-5' />
              <h4 className='text-white text-lg mt-5'>Simire Joshua</h4>
              <h5 className='text-white text-lg mt-2'>General Manager</h5>
              <p className='text-white text-sm mt-5 px-4 md:px-36 lg:px-72 mb-10'>
                "My primary responsibility is ensuring that all aspects of our operations align with our mission to deliver an exceptional food delivery experience. 
                My focus is on optimizing processes, leading a high-performing team, and fostering a culture of innovation and excellence."
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurTeam;