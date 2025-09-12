import {
  Calendar,
  Clock,
  Download,
  ExternalLink,
  Filter,
  MapPin,
  Star,
  Users,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { eventCategories, eventos, type Evento } from "../data/eventos";

const Eventos: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [selectedEvent, setSelectedEvent] = useState<Evento | null>(null);

  const filteredEvents =
    selectedCategory === "todos"
      ? eventos
      : eventos.filter((event) => event.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "servicio":
        return "bg-blue-100 text-blue-600";
      case "conferencia":
        return "bg-purple-100 text-purple-600";
      case "comunitario":
        return "bg-green-100 text-green-600";
      case "especial":
        return "bg-yellow-100 text-yellow-600";
      case "retiro":
        return "bg-pink-100 text-pink-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "servicio":
        return "⛪";
      case "conferencia":
        return "🎤";
      case "comunitario":
        return "🤝";
      case "especial":
        return "⭐";
      case "retiro":
        return "🏔️";
      default:
        return "📅";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-CR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    return timeString;
  };

  const getDaysUntilEvent = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const exportToGoogleCalendar = (event: Evento) => {
    const startDate = new Date(`${event.date}T${event.time}`);
    const endDate = event.endTime
      ? new Date(`${event.date}T${event.endTime}`)
      : new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // Default 2 hours

    const formatDateForGoogle = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${formatDateForGoogle(startDate)}/${formatDateForGoogle(
      endDate
    )}&details=${encodeURIComponent(
      event.description
    )}&location=${encodeURIComponent(event.location)}`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Eventos y Actividades
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Únete a nosotros en nuestros eventos especiales, conferencias,
              retiros y actividades comunitarias. Hay algo para todos en nuestra
              familia de fe.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Próximos Eventos
              </h2>
              <p className="text-gray-600">
                Encuentra eventos que se adapten a tus intereses y
                disponibilidad.
              </p>
            </div>

            <div className="flex items-center space-x-2 mt-4 lg:mt-0">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">
                Filtrar por:
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {eventCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {getCategoryIcon(category.id)} {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => {
              const daysUntil = getDaysUntilEvent(event.date);
              const isUpcoming = daysUntil >= 0;

              return (
                <Card
                  key={event.id}
                  className={`hover:shadow-lg transition-all duration-300 cursor-pointer group ${
                    event.featured ? "ring-2 ring-primary-200" : ""
                  }`}
                  onClick={() => setSelectedEvent(event)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                          event.category
                        )}`}
                      >
                        <span>{getCategoryIcon(event.category)}</span>
                        <span className="capitalize">{event.category}</span>
                      </div>
                      {event.featured && (
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      )}
                    </div>

                    <CardTitle className="text-xl group-hover:text-primary-600 transition-colors">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {event.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{formatTime(event.time)}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      {event.maxAttendees && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>
                            {event.currentAttendees || 0} / {event.maxAttendees}{" "}
                            participantes
                          </span>
                        </div>
                      )}
                    </div>

                    {isUpcoming && (
                      <div className="mb-4">
                        <div
                          className={`text-sm font-medium ${
                            daysUntil === 0
                              ? "text-red-600"
                              : daysUntil <= 7
                              ? "text-orange-600"
                              : "text-green-600"
                          }`}
                        >
                          {daysUntil === 0
                            ? "¡Hoy!"
                            : daysUntil === 1
                            ? "Mañana"
                            : `En ${daysUntil} días`}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col space-y-2">
                      <Button className="w-full group-hover:bg-primary-700 transition-colors">
                        Ver Detalles
                      </Button>
                      {event.registrationRequired && (
                        <Button variant="outline" className="w-full" size="sm">
                          Registrarse
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No se encontraron eventos
              </h3>
              <p className="text-gray-500">
                No hay eventos disponibles para la categoría seleccionada.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div
                    className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium mb-3 ${getCategoryColor(
                      selectedEvent.category
                    )}`}
                  >
                    <span>{getCategoryIcon(selectedEvent.category)}</span>
                    <span className="capitalize">{selectedEvent.category}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedEvent.title}
                  </h2>
                  {selectedEvent.featured && (
                    <div className="flex items-center text-yellow-600 mb-2">
                      <Star className="h-5 w-5 fill-current mr-1" />
                      <span className="text-sm font-medium">
                        Evento Destacado
                      </span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Descripción
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedEvent.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Información del Evento
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-5 w-5 mr-3 text-primary-600" />
                        <div>
                          <div className="font-medium">Fecha</div>
                          <div className="text-sm">
                            {formatDate(selectedEvent.date)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-5 w-5 mr-3 text-primary-600" />
                        <div>
                          <div className="font-medium">Hora</div>
                          <div className="text-sm">
                            {formatTime(selectedEvent.time)}
                            {selectedEvent.endTime &&
                              ` - ${formatTime(selectedEvent.endTime)}`}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-3 text-primary-600" />
                        <div>
                          <div className="font-medium">Ubicación</div>
                          <div className="text-sm">
                            {selectedEvent.location}
                          </div>
                        </div>
                      </div>
                      {selectedEvent.price !== undefined && (
                        <div className="flex items-center text-gray-600">
                          <span className="h-5 w-5 mr-3 text-primary-600">
                            💰
                          </span>
                          <div>
                            <div className="font-medium">Costo</div>
                            <div className="text-sm">
                              {selectedEvent.price === 0
                                ? "Gratis"
                                : `₡${selectedEvent.price.toLocaleString()}`}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Organizador
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium text-gray-900">
                        {selectedEvent.organizer}
                      </div>
                      <div className="text-sm text-gray-600 mt-2">
                        <div className="flex items-center">
                          <span className="mr-2">📞</span>
                          {selectedEvent.contact.phone}
                        </div>
                        <div className="flex items-center mt-1">
                          <span className="mr-2">✉️</span>
                          {selectedEvent.contact.email}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {selectedEvent.tags && selectedEvent.tags.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Etiquetas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedEvent.maxAttendees && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Participantes
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Registrados
                        </span>
                        <span className="text-sm text-gray-600">
                          {selectedEvent.currentAttendees || 0} /{" "}
                          {selectedEvent.maxAttendees}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${
                              ((selectedEvent.currentAttendees || 0) /
                                selectedEvent.maxAttendees) *
                              100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
                {selectedEvent.registrationRequired &&
                  selectedEvent.registrationUrl && (
                    <Button className="flex-1" asChild>
                      <a
                        href={selectedEvent.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Registrarse
                      </a>
                    </Button>
                  )}
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => exportToGoogleCalendar(selectedEvent)}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Agregar a Google Calendar
                </Button>
                <Button variant="outline" className="flex-1">
                  <span className="mr-2">📞</span>
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Te gustaría organizar un evento?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Si tienes una idea para un evento o actividad que pueda beneficiar a
            nuestra comunidad, nos encantaría escucharte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/contacto">
                <Calendar className="mr-2 h-5 w-5" />
                Proponer Evento
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
                Nuestros Ministerios
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eventos;
