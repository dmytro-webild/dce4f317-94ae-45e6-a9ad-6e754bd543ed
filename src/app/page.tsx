"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="grid"
        cardStyle="glass-depth"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "Drops",
          id: "drops",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Thrift Bunk"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboardSplit
      background={{
        variant: "sparkles-gradient",
      }}
      logoText="THRIFT BUNK"
      description="Curated Vintage. No Restocks."
      buttons={[
        {
          text: "Shop the Latest Drop",
          href: "#products",
        },
      ]}
      layoutOrder="default"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXMX2ZxoeaxBnveecOCWghh96d/a-fast-paced-high-quality-video-edit-fea-1774767308963-35da4b52.png"
      imageAlt="Streetwear vintage fashion showcase"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Sustainability at the Core"
      description="We believe in looking good while doing better for the planet. Every piece in our collection is hand-picked, pre-loved, and given a new life. Thrift responsibly, stay iconic."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXMX2ZxoeaxBnveecOCWghh96d/an-eco-friendly-conceptual-shot-of-a-pai-1774767308896-420b2ecd.png"
      imageAlt="Sustainability concept shot"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "90s Oversized Jacket",
          price: "$85.00",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXMX2ZxoeaxBnveecOCWghh96d/studio-portrait-of-a-model-wearing-a-uni-1774767309285-54bc1eb2.png",
          imageAlt: "Oversized vintage jacket",
        },
        {
          id: "2",
          name: "Graphic Ringer Tee",
          price: "$45.00",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXMX2ZxoeaxBnveecOCWghh96d/close-up-editorial-photo-of-vintage-grap-1774767309979-7713a078.png",
          imageAlt: "Graphic t-shirt",
        },
        {
          id: "3",
          name: "Utility Cargo Pants",
          price: "$65.00",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXMX2ZxoeaxBnveecOCWghh96d/vintage-cargo-pants-flat-lay-with-access-1774767309957-5c3d91f2.png",
          imageAlt: "Cargo trousers",
        },
      ]}
      title="New Drops"
      description="Weekly curated treasures. Grab them before they're gone forever."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-animated-grid",
      }}
      text="Join the inner circle for early access to drops."
      buttons={[
        {
          text: "Follow Us on Instagram",
          href: "https://instagram.com/thrift.bunk",
        },
      ]}
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Why Thrift Bunk?"
      description="We redefine style through a circular fashion economy."
      features={[
        {
          id: 1,
          title: "Curated Quality",
          description: "Every item is rigorously inspected for authenticity and condition.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXMX2ZxoeaxBnveecOCWghh96d/macro-shot-of-a-vintage-clothing-tag-wit-1774767308916-1e8922cc.png",
        },
        {
          id: 2,
          title: "Circular Economy",
          description: "Reducing landfill waste by giving pre-loved clothes a second chapter.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXMX2ZxoeaxBnveecOCWghh96d/an-eco-friendly-conceptual-shot-of-a-pai-1774767308896-420b2ecd.png",
        },
        {
          id: 3,
          title: "Timeless Style",
          description: "Hand-picked pieces that transcend fast-fashion trends.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXMX2ZxoeaxBnveecOCWghh96d/stylish-90s-vintage-hoodie-hanging-on-a--1774767308212-4d394103.png",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Tops",
              href: "#",
            },
            {
              label: "Bottoms",
              href: "#",
            },
            {
              label: "Outerwear",
              href: "#",
            },
          ],
        },
        {
          title: "Info",
          items: [
            {
              label: "Shipping",
              href: "#",
            },
            {
              label: "Care Guide",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="THRIFT BUNK"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
