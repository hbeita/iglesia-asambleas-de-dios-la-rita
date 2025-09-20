import { zodResolver } from "@hookform/resolvers/zod";
import {
  Calendar,
  CheckCircle,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  CHURCH_INFO,
  OFFICE_HOURS,
  SERVICE_SCHEDULE,
} from "../utils/constants";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().min(8, "El teléfono debe tener al menos 8 dígitos"),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  ministry: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contacto: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form data:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();

    // Hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Dirección",
      content: CHURCH_INFO.address,
      action: "Ver en Google Maps",
      href:
        CHURCH_INFO.mapsUrl ||
        `https://maps.google.com/?q=${encodeURIComponent(CHURCH_INFO.address)}`,
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Teléfono",
      content: CHURCH_INFO.phone,
      action: "Llamar",
      href: `tel:${CHURCH_INFO.phone}`,
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "WhatsApp",
      content: CHURCH_INFO.socialMedia.whatsapp,
      action: "Enviar Mensaje",
      href: `https://wa.me/${CHURCH_INFO.socialMedia.whatsapp}`,
    },
    ...(CHURCH_INFO.wazeUrl
      ? [
          {
            icon: <Navigation className="h-8 w-8" />,
            title: "Waze",
            content: "Cómo llegar",
            action: "Abrir en Waze",
            href: CHURCH_INFO.wazeUrl,
          },
        ]
      : []),
  ];

  const ministries = [
    "Ministerio Infantil",
    "Ministerio de Jóvenes",
    "Ministerio de Adoración",
    "Ministerio de Damas",
    "Ministerio de Varones",
    "Ministerio de Evangelismo",
    "Pastoral",
    "Otro",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Hidden */}
      {/* <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
            <p className="text-xl text-blue-100 mb-8">
              Estamos aquí para ayudarte. No dudes en contactarnos si tienes
              preguntas, necesitas oración o quieres saber más sobre nuestra
              iglesia.
            </p>
          </div>
        </div>
      </section> */}

      {/* Contact Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Información de Contacto
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Múltiples formas de ponerte en contacto con nosotros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary-600 text-2xl">{info.icon}</div>
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{info.content}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section-padding hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Envíanos un Mensaje
                </h2>
                <p className="text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo
                  pronto.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-800">
                    ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nombre Completo *
                    </label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Tu nombre completo"
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="tu@email.com"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Teléfono *
                    </label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      placeholder={CHURCH_INFO.phone}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="ministry"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Ministerio de Interés
                    </label>
                    <select
                      id="ministry"
                      {...register("ministry")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Selecciona un ministerio</option>
                      {ministries.map((ministry) => (
                        <option key={ministry} value={ministry}>
                          {ministry}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Asunto *
                  </label>
                  <Input
                    id="subject"
                    {...register("subject")}
                    placeholder="¿En qué podemos ayudarte?"
                    className={errors.subject ? "border-red-500" : ""}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    placeholder="Cuéntanos más detalles..."
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Navigation className="h-6 w-6 mr-2 text-primary-600" />
                    Ubicación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Mapa interactivo</p>
                      <p className="text-sm text-gray-500">
                        {CHURCH_INFO.address}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href={
                          CHURCH_INFO.mapsUrl ||
                          `https://maps.google.com/?q=${encodeURIComponent(
                            CHURCH_INFO.address
                          )}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Abrir en Google Maps
                      </a>
                    </Button>
                    {CHURCH_INFO.wazeUrl && (
                      <Button variant="outline" className="w-full" asChild>
                        <a
                          href={CHURCH_INFO.wazeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Navigation className="mr-2 h-4 w-4" />
                          Abrir en Waze
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Service Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-6 w-6 mr-2 text-primary-600" />
                    Horarios de Servicio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Sábado</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {SERVICE_SCHEDULE.saturday.map((service, index) => (
                          <li key={index} className="flex justify-between">
                            <span>{service.service}</span>
                            <span className="font-medium">{service.time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Martes</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {SERVICE_SCHEDULE.tuesday.map((service, index) => (
                          <li key={index} className="flex justify-between">
                            <span>{service.service}</span>
                            <span className="font-medium">{service.time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-6 w-6 mr-2 text-primary-600" />
                    Horarios de Oficina
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(OFFICE_HOURS).map(([day, hours]) => (
                      <div key={day} className="flex justify-between text-sm">
                        <span className="capitalize font-medium text-gray-900">
                          {day}
                        </span>
                        <span className="text-gray-600">{hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Síguenos en Redes Sociales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mantente conectado con nuestra comunidad a través de nuestras
              redes sociales.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href={CHURCH_INFO.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors group"
              title="Síguenos en Facebook"
            >
              <Facebook className="h-8 w-8 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={CHURCH_INFO.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-colors group"
              title="Síguenos en Instagram"
            >
              <Instagram className="h-8 w-8 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={`https://wa.me/${CHURCH_INFO.socialMedia.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors group"
              title="Contáctanos por WhatsApp"
            >
              <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¡Te esperamos!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ven y únete a nuestra familia de fe. Hay un lugar especial para ti
            en nuestra iglesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/eventos">
                <Calendar className="mr-2 h-5 w-5" />
                Ver Próximos Eventos
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600"
              asChild
            >
              <a href="/ministerios">
                <Users className="mr-2 h-5 w-5" />
                Conocer Ministerios
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
