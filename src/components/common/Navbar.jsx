import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const megaMenuData = {
  Digital: {
    layout: "standard",
    eyebrow: "360° DIGITAL GROWTH",
    title: "Digital",
    description: "Demand, distribution and measurement built as one system instead of disconnected campaigns.",
    href: "#what-we-develop",
    columnGroup1: [
      {
        title: "Strategy & Planning",
        items: ["Digital Strategy", "Brand Strategy", "Website Strategy", "Growth Marketing"]
      },
      {
        title: "Audience & Community",
        items: ["Social Media Marketing", "Influencer Marketing", "Reputation Management", "Email Marketing"]
      }
    ],
    columnGroup2: [
      {
        title: "Performance Marketing",
        items: ["Google Ads", "Meta Ads", "Lead Generation", "Conversion Rate Optimization"]
      },
      {
        title: "Lifecycle & Data",
        items: ["Marketing Automation", "Analytics & Reporting", "CRM Journeys", "Attribution Setup"]
      }
    ],
    columnGroup3: [
      {
        title: "Search",
        items: ["Search Engine Optimization", "Local SEO", "International SEO", "Content Marketing"]
      }
    ]
  },
  Marcomm: {
    layout: "standard",
    eyebrow: "POSITIONING & IDENTITY",
    title: "Marcomm",
    description: "Positioning, identity and creative — how the market understands and feels about your brand.",
    href: "#what-we-develop",
    columnGroup1: [
      {
        title: "Brand",
        items: ["Brand Strategy", "Brand Identity", "Corporate Branding", "Employer Branding"]
      },
      {
        title: "Production",
        items: ["Video Production", "Motion Graphics", "Social Media Branding", "Packaging"]
      }
    ],
    columnGroup2: [
      {
        title: "Creative",
        items: ["Creative Strategy", "Creative Design", "Campaign Development", "Advertising"]
      },
      {
        title: "Corporate Communication",
        items: ["Corporate Communication", "Product Communication", "Influencer & Creator Campaigns"]
      }
    ],
    columnGroup3: [
      {
        title: "Content & Copy",
        items: ["Content Strategy", "Copywriting", "Visual Communication", "Presentation Design"]
      }
    ]
  },
  Technology: {
    layout: "standard",
    eyebrow: "PLATFORMS & AUTOMATION",
    title: "Technology",
    description: "Product, web applications, business systems and AI automation — how the business actually runs.",
    href: "#what-we-develop",
    columnGroup1: [
      {
        title: "Product & Experience",
        items: ["Product Design", "UX/UI Design", "MVP Development", "Design System"]
      },
      {
        title: "AI",
        items: ["AI Solutions", "AI Integration", "AI Agents", "Data Analysis"]
      }
    ],
    columnGroup2: [
      {
        title: "Web & App",
        items: ["Website Development", "Web Application", "SaaS Development", "Mobile Application"]
      },
      {
        title: "Platform & Assurance",
        items: ["Cloud Solutions", "DevOps", "Cybersecurity", "API Development"]
      }
    ],
    columnGroup3: [
      {
        title: "Business & Systems",
        items: ["CRM Development", "ERP Solutions", "HRMS Solutions", "Business Automation"]
      }
    ]
  },
  Solutions: {
    layout: "fullWidth",
    eyebrow: "SOLUTIONS BY OBJECTIVE",
    href: "#featured-work",
    columns: [
      [
        "I want to build a brand",
        "I want to generate leads",
        "I want to automate my business",
        "I want to improve customer experience"
      ],
      [
        "I want to launch a business",
        "I want to increase sales",
        "I want to build ai solutions"
      ],
      [
        "I want to build a website",
        "I want to improve visibility",
        "I want to transform digitally"
      ],
      [
        "I want to build a product",
        "I want to scale marketing",
        "I want to enter new markets"
      ]
    ]
  },
  Industries: {
    layout: "fullWidth",
    eyebrow: "INDUSTRIES",
    href: "#featured-work",
    columns: [
      [
        "SaaS & Technology",
        "Manufacturing",
        "Real Estate",
        "Non-Profit"
      ],
      [
        "Startups",
        "Retail",
        "Professional Services",
        "Enterprise"
      ],
      [
        "Healthcare",
        "D2C",
        "Hospitality"
      ],
      [
        "Education",
        "Finance",
        "Media & Entertainment"
      ]
    ]
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Digital', hasDropdown: true },
    { name: 'Marcomm', hasDropdown: true },
    { name: 'Technology', hasDropdown: true },
    { name: 'Solutions', hasDropdown: true },
    { name: 'Industries', hasDropdown: true },
    { name: 'Insights', href: '#storyboard', hasDropdown: false },
    { name: 'About', href: '#outlaws', hasDropdown: false },
  ];

  const handleNavClick = (link) => {
    if (link.hasDropdown) {
      setActiveMenu(activeMenu === link.name ? null : link.name);
    } else {
      setActiveMenu(null);
      if (link.href) {
        const targetEl = document.querySelector(link.href);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const activeData = activeMenu ? megaMenuData[activeMenu] : null;

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled || activeMenu
        ? 'bg-macrow-black/90 backdrop-blur-2xl border-b border-white/5 shadow-lg text-macrow-white'
        : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent text-macrow-white'
        } ${scrolled ? 'py-3' : 'py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={() => setActiveMenu(null)}
          className="group flex items-center gap-2 focus:outline-none rounded-lg"
          aria-label="MACROW Home"
        >
          <img src="/logo.png" alt="MACROW Digital" className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeMenu === link.name;
            const isLightBg = scrolled || activeMenu;
            return (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <button
                    onClick={() => handleNavClick(link)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 z-10 ${isActive
                      ? 'text-macrow-white font-semibold'
                      : isLightBg
                        ? 'text-macrow-white/80 hover:text-macrow-white'
                        : 'text-white/90 hover:text-white'
                      }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'rotate-180 text-macrow-white' : 'text-macrow-red'}`} />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all z-10 block ${isLightBg
                      ? 'text-macrow-white/80 hover:text-macrow-white hover:bg-white/5'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    {link.name}
                  </a>
                )}

                {/* Active Pill Animation */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={() => setActiveMenu(null)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-macrow-red text-macrow-white font-semibold text-sm hover:bg-macrow-red/90 transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Book a Demo
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-macrow-red ${scrolled || activeMenu
            ? 'text-macrow-white hover:text-macrow-red hover:bg-white/10'
            : 'text-white hover:text-macrow-red hover:bg-white/10'
            }`}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* --- MEGA DROPDOWN MENU PANEL (Secondary 30% Black Container) --- */}
      <AnimatePresence>
        {activeMenu && activeData && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="hidden md:block absolute bg-macrow-black/90 top-[100%] left-0 w-full border-t border-macrow-borderDark bg-macrow-black/98 text-macrow-white backdrop-blur-2xl py-8 shadow-2xl"
          >
            {activeData.layout === 'fullWidth' ? (
              /* Mode B: Full-width 4-Column Layout */
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="text-xs font-mono tracking-widest text-macrow-red font-bold uppercase block mb-6">
                  {activeData.eyebrow}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                  {activeData.columns.map((col, idx) => (
                    <ul key={idx} className="space-y-3">
                      {col.map((item) => (
                        <li key={item}>
                          <a
                            href={activeData.href}
                            onClick={() => setActiveMenu(null)}
                            className="text-xs font-medium text-macrow-white/80 hover:text-macrow-red transition-all duration-150 block py-0.5 hover:translate-x-1"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            ) : (
              /* Mode A: Standard 3-Column Layout with Left Info Column */
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-8 items-start">
                {/* Left Column */}
                <div className="col-span-3 border-r border-macrow-borderDark/80 pr-6">
                  <span className="text-[10px] font-mono tracking-widest text-macrow-red font-bold uppercase block mb-2">
                    {activeData.eyebrow}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-macrow-white">
                    {activeData.title}
                  </h3>
                  <p className="mt-3 text-xs font-sans text-macrow-white/80 leading-relaxed">
                    {activeData.description}
                  </p>

                  <a
                    href={activeData.href}
                    onClick={() => setActiveMenu(null)}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-macrow-red hover:underline transition-all group"
                  >
                    <span>Explore {activeData.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Right Multi-Column Grid */}
                <div className="col-span-9 grid grid-cols-3 gap-8">
                  {/* Column 1 */}
                  <div className="space-y-6">
                    {activeData.columnGroup1?.map((group) => (
                      <div key={group.title} className="space-y-2.5">
                        <h4 className="text-xs font-bold text-macrow-white font-sans uppercase tracking-wider border-b border-macrow-borderDark/80 pb-1">
                          {group.title}
                        </h4>
                        <ul className="space-y-1.5">
                          {group.items.map((item) => (
                            <li key={item}>
                              <a
                                href={activeData.href}
                                onClick={() => setActiveMenu(null)}
                                className="text-xs text-macrow-textLightMuted hover:text-macrow-red transition-colors block py-0.5"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-6">
                    {activeData.columnGroup2?.map((group) => (
                      <div key={group.title} className="space-y-2.5">
                        <h4 className="text-xs font-bold text-macrow-white font-sans uppercase tracking-wider border-b border-macrow-borderDark/80 pb-1">
                          {group.title}
                        </h4>
                        <ul className="space-y-1.5">
                          {group.items.map((item) => (
                            <li key={item}>
                              <a
                                href={activeData.href}
                                onClick={() => setActiveMenu(null)}
                                className="text-xs text-macrow-textLightMuted hover:text-macrow-red transition-colors block py-0.5"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-6">
                    {activeData.columnGroup3?.map((group) => (
                      <div key={group.title} className="space-y-2.5">
                        <h4 className="text-xs font-bold text-macrow-white font-sans uppercase tracking-wider border-b border-macrow-borderDark/80 pb-1">
                          {group.title}
                        </h4>
                        <ul className="space-y-1.5">
                          {group.items.map((item) => (
                            <li key={item}>
                              <a
                                href={activeData.href}
                                onClick={() => setActiveMenu(null)}
                                className="text-xs text-macrow-textLightMuted hover:text-macrow-red transition-colors block py-0.5"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Slide-Over Drawer with Framer Motion Right-to-Left Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 flex justify-end overflow-hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/75 backdrop-blur-xl cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-over Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="relative w-[85vw] max-w-sm bg-macrow-black/95 text-macrow-white backdrop-blur-3xl border-l border-white/10 h-full p-8 flex flex-col justify-between z-10 shadow-2xl overflow-y-auto"
            >
              <div>
                {/* Top Header with Circular Close Button */}
                <div className="flex items-center justify-between pb-8 border-b border-white/10">
                  <img src="/logo.png" alt="MACROW Digital" className="h-10 w-auto object-contain rounded" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:text-macrow-red hover:border-macrow-red transition-all shadow-lg"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Large Bold Stacked Nav Links */}
                <motion.div
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                  className="flex flex-col gap-6 pt-6"
                >
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 20 }
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      href={link.href || megaMenuData[link.name]?.href || '#what-we-develop'}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl sm:text-3xl font-bold font-display text-white hover:text-macrow-red transition-colors tracking-tight"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Rounded CTA Button */}
              <div className="pt-8 border-t border-white/10 flex flex-col gap-4 mt-auto">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 rounded-2xl bg-macrow-red text-macrow-white font-bold text-base text-center shadow-xl hover:bg-macrow-brassLight transition-all active:scale-95 shadow-red-glow"
                >
                  Start a Conversation
                </a>
                <p className="text-xs text-center text-macrow-textLightMuted font-mono">
                  Ahmedabad, Gujarat, India · Global Growth Agency
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
