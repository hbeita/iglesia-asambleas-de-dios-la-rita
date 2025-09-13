import { ArrowRight, Calendar, Clock, MapPin, Quote, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Carousel from "../components/ui/carousel";
import { allCarouselSlides } from "../data/carousel-simple";
import { eventos } from "../data/eventos";
import { ministerios } from "../data/ministerios";
import { SERVICE_SCHEDULE } from "../utils/constants";

const Home: React.FC = () => {
  // Utility function to format dates correctly (avoiding timezone issues)
  const formatDateShort = (dateString: string) => {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("es-CR");
  };

  // Get featured events (next 3 events)
  const featuredEvents = eventos
    .filter((event) => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  // Get featured ministries (first 3)
  const featuredMinistries = ministerios.slice(0, 3);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Miembro desde 2018",
      content:
        "Esta iglesia ha transformado mi vida. El amor y la comunidad que encontré aquí me han ayudado a crecer espiritualmente de maneras que nunca imaginé.",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Líder de Jóvenes",
      content:
        "Ser parte del ministerio de jóvenes me ha permitido ver cómo Dios trabaja en las vidas de los jóvenes. Es increíble ver su transformación.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ana Martínez",
      role: "Miembro desde 2020",
      content:
        "La enseñanza bíblica sólida y el compañerismo genuino hacen de esta iglesia un lugar especial. Me siento bendecida de ser parte de esta familia.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Hidden */}
      {/* <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Bienvenidos a {CHURCH_INFO.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up">
              {CHURCH_INFO.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contacto" className="flex items-center">
                  Visítanos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-600"
                asChild
              >
                <Link to="/donar" className="flex items-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Donar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Carousel Section */}
      <section className="section-padding">
        <div className="container-custom">
          <Carousel
            slides={allCarouselSlides}
            autoPlay={true}
            autoPlayInterval={6000}
            showDots={true}
            showArrows={true}
            className="shadow-2xl"
          />
        </div>
      </section>

      {/* Service Schedule */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Horarios de Servicio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Únete a nosotros en nuestros servicios semanales donde adoramos a
              Dios y crecemos en la fe juntos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-2xl">Sábado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {SERVICE_SCHEDULE.saturday.map((service, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-primary-500 pl-4"
                    >
                      <div className="font-semibold text-primary-600">
                        {service.time}
                      </div>
                      <div className="text-gray-600">{service.service}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-secondary-600" />
                </div>
                <CardTitle className="text-2xl">Martes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {SERVICE_SCHEDULE.tuesday.map((service, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-secondary-500 pl-4"
                    >
                      <div className="font-semibold text-secondary-600">
                        {service.time}
                      </div>
                      <div className="text-gray-600">{service.service}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Próximos Eventos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No te pierdas nuestros próximos eventos especiales y conferencias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <Card
                key={event.id}
                className="hover:shadow-lg transition-shadow overflow-hidden"
              >
                {/* Event Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-sm font-medium text-white bg-primary-600 px-3 py-1 rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-sm text-white bg-black bg-opacity-50 px-3 py-1 rounded-full">
                      {formatDateShort(event.date)}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link to={`/eventos#${event.id}`}>Ver Detalles</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/eventos">
                Ver Todos los Eventos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Ministries */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Ministerios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre cómo puedes involucrarte y crecer en tu fe a través de
              nuestros ministerios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMinistries.map((ministry) => (
              <Card
                key={ministry.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                      {ministry.category}
                    </span>
                    {ministry.ageRange && (
                      <span className="text-sm text-gray-500">
                        {ministry.ageRange}
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl">{ministry.name}</CardTitle>
                  <CardDescription>{ministry.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {ministry.schedule && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {ministry.schedule}
                      </div>
                    )}
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {ministry.location}
                    </div>
                    {ministry.leader && (
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Líder:</span>{" "}
                        {ministry.leader.name}
                      </div>
                    )}
                  </div>
                  <Button className="w-full" asChild>
                    <Link to={`/ministerios#${ministry.id}`}>Conocer Más</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/ministerios">
                Ver Todos los Ministerios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding hidden">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testimonios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escucha lo que nuestros miembros tienen que decir sobre su
              experiencia en nuestra iglesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary-200 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para ser parte de nuestra familia?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Te invitamos a visitarnos este domingo y experimentar la diferencia
            que hace una comunidad de fe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contacto">
                <MapPin className="mr-2 h-5 w-5" />
                Visítanos
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600"
              asChild
            >
              <Link to="/sobre-nosotros">Conocer Más</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
