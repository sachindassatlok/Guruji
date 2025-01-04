'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ebooks = [
  {
    title: 'Way of Living',
    size: '2.1 MB',
    image: '/ebooks/way-of-living.jpg',
    downloadUrl: '/pdfs/way-of-living.pdf'
  },
  {
    title: 'Gyan Ganga',
    size: '3.07 MB',
    image: '/ebooks/gyan-ganga.jpg',
    downloadUrl: '/pdfs/gyan-ganga.pdf'
  },
  {
    title: 'Jeene Ki Raah',
    size: '2.5 MB',
    image: '/ebooks/jeene-ki-raah.jpg',
    downloadUrl: '/pdfs/jeene-ki-raah.pdf'
  },
  {
    title: 'Sacred Knowledge',
    size: '4.2 MB',
    image: '/ebooks/sacred-knowledge.jpg',
    downloadUrl: '/pdfs/sacred-knowledge.pdf'
  },
  {
    title: 'Hindu Saheban Nahin Samjhe',
    size: '32.6 MB',
    image: '/ebooks/hindu-saheban.jpg',
    downloadUrl: '/pdfs/hindu-saheban.pdf'
  }
];

const EbookSlider = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#971B1B]">
          Download E-Books
        </h2>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="ebook-swiper"
        >
          {ebooks.map((ebook, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#971B1B] rounded-lg p-6 shadow-xl h-full flex flex-col transform transition-all duration-300 hover:scale-105">
                <div className="relative w-32 h-40 mx-auto mb-4 group">
                  <Image
                    src={ebook.image}
                    alt={ebook.title}
                    fill
                    className="object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2 text-center">
                  {ebook.title}
                </h3>
                <p className="text-green-100 mb-4 text-center">
                  SIZE : {ebook.size}
                </p>
                <a
                  href={ebook.downloadUrl}
                  className="mt-auto bg-[#EAB308] hover:bg-[#CA8A04] text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors duration-200"
                  download
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EbookSlider;
