"use client";

import Header from "./Header";
import ContactHeader from "./ContactHeader";
import BookingSection from "./BookingSection";
import DownloadOurApp from "@/components/DownloadOurApp";
import OurClients from "@/components/OurClients";

const BookMeeting = () => {
  return (
    <>
      <Header />
      <ContactHeader />
      <BookingSection />
      <OurClients />
      <DownloadOurApp />
    </>
  );
};

export default BookMeeting;
