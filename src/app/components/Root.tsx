import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { LinkButton } from "./ui/link-button";
import { AnimatedIntro } from "./AnimatedIntro";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Auto-open courses dropdown if URL parameter is present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('openDropdown') === 'true') {
      setCoursesDropdownOpen(true);
      // Remove the parameter from URL after opening dropdown
      const newParams = new URLSearchParams(location.search);
      newParams.delete('openDropdown');
      const newSearch = newParams.toString();
      const newUrl = location.pathname + (newSearch ? `?${newSearch}` : '');
      navigate(newUrl, { replace: true });
    }
  }, [location.search, location.pathname, navigate]);

  // Show intro animation only on first load
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCoursesDropdownOpen(false);
      }
    };

    if (coursesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [coursesDropdownOpen]);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm" ref={headerRef}>
        {/* Tagline Bar */}
        <div className="bg-gradient-to-r from-[#2E66B1] to-[#F7D514] text-white py-2">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-center sm:text-left">
              <p className="text-xs sm:text-sm font-medium">Excellence in Education, Right from the Start</p>
              <p className="hidden md:block font-bold text-[12px]">Driven by Excellence | Guided by Experts | Proven Results</p>
            </div>
          </div>
        </div>
        
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 -ml-4 sm:-ml-6 lg:-ml-8">
              <span 
                className="font-bold text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-[Orbitron]" 
                style={{ 
                  color: '#2E66B1'
                }}
              >
                AUSPEN ACADEMY
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:gap-6 md:items-center relative">
              {navigation.map((item) => {
                if (item.name === "Courses") {
                  return (
                    <div key={item.path} className="relative" ref={dropdownRef}>
                      <button
                        className={`flex items-center gap-1 text-sm transition-colors outline-none bg-transparent border-none cursor-pointer p-0 ${
                          isActive(item.path)
                            ? "font-medium"
                            : "text-gray-700"
                        }`}
                        style={isActive(item.path) ? { color: '#F7D514' } : {}}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#F7D514'}
                        onMouseLeave={(e) => !isActive(item.path) && (e.currentTarget.style.color = '#374151')}
                        onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                      >
                        Courses
                        <ChevronDown className="h-3 w-3" />
                      </button>
                      {coursesDropdownOpen && (
                        <div className="absolute left-0 top-full bg-white border border-gray-200 shadow-md z-10">
                          <Link
                            to="/courses?category=gate"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            GATE
                          </Link>
                          <Link
                            to="/courses?category=iit-jee"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            IIT-JEE
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm transition-colors ${
                      isActive(item.path)
                        ? "font-medium"
                        : "text-gray-700"
                    }`}
                    style={isActive(item.path) ? { color: '#F7D514' } : {}}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#F7D514'}
                    onMouseLeave={(e) => !isActive(item.path) && (e.currentTarget.style.color = '#374151')}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <LinkButton to="/contact">Enroll Now</LinkButton>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 md:hidden">
            <div className="space-y-1 px-4 py-3">
              {navigation.map((item) => {
                if (item.name === "Courses") {
                  return (
                    <div key={item.path}>
                      <div className="text-sm font-medium text-gray-900 px-3 py-2">Courses</div>
                      <div className="ml-4 space-y-1">
                        <Link
                          to="/courses?category=gate"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          GATE
                        </Link>
                        <Link
                          to="/courses?category=iit-jee"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          IIT-JEE
                        </Link>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-md px-3 py-2 text-sm ${
                      isActive(item.path)
                        ? ""
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    style={isActive(item.path) ? { backgroundColor: 'rgba(46, 102, 177, 0.1)', color: '#2E66B1' } : {}}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-2">
                <LinkButton to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
                  Enroll Now
                </LinkButton>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {showIntro ? <AnimatedIntro onComplete={handleIntroComplete} /> : <Outlet />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity w-fit">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: '#2E66B1' }}>
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold font-[Orbitron]">Auspen Academy</span>
                  <span className="text-xs text-gray-400">GATE & IIT-JEE Coaching</span>
                </div>
              </Link>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/courses?category=gate" className="hover:text-white">Our Courses</Link></li>
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Contact Info</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Phone: +91 9998885881</li>
                <li>Email: info@auspenacademy.com</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Address</h3>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=9-7-11+B-1+Road+facing+UCH+community+hall+Gandhi+Nagar+Kakinada+533004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors inline-block"
              >
                9-7-11/ B-1 Road facing,<br />
                (beside UCH community hall)<br />
                Gandhi Nagar - Kakinada 533 004
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Auspen Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}