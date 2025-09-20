import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CHURCH_INFO } from "../../utils/constants";
import Logo from "../ui/Logo";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Ministerios", href: "/ministerios" },
    { name: "Nuestro Modelo", href: "/nuestro-modelo" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    { name: "Eventos", href: "/eventos" },
    { name: "Donar", href: "/donar" },
    { name: "Contacto", href: "/contacto" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-primary-800 shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary-700 text-white py-2 hidden">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <a
                href={`tel:${CHURCH_INFO.phone}`}
                className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
                title="Llamar"
              >
                <Phone className="h-4 w-4" />
                <span>{CHURCH_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CHURCH_INFO.email}`}
                className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
                title="Enviar email"
              >
                <Mail className="h-4 w-4" />
                <span>{CHURCH_INFO.email}</span>
              </a>
            </div>
            <a
              href={CHURCH_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
              title="Ver en Google Maps"
            >
              <MapPin className="h-4 w-4" />
              <span>{CHURCH_INFO.address}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container-custom ">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 ">
            <Logo className="h-12 w-auto" />
            {/* <div>
              <h1 className="text-xl font-bold text-gray-900">
                {CHURCH_INFO.name}
              </h1>
              <p className="text-sm text-gray-600">{CHURCH_INFO.tagline}</p>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-white border-b-2 border-primary-600"
                    : "text-white hover:text-primary-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-primary-600 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-white border-b-2 border-primary-600"
                      : "text-white hover:text-green-500"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
