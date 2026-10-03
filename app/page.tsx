"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Instagram,
  Mail,
  MessageSquare,
  Facebook,
  ExternalLink,
  X,
} from "lucide-react";
import ContactForm from "@/components/contact-form";
import AssociationCard from "@/components/association-card";
import EventCard from "@/components/event-card";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/images/logos/bda-logo.png"
                alt="Logo BDA Efrei"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#7f1623]">
                BDA – Bureau des Arts de l'Efrei
              </h1>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#accueil"
              className="text-gray-800 hover:text-[#7f1623] transition-colors"
            >
              Accueil
            </a>
            <a
              href="#associations"
              className="text-gray-800 hover:text-[#7f1623] transition-colors"
            >
              Associations
            </a>
            <a
              href="#evenements"
              className="text-gray-800 hover:text-[#7f1623] transition-colors"
            >
              Événements
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-[#7f1623] transition-colors"
            >
              Contact
            </a>
          </nav>
          <button
            className="md:hidden text-gray-800 z-50"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a
              href="#accueil"
              className="text-2xl font-medium text-[#7f1623]"
              onClick={closeMobileMenu}
            >
              Accueil
            </a>
            <a
              href="#associations"
              className="text-2xl font-medium text-[#7f1623]"
              onClick={closeMobileMenu}
            >
              Associations
            </a>
            <a
              href="#evenements"
              className="text-2xl font-medium text-[#7f1623]"
              onClick={closeMobileMenu}
            >
              Événements
            </a>
            <a
              href="#contact"
              className="text-2xl font-medium text-[#7f1623]"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="accueil" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7f1623]/90 to-[#7f1623]/70 z-0"></div>
        <div className="absolute inset-0 opacity-30 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Arts background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              BDA – Bureau des Arts de l'Efrei
            </h1>
            <p className="text-xl text-white/90 mb-8 italic">
              "L'art et la culture au cœur du campus de l'Efrei."
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#associations"
                className="px-6 py-3 bg-[#fcd82f] text-[#7f1623] font-medium rounded-md hover:bg-[#fcd82f]/90 transition-colors"
              >
                Découvrir nos associations
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-md hover:bg-white/20 transition-colors"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#7f1623] mb-6">
              À propos du BDA
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Le Bureau des Arts est une association qui regroupe les
              associations artistiques et culturelles de l'école.
            </p>
            <p className="text-gray-600 mb-8">
              Le BDA est l'association de promotion des différents domaines
              artistiques. Elle travaille avec les autres associations
              artistiques dans le but de créer des événements de qualité et de
              faire rêver tous les étudiants : POD artistique, Spectacle de fin
              d'année et Semaine des Arts sont au programme de cette année !
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/bda_efrei/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-[#7f1623] transition-colors"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a
                href="mailto:bureau@bda-efrei.fr"
                className="flex items-center gap-2 text-gray-700 hover:text-[#7f1623] transition-colors"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a
                href="https://discord.gg/aJhjNCF2tF"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-[#7f1623] transition-colors"
              >
                <MessageSquare size={20} />
                <span>Discord</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Associations Section */}
      <section id="associations" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#7f1623] text-center mb-12">
            Les associations du BDA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AssociationCard
              name="Art'Efrei"
              description="L'association artistique de l'école, regroupant toutes les formes d'arts manuels."
              logoSrc="/images/logos/art-efrei-logo.png"
              links={[]}
            />

            <AssociationCard
              name="Efreestyle"
              description="Efreestyle est l'association de danse de l'école. Plusieurs pôles : modern jazz, hip-hop, rock, k-pop et urban. Représentations régulières à l'Efrei."
              logoSrc="/images/logos/efreestyle-logo.png"
              links={[
                {
                  icon: <Instagram size={18} />,
                  url: "https://instagram.com/efreestyle_efrei/",
                },
                {
                  icon: <MessageSquare size={18} />,
                  url: "https://discord.gg/AvDeNt6smN",
                },
              ]}
            />

            <AssociationCard
              name="Efr'Action !"
              description="Association de culture cinématographique de l'Efrei. Organise des projections."
              logoSrc="/images/logos/efraction-logo.png"
              links={[]}
            />

            <AssociationCard
              name="New Lix"
              description="Association dédiée au DJing et beatmaking."
              logoSrc="/images/logos/new-lix-logo.png"
              links={[
                {
                  icon: <Instagram size={18} />,
                  url: "https://www.instagram.com/new.lixx?igsh=MXVheDZ1c3kzejFvYw==",
                },
                {
                  icon: <MessageSquare size={18} />,
                  url: "https://discord.gg/BbFsmPTp",
                },
              ]}
            />

            <AssociationCard
              name="Les Plumes"
              description="Association d'écriture. Écrit notamment les pièces pour le Spectacle de Fin d'Année."
              logoSrc="/images/logos/plumes-logo.png"
              links={[]}
            />

            <AssociationCard
              name="Live Efrei"
              description="🎸 Association étudiante de musique de l'Efrei depuis 1997 ! 🥁 Organisation de concerts, studio de répétition et cours pour les musiciens du campus. 🎵 La musique, ça se partage !"
              logoSrc="/images/logos/live-efrei-logo.png"
              links={[
                {
                  icon: <ExternalLink size={18} />,
                  url: "https://live-efrei.fr",
                },
                {
                  icon: <MessageSquare size={18} />,
                  url: "https://discord.gg/Qpng4RRpUT",
                },
                {
                  icon: <Instagram size={18} />,
                  url: "https://www.instagram.com/live.efrei/",
                },
                {
                  icon: <Facebook size={18} />,
                  url: "https://www.facebook.com/liveefrei",
                },
              ]}
            />

            <AssociationCard
              name="Scène Efreinée"
              description="L'association de théâtre de l'Efrei ! Efr'être, ou ne pas être ? Telle est la question ! Participe à de nombreux événements, acteur majeur du BDA."
              logoSrc="/images/logos/scene-efreinee-logo.png"
              links={[
                {
                  icon: <ExternalLink size={18} />,
                  url: "https://linktr.ee/scene.efreinee",
                },
                {
                  icon: <Instagram size={18} />,
                  url: "https://www.instagram.com/scene_efreinee/",
                },
                {
                  icon: <MessageSquare size={18} />,
                  url: "https://discord.com/NvrD2FZZTJ",
                },
                {
                  icon: <Facebook size={18} />,
                  url: "https://www.facebook.com/scene.efreinee",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="evenements" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#7f1623] text-center mb-12">
            Les Événements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <EventCard
              title="Spectacle de Fin d'Année (SFA)"
              description="Événement annuel artistique mêlant théâtre (Scène Efreinée), musique (Live), danse (Efreestyle), écrit par les Plumes, et organisé par le BDA. Une grande pièce jouée en fin d'année, rassemblant tous les talents de l'Efrei sur une même scène."
              imageSrc="/images/events/sfa-banner.jpg"
              buttonText="Photos de l'édition 2024"
              buttonUrl="https://efreipicturestudio.fr/gallery/sfa-2024-2024"
            />

            <EventCard
              title="Efrei Got Talent"
              description="Concours de talents mêlant les étudiants de l'Efrei. Tous les arts sont bienvenus : chant, danse, musique, humour, magie... Un show convivial pour révéler les pépites du campus."
              imageSrc="/placeholder.svg?height=400&width=600"
              // buttonText="Photos de l'édition 2025"
              // buttonUrl="#"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#7f1623] text-center mb-12">
              Contact
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ContactForm />

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Vous pouvez également nous contacter par email :
                  <a
                    href="mailto:bureau@bda-efrei.fr"
                    className="text-[#7f1623] ml-1 hover:underline"
                  >
                    bureau@bda-efrei.fr
                  </a>
                </p>
                <div className="flex justify-center gap-6 mt-4">
                  <a
                    href="https://www.instagram.com/bda_efrei/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#7f1623] transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="mailto:bureau@bda-efrei.fr"
                    className="text-gray-600 hover:text-[#7f1623] transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                  <a
                    href="https://discord.gg/aJhjNCF2tF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#7f1623] transition-colors"
                  >
                    <MessageSquare size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#7f1623] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>
                © {new Date().getFullYear()} BDA Efrei Paris. Tous droits
                réservés.
              </p>
              <p className="text-sm text-white/70 mt-1">Mentions légales</p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/bda_efrei/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#fcd82f] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:bureau@bda-efrei.fr"
                className="text-white/80 hover:text-[#fcd82f] transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://discord.gg/aJhjNCF2tF"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#fcd82f] transition-colors"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
