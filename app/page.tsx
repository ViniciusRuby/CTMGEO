import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CtaBanner from "@/components/CtaBanner";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import ClientesSection from "@/components/ClientesSection";
import NoticiasSection from "@/components/NoticiasSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import NewsletterForm from "@/components/NewsletterForm";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Header />
      <main id="main-content">
        <Hero />
        <CtaBanner />
        <DiferenciaisSection />
        <ClientesSection />
        <NoticiasSection />
        <DepoimentosSection />
        <NewsletterForm />
      </main>
      <Footer />
    </>
  );
}
