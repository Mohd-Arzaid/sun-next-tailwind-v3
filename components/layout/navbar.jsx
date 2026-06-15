"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { NAVIGATION_DATA } from "@/data/navbar-data";
import { Menu, X, ChevronDown, ChevronUp, LogIn, ShieldCheck, User, Briefcase } from "lucide-react";

const STYLES = {
  button:
    "text-[16px] uppercase text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors px-3 h-9",
  navContentItem:
    "text-base text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 transition-colors block hover:bg-black/10 hover:rounded-md w-full p-2 text-left flex items-center",
  mobileButton:
    "text-base text-foreground/80 font-roboto tracking-wide hover:text-foreground hover:bg-neutral-100 transition-colors w-full justify-start py-3",
  mobileNavContentItem:
    "text-sm text-foreground/60 font-roboto tracking-wide hover:text-foreground/80 hover:bg-black/10 rounded-md transition-all duration-200",
};

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [updatesOpen, setUpdatesOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const loginDropdownRef = useRef(null);
  const faqIntervalRef = useRef(null);

  // Handle FAQ navigation with smooth scrolling
  const handleFaqNavigation = (link) => {
    if (link.includes("#faqs")) {
      const [pathname, hash] = link.split("#");

      // Navigate to the pathname without hash in URL
      router.push(pathname);

      // Store the hash for later use
      sessionStorage.setItem("scrollToHash", hash);

      // Multiple robust scroll strategies
      const scrollToFaq = () => {
        const element = document.getElementById(hash);
        if (element) {
          // Clear the stored hash since we found the element
          sessionStorage.removeItem("scrollToHash");

          // Scroll to element with multiple fallback methods
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          // Fallback method 1: Use window.scrollTo
          setTimeout(() => {
            const rect = element.getBoundingClientRect();
            const scrollTop =
              window.pageYOffset || document.documentElement.scrollTop;
            window.scrollTo({
              top: scrollTop + rect.top - 80, // 80px offset for navbar
              behavior: "smooth",
            });
          }, 100);

          return true;
        }
        return false;
      };

      // Strategy 1: Immediate attempt
      setTimeout(scrollToFaq, 100);

      // Strategy 2: Wait for page to be fully loaded
      setTimeout(() => {
        if (!scrollToFaq()) {
          // Strategy 3: Wait for all resources to load
          if (document.readyState === "complete") {
            scrollToFaq();
          } else {
            window.addEventListener("load", scrollToFaq, { once: true });
          }
        }
      }, 500);

      // Strategy 4: Persistent checking
      // Clear any existing interval first
      if (faqIntervalRef.current) {
        clearInterval(faqIntervalRef.current);
      }

      let attempts = 0;
      faqIntervalRef.current = setInterval(() => {
        attempts++;
        if (scrollToFaq() || attempts > 20) {
          clearInterval(faqIntervalRef.current);
          faqIntervalRef.current = null;
        }
      }, 200);

      closeMobileMenu();
      return true;
    }
    return false;
  };

  // Close all dropdown menus
  const closeAllDropdowns = useCallback(() => {
    setServicesOpen(false);
    setUpdatesOpen(false);
    setGalleryOpen(false);
    setAboutOpen(false);
    setLoginOpen(false);
  }, []);

  // Close mobile menu function
  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    closeAllDropdowns();
  }, [closeAllDropdowns]);

  // Handle dropdown toggle - close others when opening one
  const handleDropdownToggle = (title, isOpen, setOpen) => {
    // if the title is not open, close all dropdowns because we are opening this one after closing others
    if (!isOpen) {
      closeAllDropdowns();
    }
    setOpen(!isOpen);
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (faqIntervalRef.current) {
        clearInterval(faqIntervalRef.current);
        faqIntervalRef.current = null;
      }
    };
  }, []);

  // Handle automatic scrolling on page load if hash exists
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = sessionStorage.getItem("scrollToHash");
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          sessionStorage.removeItem("scrollToHash");
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 300);
        }
      }
    };

    // Run on component mount
    handleHashScroll();

    // Also listen for navigation changes
    window.addEventListener("popstate", handleHashScroll);

    return () => {
      window.removeEventListener("popstate", handleHashScroll);
    };
  }, []);

  // close mobile menu when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if mobile menu ref exists and the clicked element is not inside the mobile menu
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    const handleScroll = () => {
      // Close mobile menu when user scrolls the page
      closeMobileMenu();
    };

    // Only add event listeners if mobile menu is open
    if (isOpen) {
      // Add event listener for mouse clicks on the entire document
      document.addEventListener("mousedown", handleClickOutside);
      // Add event listener for scroll events on the window
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup function - removes event listeners when component unmounts
    // or when isOpen state changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, closeMobileMenu]);

  // Close login dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginDropdownRef.current &&
        !loginDropdownRef.current.contains(event.target)
      ) {
        setLoginOpen(false);
      }
    };

    if (loginOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [loginOpen]);

  const LOGIN_OPTIONS = [
    {
      label: "Admin Login",
      icon: ShieldCheck,
      href: "https://crm.bis-certifications.com/admin",
      external: true,
    },
    {
      label: "Client Login",
      icon: User,
      href: "https://crm.bis-certifications.com/",
      external: true,
    },
    {
      label: "Employee Login",
      icon: Briefcase,
      href: "https://crm.bis-certifications.com/coordinator-login",
      external: false,
    },
  ];

  // Render Navigation Menu Content Items
  const createNavContent = (items) =>
    items.map((item) => (
      <NavigationMenuLink key={item.id} asChild>
        <Link href={item.link} className="block">
          <div className={STYLES.navContentItem}>
            <item.icon className="w-4 h-4 mr-2" />
            <span>{item.name}</span>
          </div>
        </Link>
      </NavigationMenuLink>
    ));

  // Render FAQ Navigation Items with custom handler
  const createFaqNavContent = (items) =>
    items.map((item) => (
      <NavigationMenuLink key={item.id} asChild>
        <button
          onClick={() => handleFaqNavigation(item.link)}
          className="block w-full text-left"
        >
          <div className={STYLES.navContentItem}>
            <item.icon className="w-4 h-4 mr-2" />
            <span>{item.name}</span>
          </div>
        </button>
      </NavigationMenuLink>
    ));

  const categoriesDesktop = [...NAVIGATION_DATA.categories].sort(
    (a, b) => a.desktopOrder - b.desktopOrder
  );
  const categoriesMobile = [...NAVIGATION_DATA.categories].sort(
    (a, b) => a.mobileOrder - b.mobileOrder
  );

  const navContent = {
    categories: createNavContent(categoriesDesktop),
    categoriesMobile: categoriesMobile,
    updates: createNavContent(NAVIGATION_DATA.updates),
    updatesMobile: NAVIGATION_DATA.updates,
    gallery: createNavContent(NAVIGATION_DATA.gallery),
    galleryMobile: NAVIGATION_DATA.gallery,
    about: createNavContent(NAVIGATION_DATA.about),
    aboutMobile: NAVIGATION_DATA.about,
    faqs: createFaqNavContent(NAVIGATION_DATA.faqs),
    faqsMobile: NAVIGATION_DATA.faqs,
  };

  return (
    <nav className="z-50 sticky top-0 md:top-[44px] w-full bg-white/70 backdrop-blur-lg border-b border-neutral-200">
      <div className="flex items-center justify-between px-4 md:px-8 h-20 max-w-[88rem] mx-auto">
        {/* Company Logo & Name */}
        <Link
          href="/"
          className="selection:bg-emerald-600 flex items-center justify-center space-x-1.5 text-2xl font-bold py-6 text-center text-neutral-600 md:mr-10"
        >
          <img
            src="/images/company/company-logo.webp"
            alt="Sun Certifications India logo"
            title="Sun Certifications India logo"
            className="w-10 h-10 md:w-12 md:h-12"
            loading="eager"
            decoding="async"
          />
          <div className="py-2 text-center">
            <div className="font-roboto text-black uppercase tracking-wide leading-normal text-[14px] md:text-xl font-bold">
              Sun Certifications India
            </div>
            <p className="text-foreground/90 text-[10px] md:text-[13px] leading-none uppercase font-roboto font-normal min-h-[10px] md:min-h-[13px]">
              Simplifying Certifications
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-end">
          {/* Home, About & Services */}
          <NavigationMenu>
              <NavigationMenuList className="space-x-0">
                {/* Home */}
                <NavigationMenuItem>
                  <Link href="/">
                    <Button variant="link" className={STYLES.button}>
                      Home
                    </Button>
                  </Link>
                </NavigationMenuItem>

                {/* About */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={STYLES.button}>
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[340px]">{navContent.about}</div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={STYLES.button}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-3 gap-2 w-[700px] p-6">
                      {navContent.categories}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Updates */}
            <NavigationMenu>
              <NavigationMenuList className="space-x-0">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={STYLES.button}>
                    Updates
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[300px]">{navContent.updates}</div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Gallery */}
            <NavigationMenu>
              <NavigationMenuList className="space-x-0">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={STYLES.button}>
                    Gallery
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-60">{navContent.gallery}</div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* FAQs */}
            <NavigationMenu>
              <NavigationMenuList className="space-x-0">
                <NavigationMenuItem>
                  <Link href="/faqs">
                    <Button variant="link" className={STYLES.button}>
                      FAQ&apos;S
                    </Button>
                  </Link>
                </NavigationMenuItem>

                {/* Contact Us */}
                <NavigationMenuItem>
                  <Link href="/contact">
                    <Button variant="link" className={STYLES.button}>
                      Contact Us
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Login Dropdown */}
            <div className="relative ml-2" ref={loginDropdownRef}>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-[14px] font-roboto font-medium uppercase tracking-wide border-neutral-300 hover:bg-neutral-100 transition-colors px-3 py-2 h-9"
                onClick={() => setLoginOpen(!loginOpen)}
              >
                <LogIn className="w-4 h-4" />
                Login
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    loginOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {loginOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg border border-neutral-200 shadow-lg py-1.5 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                  {LOGIN_OPTIONS.map((option) =>
                    option.external ? (
                      <a
                        key={option.label}
                        href={option.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-roboto text-foreground/70 hover:text-foreground hover:bg-neutral-100 transition-colors"
                        onClick={() => setLoginOpen(false)}
                      >
                        <option.icon className="w-4 h-4" />
                        {option.label}
                      </a>
                    ) : (
                      <Link
                        key={option.label}
                        href={option.href}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-roboto text-foreground/70 hover:text-foreground hover:bg-neutral-100 transition-colors"
                        onClick={() => setLoginOpen(false)}
                      >
                        <option.icon className="w-4 h-4" />
                        {option.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => (isOpen ? closeMobileMenu() : setIsOpen(true))}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navbar Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white border-t border-b border-neutral-200 shadow-lg z-40 max-h-[80vh] overflow-y-auto scrollbar-hide"
        >
          <div className="px-4 py-4 space-y-1">
            {/* Home */}
            <Link href="/" className="block w-full" onClick={closeMobileMenu}>
              <Button variant="ghost" className={STYLES.mobileButton}>
                Home
              </Button>
            </Link>

            {/* About, Services, Updates, Gallery */}
            {[
              {
                title: "About",
                items: navContent.aboutMobile,
                isOpen: aboutOpen,
                setOpen: setAboutOpen,
              },
              {
                title: "Services",
                items: navContent.categoriesMobile,
                isOpen: servicesOpen,
                setOpen: setServicesOpen,
              },
              {
                title: "Updates",
                items: navContent.updatesMobile,
                isOpen: updatesOpen,
                setOpen: setUpdatesOpen,
              },
              {
                title: "Gallery",
                items: navContent.galleryMobile,
                isOpen: galleryOpen,
                setOpen: setGalleryOpen,
              },
            ].map(({ title, items, isOpen, setOpen }) => (
              <div key={title} className="w-full">
                <Button
                  variant="ghost"
                  className={`${STYLES.mobileButton} justify-between`}
                  onClick={() => handleDropdownToggle(title, isOpen, setOpen)}
                >
                  {title}
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Button>

                {isOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {items.map((item) => {
                      // Special handling for FAQ items
                      if (title === "FAQs" && item.link.includes("#faqs")) {
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleFaqNavigation(item.link)}
                            className="block w-full text-left"
                          >
                            <Button
                              variant="ghost"
                              className={STYLES.mobileNavContentItem}
                            >
                              <item.icon className="w-4 h-4 mr-2" />
                              {item.name}
                            </Button>
                          </button>
                        );
                      }

                      // Regular navigation for other items
                      return (
                        <Link
                          key={item.id}
                          href={item.link}
                          className="block w-full"
                          onClick={closeMobileMenu}
                        >
                          <Button
                            variant="ghost"
                            className={STYLES.mobileNavContentItem}
                          >
                            <item.icon className="w-4 h-4 mr-2" />
                            {item.name}
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            {/* FAQ'S */}
            <Link href="/faqs" className="block w-full" onClick={closeMobileMenu}>
              <Button variant="ghost" className={STYLES.mobileButton}>
                FAQ&apos;S
              </Button>
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact"
              className="block w-full"
              onClick={closeMobileMenu}
            >
              <Button variant="ghost" className={STYLES.mobileButton}>
                Contact Us
              </Button>
            </Link>

            {/* Login Section */}
            <div className="border-t border-neutral-200 pt-3 mt-2">
              <div className="w-full">
                <Button
                  variant="ghost"
                  className={`${STYLES.mobileButton} justify-between`}
                  onClick={() =>
                    handleDropdownToggle("Login", loginOpen, setLoginOpen)
                  }
                >
                  <span className="flex items-center gap-2">
                    <LogIn className="w-4 h-4" />
                    Login
                  </span>
                  {loginOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Button>

                {loginOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {LOGIN_OPTIONS.map((option) =>
                      option.external ? (
                        <a
                          key={option.label}
                          href={option.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                          onClick={closeMobileMenu}
                        >
                          <Button
                            variant="ghost"
                            className={STYLES.mobileNavContentItem}
                          >
                            <option.icon className="w-4 h-4 mr-2" />
                            {option.label}
                          </Button>
                        </a>
                      ) : (
                        <Link
                          key={option.label}
                          href={option.href}
                          className="block w-full"
                          onClick={closeMobileMenu}
                        >
                          <Button
                            variant="ghost"
                            className={STYLES.mobileNavContentItem}
                          >
                            <option.icon className="w-4 h-4 mr-2" />
                            {option.label}
                          </Button>
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
