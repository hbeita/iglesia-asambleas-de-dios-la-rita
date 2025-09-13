import {
  Clock,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { CHURCH_INFO, SERVICE_SCHEDULE } from "../../utils/constants";
import Logo from "../ui/Logo";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Inicio", href: "/" },
    { name: "Ministerios", href: "/ministerios" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    { name: "Eventos", href: "/eventos" },
    { name: "Donar", href: "/donar" },
    { name: "Contacto", href: "/contacto" },
  ];

  const ministries = [
    { name: "Ministerio Infantil", href: "/ministerios#infantil" },
    { name: "Ministerio de Jóvenes", href: "/ministerios#jovenes" },
    { name: "Ministerio de Adoración", href: "/ministerios#adoracion" },
    { name: "Ministerio de Damas", href: "/ministerios#damas" },
    { name: "Ministerio de Varones", href: "/ministerios#varones" },
    { name: "Ministerio de Evangelismo", href: "/ministerios#evangelismo" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Logo className="h-10 w-auto" />
              {/* <div>
                <h3 className="font-bold text-lg">{CHURCH_INFO.name}</h3>
                <p className="text-sm text-gray-400">{CHURCH_INFO.tagline}</p>
              </div> */}
            </div>
            <p className="text-gray-300 text-sm">
              Una comunidad de fe comprometida con transformar vidas y construir
              una sociedad más justa y amorosa a través del evangelio de
              Jesucristo.
            </p>
            <div className="flex space-x-4">
              <a
                href={CHURCH_INFO.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors group"
                aria-label="Facebook"
                title="Síguenos en Facebook"
              >
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={CHURCH_INFO.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors group"
                aria-label="Instagram"
                title="Síguenos en Instagram"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={`https://wa.me/${CHURCH_INFO.socialMedia.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors group"
                aria-label="WhatsApp"
                title="Contáctanos por WhatsApp"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Nuestros Ministerios</h4>
            <ul className="space-y-2">
              {ministries.map((ministry) => (
                <li key={ministry.name}>
                  <Link
                    to={ministry.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {ministry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Schedule */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto y Horarios</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  {CHURCH_INFO.address}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  {CHURCH_INFO.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  {CHURCH_INFO.email}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <h5 className="font-medium text-sm mb-2 flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary-400" />
                Horarios de Servicio
              </h5>
              <div className="text-gray-300 text-sm space-y-1">
                <div>
                  <span className="font-medium">Sábado:</span>
                  <ul className="ml-4 space-y-1">
                    {SERVICE_SCHEDULE.saturday.map((service, index) => (
                      <li key={index}>
                        {service.time} - {service.service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-medium">Martes:</span>
                  <ul className="ml-4 space-y-1">
                    {SERVICE_SCHEDULE.tuesday.map((service, index) => (
                      <li key={index}>
                        {service.time} - {service.service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {CHURCH_INFO.name}. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>para la gloria de Dios</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
