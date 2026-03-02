import HeroSection from "@/components/HeroSection";
import FeaturedPosts from "@/components/FeaturedPosts";
import UpcomingEvents from "@/components/UpcomingEvents";
import JobOffers from "@/components/JobOffers";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedPosts />
      <UpcomingEvents />
      <JobOffers />
      <NewsletterSignup />
    </>
  );
}
