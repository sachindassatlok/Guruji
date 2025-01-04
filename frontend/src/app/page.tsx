'use client';

import Header from '@/components/headers/Header';
import ImageSlider from '@/components/ImageSlider';
import ReligionCards3D from '@/components/ReligionCards3D';
import { HeroSection } from '@/components/HeroSection';
import { CreationSection } from '@/components/CreationSection';
import { SocialReformsSection } from '@/components/SocialReformsSection';
import { PropheciesSection } from '@/components/PropheciesSection';
import EbookSlider from '@/components/EbookSlider';
import SocialMediaSection from '@/components/SocialMediaSection';
import SpiritualAudioSection from '@/components/SpiritualAudioSection';
import QuotesSlider from '@/components/QuotesSlider';
import CascadeAssistant from '@/components/CascadeAssistant';
import FAQSection from '@/components/FAQSection';
import FooterVariations from '@/components/FooterVariations';
import '@/styles/EbookSlider.css';
import '@/styles/QuotesSlider.css';
import '@/styles/CascadeAssistant.css';

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      {/* Header */}
      <Header />
      
      {/* Full-width slider container with no spacing on mobile */}
      <div className="w-full max-w-[1640px] mx-auto -mt-6 sm:mt-0 sm:px-6 lg:px-8">
        <ImageSlider />
      </div>

      {/* Modern 3D Religion Cards */}
      <div className="mt-16">
        <ReligionCards3D />
      </div>

      {/* Hero Section with 3 Variants */}
      <div className="mt-16">
        <HeroSection />
      </div>

      {/* Creation Section */}
      <div className="mt-16">
        <CreationSection />
      </div>

      {/* Social Reforms Section */}
      <div className="mt-16">
        <SocialReformsSection />
      </div>

      {/* Ebook Download Section */}
      <div className="mt-16">
        <EbookSlider />
      </div>

      {/* Prophecies Section */}
      <div className="mt-16">
        <PropheciesSection />
      </div>

      {/* Social Media Section */}
      <div className="mt-16">
        <SocialMediaSection />
      </div>

      {/* Spiritual Audio Section */}
      <div className="mt-16">
        <SpiritualAudioSection />
      </div>

      {/* Spiritual Quotes Section */}
      <div className="mt-16">
        <QuotesSlider />
      </div>

      {/* Cascade AI Assistant Section */}
      <div className="mt-16">
        <CascadeAssistant />
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <FAQSection />
      </div>

      <FooterVariations.Modern />
    </main>
  );
}
