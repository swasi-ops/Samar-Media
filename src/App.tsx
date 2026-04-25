import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Play, 
  Camera, 
  Video, 
  Scissors, 
  Smartphone, 
  ShoppingCart, 
  CheckCircle, 
  Globe, 
  Zap, 
  Users, 
  Star, 
  MapPin, 
  Mail, 
  Phone,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Language = 'EN' | 'DE';
type View = 'main' | 'kein-datenhandel' | 'agb' | 'widerruf' | 'datenschutz' | 'cookies' | 'impressum';

interface LegalContent {
  title: string;
  content: React.ReactNode;
}

const translations = {
  EN: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
      quote: "Get a Free Quote"
    },
    hero: {
      title: "We Create. You Grow.",
      subtitle: "Professional video production, photography, and digital marketing for businesses across Germany.",
      ctaPrimary: "Our Services",
      ctaSecondary: "Watch Our Work"
    },
    services: {
      title: "What We Do",
      items: [
        {
          icon: Video,
          title: "Corporate Video Production",
          desc: "High-quality brand films, product videos, and corporate storytelling that positions your business as an industry leader."
        },
        {
          icon: Play,
          title: "Wedding Videography & Photography",
          desc: "Cinematic wedding films and timeless photography that capture your most precious moments with elegance and emotion."
        },
        {
          icon: Camera,
          title: "Professional Photography",
          desc: "Studio and on-location photography for businesses, events, products, and personal branding — every shot tells a story."
        },
        {
          icon: Scissors,
          title: "Video Editing & Post-Production",
          desc: "Expert editing, color grading, motion graphics, and sound design that transform raw footage into polished final content."
        },
        {
          icon: Smartphone,
          title: "Social Media Content Creation",
          desc: "Scroll-stopping content strategies and visuals tailored for Instagram, LinkedIn, TikTok, and YouTube to grow your audience."
        },
        {
          icon: ShoppingCart,
          title: "Digital Marketing for E-Commerce",
          desc: "Performance-driven digital marketing campaigns — from ad creatives to full-funnel strategies — that turn clicks into customers."
        }
      ]
    },
    why: {
      title: "Why Samar Media Group?",
      items: [
        {
          icon: CheckCircle,
          title: "Premium Quality",
          desc: "Every project is delivered to the highest production standard."
        },
        {
          icon: Globe,
          title: "Bilingual Team",
          desc: "We serve clients in German and English across the DACH region."
        },
        {
          icon: Zap,
          title: "Fast Turnaround",
          desc: "Reliable delivery timelines without compromising on quality."
        },
        {
          icon: Users,
          title: "Client-First Approach",
          desc: "Your vision drives every creative decision we make."
        }
      ]
    },
    portfolio: {
      title: "Our Work",
      subtitle: "A selection of our recent projects across video, photography, and digital marketing.",
      filters: ["All", "Corporate Video", "Wedding", "Photography", "Social Media", "E-Commerce"],
      viewProject: "View Project"
    },
    testimonials: {
      title: "What Our Clients Say",
      items: [
        {
          text: "Samar Media Group delivered beyond our expectations. The corporate video they produced elevated our brand instantly.",
          name: "Thomas K.",
          role: "CEO, Tech Company Essen"
        },
        {
          text: "Our wedding film was absolutely cinematic. We will treasure it forever. Highly professional team.",
          name: "Sara & Ahmed",
          role: "Wedding Clients"
        },
        {
          text: "Their e-commerce marketing campaigns tripled our online sales in just 60 days. Incredible results.",
          name: "Lena M.",
          role: "E-Commerce Founder"
        }
      ]
    },
    contact: {
      title: "Ready to Work With Us?",
      subtitle: "Tell us about your project and get a free consultation within 24 hours.",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number (optional)",
        service: "Service Needed",
        message: "Message",
        submit: "Send Message",
        options: ["Corporate Video", "Wedding", "Photography", "Video Editing", "Social Media", "E-Commerce Marketing", "Other"]
      }
    },
    footer: {
      rights: "© 2025 Samar Media Group. All rights reserved. | samarmedia.de",
      legal: "Kein Datenhandel | AGB | Widerruf | Datenschutz | Cookies | Impressum",
      owner: "Sayed Islam Sadat",
      address: "Walter hohmann Str.10, 45128 Essen",
      phone: "+49 15565 886211"
    }
  },
  DE: {
    nav: {
      home: "Start",
      services: "Leistungen",
      about: "Über uns",
      portfolio: "Portfolio",
      contact: "Kontakt",
      quote: "Kostenloses Angebot"
    },
    hero: {
      title: "Wir kreieren. Sie wachsen.",
      subtitle: "Professionelle Videoproduktion, Fotografie und digitales Marketing für Unternehmen in ganz Deutschland.",
      ctaPrimary: "Unsere Leistungen",
      ctaSecondary: "Unsere Arbeiten ansehen"
    },
    services: {
      title: "Was wir tun",
      items: [
        {
          icon: Video,
          title: "Corporate Videoproduktion",
          desc: "Hochwertige Markenfilme, Produktvideos und Unternehmensgeschichten, die Ihr Unternehmen als Branchenführer positionieren."
        },
        {
          icon: Play,
          title: "Hochzeitsvideografie & Fotografie",
          desc: "Cinematische Hochzeitsfilme und zeitlose Fotografien, die Ihre schönsten Momente mit Eleganz und Emotion festhalten."
        },
        {
          icon: Camera,
          title: "Professionelle Fotografie",
          desc: "Studio- und Außenfotografie für Unternehmen, Events, Produkte und Personal Branding — jedes Bild erzählt eine Geschichte."
        },
        {
          icon: Scissors,
          title: "Videobearbeitung & Postproduktion",
          desc: "Professioneller Schnitt, Farbkorrektur, Motion Graphics und Sound Design, die Rohmaterial in erstklassigen Content verwandeln."
        },
        {
          icon: Smartphone,
          title: "Social-Media-Content-Erstellung",
          desc: "Aufmerksamkeitsstarke Content-Strategien und Visuals für Instagram, LinkedIn, TikTok und YouTube, um Ihre Reichweite zu steigern."
        },
        {
          icon: ShoppingCart,
          title: "Digitales Marketing für E-Commerce",
          desc: "Performance-orientierte digitale Marketingkampagnen — von Ad Creatives bis zu Full-Funnel-Strategien — die Klicks in Kunden verwandeln."
        }
      ]
    },
    why: {
      title: "Warum Samar Media Group?",
      items: [
        {
          icon: CheckCircle,
          title: "Premium-Qualität",
          desc: "Jedes Projekt wird nach höchsten Produktionsstandards geliefert."
        },
        {
          icon: Globe,
          title: "Zweisprachiges Team",
          desc: "Wir betreuen Kunden auf Deutsch und Englisch in der DACH-Region."
        },
        {
          icon: Zap,
          title: "Schnelle Lieferung",
          desc: "Zuverlässige Lieferzeiten ohne Kompromisse bei der Qualität."
        },
        {
          icon: Users,
          title: "Kundenorientierter Ansatz",
          desc: "Ihre Vision steht hinter jeder kreativen Entscheidung."
        }
      ]
    },
    portfolio: {
      title: "Unsere Arbeiten",
      subtitle: "Eine Auswahl unserer aktuellen Projekte aus Video, Fotografie und digitalem Marketing.",
      filters: ["Alle", "Corporate Video", "Hochzeit", "Fotografie", "Social Media", "E-Commerce"],
      viewProject: "Projekt ansehen"
    },
    testimonials: {
      title: "Was unsere Kunden sagen",
      items: [
        {
          text: "Samar Media Group hat unsere Erwartungen übertroffen. Das Corporate Video hat unsere Marke sofort aufgewertet.",
          name: "Thomas K.",
          role: "CEO, Tech Company Essen"
        },
        {
          text: "Unser Hochzeitsfilm war absolut cinematisch. Wir werden ihn für immer in Erinnerung behalten. Sehr professionelles Team.",
          name: "Sara & Ahmed",
          role: "Wedding Clients"
        },
        {
          text: "Ihre E-Commerce-Marketingkampagnen haben unsere Online-Verkäufe in nur 60 Tagen verdreifacht. Unglaubliche Ergebnisse.",
          name: "Lena M.",
          role: "E-Commerce-Gründerin"
        }
      ]
    },
    contact: {
      title: "Bereit, mit uns zu arbeiten?",
      subtitle: "Erzählen Sie uns von Ihrem Projekt und erhalten Sie innerhalb von 24 Stunden eine kostenlose Beratung.",
      form: {
        name: "Vollständiger Name",
        email: "E-Mail-Adresse",
        phone: "Telefonnummer (optional)",
        service: "Gewünschte Leistung",
        message: "Nachricht",
        submit: "Nachricht senden",
        options: ["Corporate Video", "Hochzeit", "Fotografie", "Videobearbeitung", "Social Media", "E-Commerce Marketing", "Sonstiges"]
      }
    },
    footer: {
      rights: "© 2025 Samar Media Group. Alle Rechte vorbehalten. | samarmedia.de",
      legal: "Kein Datenhandel | AGB | Widerruf | Datenschutz | Cookies | Impressum",
      owner: "Sayed Islam Sadat",
      address: "Walter hohmann Str.10, 45128 Essen",
      phone: "+49 15565 886211"
    }
  }
};

const portfolioItems = [
  { id: 1, title: "Modern Tech Brand Film", category: "Corporate Video", categoryDe: "Corporate Video" },
  { id: 2, title: "Summer Garden Wedding", category: "Wedding", categoryDe: "Hochzeit" },
  { id: 3, title: "Luxury Product Showcase", category: "E-Commerce", categoryDe: "E-Commerce" },
  { id: 4, title: "City Life Photography", category: "Photography", categoryDe: "Fotografie" },
  { id: 5, title: "Viral Social Campaign", category: "Social Media", categoryDe: "Social Media" },
  { id: 6, title: "Industrial Storytelling", category: "Corporate Video", categoryDe: "Corporate Video" }
];

const Logo = ({ scrolled }: { scrolled: boolean }) => (
  <div className="flex flex-col items-end">
    <div className="flex flex-col">
      <span className={`text-4xl md:text-5xl font-black tracking-tighter leading-none ${scrolled ? 'text-white' : 'text-brand-black'}`}>SAMAR</span>
      <div className={`h-[2px] w-full mt-1 ${scrolled ? 'bg-white' : 'bg-brand-black'}`} />
    </div>
    <span className={`text-[8px] md:text-[10px] font-light tracking-[0.2em] mt-1 ${scrolled ? 'text-white/70' : 'text-brand-black/70'}`}>MEDIA GROUP</span>
  </div>
);

export default function App() {
  const [lang, setLang] = useState<Language>('DE');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentView, setCurrentView] = useState<View>('main');

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % t.testimonials.items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [t.testimonials.items.length]);

  const scrollToSection = (id: string) => {
    if (currentView !== 'main') {
      setCurrentView('main');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const getLegalContent = (view: View): LegalContent => {
    switch (view) {
      case 'impressum':
        return {
          title: 'Impressum',
          content: (lang === 'DE' ? (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Angaben gemäß § 5 TMG</h3>
                <p>Sayed Islam Sadat<br />Walter hohmann Str.10<br />45128 Essen</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Kontakt</h3>
                <p>Telefon: +49 15565 886211<br />E-Mail: info@samarmedia.de</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p>Sayed Islam Sadat<br />Walter hohmann Str.10<br />45128 Essen</p>
              </div>
              <div className="pt-4 border-t border-brand-black/10">
                <p className="text-sm opacity-60">Haftungsausschluss: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Information according to § 5 TMG</h3>
                <p>Sayed Islam Sadat<br />Walter hohmann Str.10<br />45128 Essen</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <p>Phone: +49 15565 886211<br />Email: info@samarmedia.de</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Responsible for content according to § 55 Abs. 2 RStV</h3>
                <p>Sayed Islam Sadat<br />Walter hohmann Str.10<br />45128 Essen</p>
              </div>
              <div className="pt-4 border-t border-brand-black/10">
                <p className="text-sm opacity-60">Disclaimer: Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.</p>
              </div>
            </div>
          ))
        };
      case 'datenschutz':
        return {
          title: lang === 'DE' ? 'Datenschutzerklärung' : 'Privacy Policy',
          content: (
            <div className="space-y-6">
              <h3 className="text-xl font-bold">1. {lang === 'DE' ? 'Datenschutz auf einen Blick' : 'Privacy at a Glance'}</h3>
              <p>{lang === 'DE' ? 'Allgemeine Hinweise: Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.' : 'General information: The following information provides a simple overview of what happens to your personal data when you visit our website. Personal data is any data with which you can be personally identified.'}</p>
              <h3 className="text-xl font-bold">2. {lang === 'DE' ? 'Datenerfassung auf unserer Website' : 'Data collection on our website'}</h3>
              <p>{lang === 'DE' ? 'Wie erfassen wir Ihre Daten? Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.' : 'How do we collect your data? Your data is collected on the one hand by you communicating it to us. This can be, for example, data that you enter in a contact form.'}</p>
              <h3 className="text-xl font-bold">3. {lang === 'DE' ? 'Ihre Rechte' : 'Your Rights'}</h3>
              <p>{lang === 'DE' ? 'Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.' : 'You have the right at any time to receive free information about the origin, recipient and purpose of your stored personal data. You also have a right to request the correction, blocking or deletion of this data.'}</p>
            </div>
          )
        };
      case 'agb':
        return {
          title: lang === 'DE' ? 'Allgemeine Geschäftsbedingungen (AGB)' : 'Terms & Conditions',
          content: (
            <div className="space-y-6">
              <h3 className="text-xl font-bold">1. {lang === 'DE' ? 'Geltungsbereich' : 'Scope'}</h3>
              <p>{lang === 'DE' ? 'Diese AGB gelten für alle Leistungen von Samar Media Group gegenüber dem Auftraggeber.' : 'These terms and conditions apply to all services provided by Samar Media Group to the client.'}</p>
              <h3 className="text-xl font-bold">2. {lang === 'DE' ? 'Vertragsschluss' : 'Conclusion of Contract'}</h3>
              <p>{lang === 'DE' ? 'Der Vertrag kommt durch Annahme des Angebots von Samar Media Group durch den Kunden zustande.' : 'The contract is concluded by the customer accepting the offer from Samar Media Group.'}</p>
              <h3 className="text-xl font-bold">3. {lang === 'DE' ? 'Vergütung' : 'Remuneration'}</h3>
              <p>{lang === 'DE' ? 'Die Vergütung richtet sich nach dem jeweiligen Angebot und versteht sich zzgl. gesetzlicher USt.' : 'Remuneration is based on the respective offer and is subject to statutory VAT.'}</p>
            </div>
          )
        };
      case 'widerruf':
        return {
          title: lang === 'DE' ? 'Widerrufsbelehrung' : 'Cancellation Policy',
          content: (
            <div className="space-y-6">
              <h3 className="text-xl font-bold">{lang === 'DE' ? 'Widerrufsrecht' : 'Right of Withdrawal'}</h3>
              <p>{lang === 'DE' ? 'Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.' : 'You have the right to withdraw from this contract within fourteen days without giving any reason.'}</p>
              <p>{lang === 'DE' ? 'Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.' : 'The cancellation period is fourteen days from the day the contract is concluded.'}</p>
            </div>
          )
        };
      case 'cookies':
        return {
          title: lang === 'DE' ? 'Cookie-Richtlinie' : 'Cookie Policy',
          content: (
            <div className="space-y-6">
              <p>{lang === 'DE' ? 'Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert.' : 'Our website uses cookies. These are small text files that your web browser stores on your end device.'}</p>
              <h3 className="text-xl font-bold">{lang === 'DE' ? 'Arten von Cookies' : 'Types of Cookies'}</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>{lang === 'DE' ? 'Notwendige Cookies: Diese sind für den Betrieb der Seite technisch erforderlich.' : 'Necessary cookies: These are technically required for the operation of the site.'}</li>
                <li>{lang === 'DE' ? 'Analyse-Cookies: Diese helfen uns zu verstehen, wie Besucher mit der Website interagieren.' : 'Analysis cookies: These help us understand how visitors interact with the website.'}</li>
              </ul>
            </div>
          )
        };
      case 'kein-datenhandel':
        return {
          title: lang === 'DE' ? 'Kein Datenhandel' : 'No Data Trading',
          content: (
            <div className="space-y-6">
              <p className="text-lg font-serif italic">{lang === 'DE' ? 'Wir bei Samar Media Group nehmen den Schutz Ihrer Privatsphäre ernst.' : 'At Samar Media Group, we take the protection of your privacy seriously.'}</p>
              <h3 className="text-xl font-bold">{lang === 'DE' ? 'Unser Versprechen' : 'Our Promise'}</h3>
              <p>{lang === 'DE' ? 'Wir garantieren, dass wir Ihre personenbezogenen Daten unter keinen Umständen an Dritte verkaufen oder für Werbezwecke vermieten.' : 'We guarantee that we will under no circumstances sell your personal data to third parties or rent it out for advertising purposes.'}</p>
            </div>
          )
        };
      default:
        return { title: '', content: <div /> };
    }
  };

  const currentCategory = t.portfolio.filters[activeFilter];
  const filteredPortfolio = activeFilter === 0 
    ? portfolioItems 
    : portfolioItems.filter(item => lang === 'EN' ? item.category === currentCategory : item.categoryDe === currentCategory);

  return (
    <div className="min-h-screen bg-brand-white text-brand-black selection:bg-brand-accent selection:text-brand-black">
      {/* Navigation */}
      <nav 
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-brand-black shadow-xl py-4 border-b border-brand-accent/20' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button 
            onClick={() => { setCurrentView('main'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 transition-transform hover:scale-105"
          >
            <Logo scrolled={scrolled} />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {[
                { label: t.nav.home, id: 'home' },
                { label: t.nav.services, id: 'services' },
                { label: t.nav.about, id: 'why' },
                { label: t.nav.portfolio, id: 'portfolio' },
                { label: t.nav.contact, id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`${scrolled ? 'text-white' : 'text-brand-black'} hover:text-brand-accent transition-colors font-bold text-xs tracking-widest uppercase border-b border-transparent hover:border-brand-accent`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="h-6 w-px bg-current/20 mx-2" />

            <div className="flex items-center bg-brand-black/10 rounded-full p-1 border border-brand-black/10">
              <button
                onClick={() => setLang('EN')}
                className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${
                  lang === 'EN' ? 'bg-brand-accent text-brand-black shadow-lg' : 'text-brand-black/50 hover:text-brand-black'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('DE')}
                className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${
                  lang === 'DE' ? 'bg-brand-accent text-brand-black shadow-lg' : 'text-brand-black/50 hover:text-brand-black'
                }`}
              >
                DE
              </button>
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-brand-accent text-brand-black px-6 py-2.5 font-black uppercase text-xs tracking-tighter hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-brand-accent/20"
            >
              {t.nav.quote}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 ${scrolled ? 'text-white' : 'text-brand-black'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-brand-black border-t border-white/10 lg:hidden p-6 shadow-2xl"
            >
              <div className="flex flex-col gap-6 items-center">
                {[
                  { label: t.nav.home, id: 'home' },
                  { label: t.nav.services, id: 'services' },
                  { label: t.nav.about, id: 'why' },
                  { label: t.nav.portfolio, id: 'portfolio' },
                  { label: t.nav.contact, id: 'contact' }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-white text-xl font-serif"
                  >
                    {link.label}
                  </button>
                ))}
                
                <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10 w-fit">
                  <button
                    onClick={() => { setLang('EN'); }}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                      lang === 'EN' ? 'bg-brand-accent text-brand-black' : 'text-white/50'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => { setLang('DE'); }}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                      lang === 'DE' ? 'bg-brand-accent text-brand-black' : 'text-white/50'
                    }`}
                  >
                    DE
                  </button>
                </div>

                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-brand-accent text-brand-black py-4 rounded-xl font-black text-lg uppercase tracking-tighter"
                >
                  {t.nav.quote}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {currentView === 'main' ? (
        <>
          {/* Hero Section */}
          <section id="home" className="relative h-screen flex items-center overflow-hidden bg-brand-black">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03]">
              <div className="absolute inset-0 bg-[radial-gradient(var(--color-brand-accent)_1px,_transparent_1px)] bg-[length:40px_40px]" />
            </div>
            
            {/* Placeholder Photo Overlay */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1492691523567-30730029ad0a?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale mix-blend-screen" />

            <div className="container mx-auto px-6 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="lg:w-1/2"
                >
                  <p className="text-brand-accent uppercase tracking-[0.3em] text-xs font-bold mb-6">Essen, Deutschland</p>
                  <h1 className="font-serif text-6xl md:text-8xl text-white font-black leading-[0.9] mb-8">
                    {t.hero.title.split('.').map((part, i) => (
                      <span key={i} className={`block ${i === 1 ? 'text-brand-accent' : ''}`}>
                        {part}{i === 0 ? '.' : ''}
                      </span>
                    ))}
                  </h1>
                  <div className="w-24 h-1.5 bg-brand-accent mb-10" />
                  <p className="text-xl text-white/50 max-w-md mb-12 leading-relaxed font-light">
                    {t.hero.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="bg-brand-accent text-brand-black px-10 py-4 font-black uppercase text-sm tracking-widest hover:brightness-110 transition-all shadow-2xl shadow-brand-accent/20 flex items-center justify-center gap-2"
                    >
                      {t.hero.ctaPrimary}
                    </button>
                    <button 
                      onClick={() => scrollToSection('portfolio')}
                      className="group flex items-center gap-4 text-white hover:text-brand-accent transition-all font-bold uppercase text-xs tracking-widest"
                    >
                      <span className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-brand-accent transition-all">
                        <Play size={16} fill="currentColor" />
                      </span>
                      {t.hero.ctaSecondary}
                    </button>
                  </div>
                </motion.div>

                {/* Geometric Hero Visual */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="hidden lg:block lg:w-1/2 relative"
                >
                  <div className="relative w-full aspect-square max-w-lg mx-auto">
                    <div className="absolute inset-0 border-4 border-brand-accent/20 rotate-12 transition-transform hover:rotate-6 duration-700" />
                    <div className="absolute inset-0 border-4 border-white/10 -rotate-6 transition-transform hover:-rotate-3 duration-700" />
                    <div className="absolute inset-8 bg-brand-black overflow-hidden border border-white/10">
                      <img 
                        src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80" 
                        alt="Media Production" 
                        className="w-full h-full object-cover grayscale opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-black via-transparent to-brand-accent/10" />
                    </div>
                    {/* Floating Stats */}
                    <div className="absolute -right-10 top-1/4 bg-brand-black border border-brand-accent p-6 shadow-2xl shadow-brand-accent/20">
                      <p className="text-brand-accent text-4xl font-serif font-black mb-1">100%</p>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Quality Focus</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-accent opacity-50 cursor-pointer"
              onClick={() => scrollToSection('services')}
            >
              <div className="w-1 h-12 bg-white/20 relative">
                <motion.div 
                  animate={{ top: ["0%", "80%"] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute left-0 right-0 h-1/4 bg-brand-accent"
                />
              </div>
            </motion.div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-24 md:py-32 bg-brand-white">
            <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/3">
                  <div className="sticky top-32">
                    <h2 className="font-serif text-4xl md:text-6xl text-brand-black mb-6 leading-tight">
                      {t.services.title}
                    </h2>
                    <div className="w-20 h-1.5 bg-brand-accent mb-8" />
                    <p className="text-brand-black/40 text-lg leading-relaxed font-light">
                      Crafting visual identities through professional production and precise strategy.
                    </p>
                  </div>
                </div>

                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-black/5 overflow-hidden border border-brand-black/5">
                  {t.services.items.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group bg-brand-white p-12 hover:bg-brand-black transition-all duration-500"
                    >
                      <div className="text-brand-accent mb-8 group-hover:scale-110 transition-transform origin-left">
                        <service.icon size={44} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-2xl text-brand-black group-hover:text-white mb-4 transition-colors">{service.title}</h3>
                      <p className="text-brand-black/50 group-hover:text-white/40 leading-relaxed transition-colors font-light">
                        {service.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section id="why" className="py-24 bg-brand-black text-white relative">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
                {t.why.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-12 bg-brand-black group hover:bg-brand-accent/5 transition-all"
                  >
                    <div className="text-brand-accent mb-6 flex items-center justify-between">
                      <item.icon size={32} strokeWidth={1} />
                      <span className="text-[10px] font-black opacity-20 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                    </div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-3 text-white">{item.title}</h4>
                    <p className="text-white/30 text-xs leading-relaxed uppercase tracking-widest">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" className="py-24 md:py-32 bg-brand-white">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
                <div className="max-w-2xl">
                  <h2 className="font-serif text-5xl md:text-7xl text-brand-black mb-6 leading-none">{t.portfolio.title}</h2>
                  <p className="text-brand-black/40 text-xl font-light">{t.portfolio.subtitle}</p>
                </div>
                
                {/* Filters */}
                <div className="flex flex-wrap gap-2">
                  {t.portfolio.filters.map((filter, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveFilter(i)}
                      className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all border ${
                        activeFilter === i 
                        ? 'bg-brand-black text-brand-accent border-brand-black' 
                        : 'bg-transparent text-brand-black border-brand-black/10 hover:border-brand-black'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredPortfolio.map((item) => (
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="group relative aspect-[4/5] bg-brand-black overflow-hidden border border-brand-black/5"
                    >
                      <div className="absolute inset-0 bg-gray-200 grayscale transition-transform duration-1000 group-hover:scale-110 opacity-70" />
                      
                      <div className="absolute inset-0 bg-brand-black opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                      
                      <div className="absolute top-8 left-8">
                        <div className="w-10 h-10 border border-brand-accent rotate-45 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                          <span className="-rotate-45 text-brand-accent text-xs font-black">0{item.id}</span>
                        </div>
                      </div>

                      <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          {lang === 'EN' ? item.category : item.categoryDe}
                        </span>
                        <h4 className="text-white font-serif text-3xl mb-8 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                          {item.title}
                        </h4>
                        <button className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-widest hover:text-brand-accent transition-colors">
                          {t.portfolio.viewProject} <ArrowRight size={14} className="text-brand-accent" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 bg-brand-black text-white overflow-hidden border-y border-white/5">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto relative h-96 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    className="text-center"
                  >
                    <div className="flex justify-center gap-1 mb-10">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="text-brand-accent" fill="currentColor" />)}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-white italic leading-tight mb-12">
                      "{t.testimonials.items[currentTestimonial].text}"
                    </h2>
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-accent">
                        {t.testimonials.items[currentTestimonial].name}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                        {t.testimonials.items[currentTestimonial].role}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 hidden lg:block">
                  <span className="font-serif text-[20rem] font-black leading-none">"</span>
                </div>
              </div>
              
              <div className="flex justify-center gap-1 mt-12">
                {t.testimonials.items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`h-1 transition-all ${
                      currentTestimonial === i ? 'bg-brand-accent w-12' : 'bg-white/10 w-6 hover:bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 md:py-32 bg-brand-white text-brand-black">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                <div>
                  <h2 className="font-serif text-5xl md:text-8xl text-brand-black mb-12 leading-[0.8]">{t.contact.title}</h2>
                  <p className="text-brand-black/40 text-xl font-light leading-relaxed mb-16">{t.contact.subtitle}</p>
                  
                  <div className="space-y-12">
                    <div className="flex gap-8 group">
                      <div className="w-1 h-16 bg-brand-black/5 group-hover:bg-brand-accent transition-all duration-500" />
                      <div>
                        <h6 className="font-black text-brand-black/20 text-[10px] uppercase tracking-widest mb-2">Location</h6>
                        <p className="text-xl font-serif">Walter hohmann Str.10, 45128 Essen</p>
                      </div>
                    </div>
                    <div className="flex gap-8 group">
                      <div className="w-1 h-16 bg-brand-black/5 group-hover:bg-brand-accent transition-all duration-500" />
                      <div>
                        <h6 className="font-black text-brand-black/20 text-[10px] uppercase tracking-widest mb-2">Email</h6>
                        <p className="text-xl font-serif">info@samarmedia.de</p>
                      </div>
                    </div>
                    <div className="flex gap-8 group">
                      <div className="w-1 h-16 bg-brand-black/5 group-hover:bg-brand-accent transition-all duration-500" />
                      <div>
                        <h6 className="font-black text-brand-black/20 text-[10px] uppercase tracking-widest mb-2">Connect</h6>
                        <p className="text-xl font-serif">+49 15565 886211</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-16 border-l border-brand-black relative">
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-accent" />
                  <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative group">
                      <label className="block text-[10px] font-black uppercase tracking-widest mb-4 transition-colors group-focus-within:text-brand-accent">{t.contact.form.name}</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-transparent border-b border-brand-black/10 py-4 text-xl font-serif outline-none transition-all focus:border-brand-accent placeholder:text-brand-black/10"
                        placeholder="Enter Name"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="relative group">
                        <label className="block text-[10px] font-black uppercase tracking-widest mb-4 transition-colors group-focus-within:text-brand-accent">{t.contact.form.email}</label>
                        <input 
                          type="email" 
                          required
                          className="w-full bg-transparent border-b border-brand-black/10 py-4 text-xl font-serif outline-none transition-all focus:border-brand-accent placeholder:text-brand-black/10"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="relative group">
                        <label className="block text-[10px] font-black uppercase tracking-widest mb-4 transition-colors group-focus-within:text-brand-accent">{t.contact.form.service}</label>
                        <select className="w-full bg-transparent border-b border-brand-black/10 py-4 text-xl font-serif outline-none cursor-pointer focus:border-brand-accent appearance-none">
                          {t.contact.form.options.map((opt, i) => <option key={i} value={opt} className="bg-brand-white">{opt}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="relative group">
                      <label className="block text-[10px] font-black uppercase tracking-widest mb-4 transition-colors group-focus-within:text-brand-accent">{t.contact.form.message}</label>
                      <textarea 
                        rows={4}
                        required
                        className="w-full bg-transparent border-b border-brand-black/10 py-4 text-xl font-serif outline-none transition-all focus:border-brand-accent placeholder:text-brand-black/10 resize-none"
                        placeholder="Describe your project"
                      />
                    </div>
                    <button className="w-full bg-brand-black text-brand-accent py-6 font-black uppercase text-sm tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-4 group">
                      {t.contact.form.submit}
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Legal Page Wrapper */
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-40 pb-24 min-h-screen bg-brand-white"
        >
          <div className="container mx-auto px-6 max-w-4xl">
            <button 
              onClick={() => setCurrentView('main')}
              className="group flex items-center gap-2 text-brand-black/40 hover:text-brand-accent transition-colors font-black text-[10px] uppercase tracking-widest mb-12"
            >
              <ArrowRight size={14} className="rotate-180" /> Back to Home
            </button>
            
            <h1 className="font-serif text-5xl md:text-7xl text-brand-black mb-12 leading-none">
              {getLegalContent(currentView).title}
            </h1>
            
            <div className="prose prose-lg max-w-none text-brand-black/70 leading-[1.8] font-sans">
              {getLegalContent(currentView).content}
            </div>
          </div>
        </motion.section>
      )}

      {/* Footer */}
      <footer className="bg-brand-black pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
            <div>
              <div className="mb-8">
                <Logo scrolled={true} />
              </div>
              <p className="text-white/30 text-xs leading-[2] tracking-widest uppercase max-w-xs mb-8">
                Crafting visual identities through professional production and precise strategy.
              </p>
              <div className="flex gap-4">
                {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:text-brand-accent hover:border-brand-accent transition-all"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
              <button onClick={() => scrollToSection('home')} className="hover:text-brand-accent transition-colors w-fit">{t.nav.home}</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-brand-accent transition-colors w-fit">{t.nav.services}</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-brand-accent transition-colors w-fit">{t.nav.portfolio}</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-brand-accent transition-colors w-fit">{t.nav.contact}</button>
            </div>

            <div className="text-right flex flex-col items-end">
              <div className="mb-6">
                <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Location</p>
                <p className="text-white font-serif text-sm opacity-60 leading-relaxed max-w-[200px]">Walter hohmann Str.10, 45128 Essen</p>
              </div>
              <div className="text-right">
                <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Contact</p>
                <p className="text-white font-serif text-sm opacity-60 leading-relaxed font-sans">+49 15565 886211</p>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
              {t.footer.rights}
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent">
              <button onClick={() => { setCurrentView('kein-datenhandel'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors uppercase">Kein Datenhandel</button>
              <button onClick={() => { setCurrentView('agb'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors uppercase">AGB</button>
              <button onClick={() => { setCurrentView('widerruf'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors uppercase">Widerruf</button>
              <button onClick={() => { setCurrentView('datenschutz'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors uppercase">Datenschutz</button>
              <button onClick={() => { setCurrentView('cookies'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors uppercase">Cookies</button>
              <button onClick={() => { setCurrentView('impressum'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors uppercase">Impressum</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
