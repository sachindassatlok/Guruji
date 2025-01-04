'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reforms = [
  {
    id: 1,
    title: 'Religious Hypocrisy',
    description: 'He strongly opposes idol worship and rituals that are not aligned with the teachings of holy scriptures.',
    icon: '/images/icons/religious-hypocrisy.png',
    image: '/images/reforms/religious-hypocrisy.jpg'
  },
  {
    id: 2,
    title: 'Dowry Free India',
    description: 'Sant Rampal Ji Maharaj has taken a strong stance against the dowry system.',
    icon: '/images/icons/dowry-free.png',
    image: '/images/reforms/dowry-free.jpg'
  },
  {
    id: 3,
    title: 'Eliminating Social Evils',
    description: 'Eliminating all Social Evils through True Spiritual Knowledge.',
    icon: '/images/icons/social-evils.png',
    image: '/images/reforms/social-evils.jpg'
  },
  {
    id: 4,
    title: 'Blood Donation Camp',
    description: 'Blood donation camps to address the shortage during pandemic.',
    icon: '/images/icons/blood-donation.png',
    image: '/images/reforms/blood-donation.jpg'
  },
  {
    id: 5,
    title: 'Feeding The Hungry',
    description: 'Food distribution campaigns to help those affected by the pandemic.',
    icon: '/images/icons/feeding-hungry.png',
    image: '/images/reforms/feeding.jpg'
  },
  {
    id: 6,
    title: 'Intoxication Free World',
    description: 'Promoting a healthy lifestyle free from intoxicating substances.',
    icon: '/images/icons/intoxication-free.png',
    image: '/images/reforms/intoxication-free.jpg'
  },
  {
    id: 7,
    title: 'Women Empowerment',
    description: 'Empowering women through education and spiritual knowledge.',
    icon: '/images/icons/women-empowerment.png',
    image: '/images/reforms/women-empowerment.jpg'
  },
  {
    id: 8,
    title: 'Environmental Protection',
    description: 'Initiatives for protecting and preserving the environment.',
    icon: '/images/icons/environment.png',
    image: '/images/reforms/environment.jpg'
  },
  {
    id: 9,
    title: 'Education for All',
    description: 'Making quality education accessible to everyone.',
    icon: '/images/icons/education.png',
    image: '/images/reforms/education.jpg'
  },
  {
    id: 10,
    title: 'Healthcare Services',
    description: 'Providing medical services to those in need.',
    icon: '/images/icons/healthcare.png',
    image: '/images/reforms/healthcare.jpg'
  },
  {
    id: 11,
    title: 'Rural Development',
    description: 'Programs for the development of rural areas.',
    icon: '/images/icons/rural.png',
    image: '/images/reforms/rural.jpg'
  },
  {
    id: 12,
    title: 'Youth Empowerment',
    description: 'Guiding youth towards a positive and meaningful life.',
    icon: '/images/icons/youth.png',
    image: '/images/reforms/youth.jpg'
  },
  {
    id: 13,
    title: 'Animal Welfare',
    description: 'Protecting and caring for animals.',
    icon: '/images/icons/animal.png',
    image: '/images/reforms/animal.jpg'
  },
  {
    id: 14,
    title: 'Skill Development',
    description: 'Training programs for skill enhancement.',
    icon: '/images/icons/skill.png',
    image: '/images/reforms/skill.jpg'
  },
  {
    id: 15,
    title: 'Disaster Relief',
    description: 'Providing aid during natural disasters.',
    icon: '/images/icons/disaster.png',
    image: '/images/reforms/disaster.jpg'
  },
  {
    id: 16,
    title: 'Cultural Preservation',
    description: 'Preserving traditional cultural values.',
    icon: '/images/icons/culture.png',
    image: '/images/reforms/culture.jpg'
  },
  {
    id: 17,
    title: 'Mental Health',
    description: 'Supporting mental health and well-being.',
    icon: '/images/icons/mental-health.png',
    image: '/images/reforms/mental-health.jpg'
  },
  {
    id: 18,
    title: 'Senior Care',
    description: 'Taking care of elderly people.',
    icon: '/images/icons/senior.png',
    image: '/images/reforms/senior.jpg'
  },
  {
    id: 19,
    title: 'Child Welfare',
    description: 'Programs for child development and protection.',
    icon: '/images/icons/child.png',
    image: '/images/reforms/child.jpg'
  },
  {
    id: 20,
    title: 'Community Service',
    description: 'Various initiatives for community development.',
    icon: '/images/icons/community.png',
    image: '/images/reforms/community.jpg'
  }
];

export const SocialReformsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-orange-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#981B1B_1px,transparent_1px)] opacity-5" style={{ backgroundSize: '20px 20px' }}></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h3 className="text-sm font-semibold text-[#981B1B] tracking-[0.2em] uppercase mb-3 relative">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 h-[2px] w-12 absolute top-1/2 -left-16"></span>
              SERVING HUMANITY
              <span className="bg-gradient-to-r from-orange-600 to-red-600 h-[2px] w-12 absolute top-1/2 -right-16"></span>
            </h3>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#981B1B] mb-6">
            Social Reforms
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-12">
            Transforming society through spiritual wisdom and practical actions
          </p>
        </div>

        {/* Slider */}
        <div className="relative px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 5,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false
            }}
            loop={true}
            speed={1000}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="pb-12"
          >
            {reforms.map((reform) => (
              <SwiperSlide key={reform.id}>
                <Link href={`/social-reforms/${reform.id}`} className="block h-full">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full group">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={reform.image}
                        alt={reform.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 text-center">
                      <div className="flex items-center justify-center">
                        <h3 className="text-xl font-bold text-[#981B1B]">{reform.title}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: rgba(152, 27, 27, 0.3) !important;
          opacity: 1 !important;
        }

        .swiper-pagination-bullet-active {
          background: #981B1B !important;
          transform: scale(1.2);
        }

        .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
          padding-top: 20px !important;
          padding-bottom: 20px !important;
        }

        .swiper-pagination-bullets-dynamic {
          transform: translateX(-50%) !important;
          left: 50% !important;
          white-space: nowrap !important;
        }

        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
          transition: transform 0.2s !important;
        }

        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
          transform: scale(1.2) !important;
        }

        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev,
        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
          transform: scale(0.9) !important;
        }

        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev,
        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
          transform: scale(0.7) !important;
        }
      `}</style>
    </section>
  );
};
