'use client';
import Image from 'next/image';

const socialLinks = [
  {
    name: 'Facebook',
    text: 'Follow us on Facebook',
    icon: '/icons/facebook.svg',
    link: 'https://www.facebook.com/JagatguruRampalJi',
    bgColor: '#1877F2'
  },
  {
    name: 'Instagram',
    text: 'Follow us on Instagram',
    icon: '/icons/instagram.svg',
    link: 'https://www.instagram.com/jagatgururampalji/',
    bgColor: '#E4405F'
  },
  {
    name: 'X',
    text: 'Follow us on X',
    icon: '/icons/x.svg',
    link: 'https://twitter.com/JagatGuruRampal',
    bgColor: '#000000'
  },
  {
    name: 'YouTube',
    text: 'Subscribe on YouTube',
    icon: '/icons/youtube.svg',
    link: 'https://www.youtube.com/@SaintRampalJiMaharaj',
    bgColor: '#FF0000'
  },
  {
    name: 'Mobile App',
    text: 'Download Our App',
    icon: '/icons/app.svg',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.jagatgururampalji.app',
    appStoreLink: 'https://apps.apple.com/app/jagatguru-rampal-ji-maharaj/id',
    bgColor: '#971B1B'
  }
];

const SocialMediaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#971B1B]">
            Follow us on Social Media
            <div className="h-1 w-48 bg-yellow-400 mx-auto mt-2"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-full flex flex-col items-center justify-center">
                <div
                  className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: social.bgColor }}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={32}
                    height={32}
                    className="filter brightness-0 invert"
                  />
                </div>
                <span
                  className="text-center font-medium transition-colors duration-300"
                  style={{ color: social.bgColor }}
                >
                  {social.text}
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
