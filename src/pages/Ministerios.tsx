import {
  BookOpen,
  Calendar,
  Clock,
  Filter,
  Heart,
  Mail,
  MapPin,
  Music,
  Phone,
  Target,
  User,
  Users,
  Wrench,
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
import {
  ministerioCategories,
  ministerios,
  type Ministerio,
} from "../data/ministerios";

const Ministerios: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [selectedMinisterio, setSelectedMinisterio] =
    useState<Ministerio | null>(null);

  const filteredMinisterios =
    selectedCategory === "todos"
      ? ministerios
      : ministerios.filter(
          (ministry) => ministry.category === selectedCategory
        );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "niños":
        return <Heart className="h-5 w-5" />;
      case "jóvenes":
        return <Users className="h-5 w-5" />;
      case "música":
        return <Music className="h-5 w-5" />;
      case "evangelismo":
        return <Target className="h-5 w-5" />;
      case "servicio":
        return <Wrench className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "niños":
        return "bg-pink-100 text-pink-600";
      case "jóvenes":
        return "bg-blue-100 text-blue-600";
      case "música":
        return "bg-purple-100 text-purple-600";
      case "evangelismo":
        return "bg-green-100 text-green-600";
      case "servicio":
        return "bg-orange-100 text-orange-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Hidden */}
      {/* <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Ministerios
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Descubre cómo puedes involucrarte y crecer en tu fe a través de
              nuestros ministerios. Hay un lugar para cada persona en nuestra
              familia de fe.
            </p>
          </div>
        </div>
      </section> */}

      {/* Filter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Explora Nuestros Ministerios
              </h2>
              <p className="text-gray-600">
                Encuentra el ministerio que mejor se adapte a tu edad, intereses
                y dones.
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
            {ministerioCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMinisterios.map((ministerio) => (
              <Card
                key={ministerio.id}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedMinisterio(ministerio)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                        ministerio.category
                      )}`}
                    >
                      {getCategoryIcon(ministerio.category)}
                      <span className="capitalize">{ministerio.category}</span>
                    </div>
                    {ministerio.ageRange && (
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {ministerio.ageRange}
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary-600 transition-colors">
                    {ministerio.name}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {ministerio.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{ministerio.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>{ministerio.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>Líder: {ministerio.leader.name}</span>
                    </div>
                  </div>

                  <Button className="w-full group-hover:bg-primary-700 transition-colors">
                    Conocer Más
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredMinisterios.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No se encontraron ministerios
              </h3>
              <p className="text-gray-500">
                No hay ministerios disponibles para la categoría seleccionada.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Ministry Detail Modal */}
      {selectedMinisterio && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div
                    className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium mb-3 ${getCategoryColor(
                      selectedMinisterio.category
                    )}`}
                  >
                    {getCategoryIcon(selectedMinisterio.category)}
                    <span className="capitalize">
                      {selectedMinisterio.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedMinisterio.name}
                  </h2>
                  {selectedMinisterio.ageRange && (
                    <p className="text-gray-600 mb-4">
                      <span className="font-medium">Edades:</span>{" "}
                      {selectedMinisterio.ageRange}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedMinisterio(null)}
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
                    {selectedMinisterio.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Información
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-5 w-5 mr-3 text-primary-600" />
                        <div>
                          <div className="font-medium">Horario</div>
                          <div className="text-sm">
                            {selectedMinisterio.schedule}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-3 text-primary-600" />
                        <div>
                          <div className="font-medium">Ubicación</div>
                          <div className="text-sm">
                            {selectedMinisterio.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Líder del Ministerio
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-medium text-gray-900">
                        {selectedMinisterio.leader.name}
                      </div>
                      {selectedMinisterio.leader.phone && (
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <Phone className="h-4 w-4 mr-2" />
                          {selectedMinisterio.leader.phone}
                        </div>
                      )}
                      {selectedMinisterio.leader.email && (
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <Mail className="h-4 w-4 mr-2" />
                          {selectedMinisterio.leader.email}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {selectedMinisterio.activities &&
                  selectedMinisterio.activities.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Actividades
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedMinisterio.activities.map(
                          (activity, index) => (
                            <div
                              key={index}
                              className="flex items-center text-gray-600"
                            >
                              <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                              {activity}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                {selectedMinisterio.requirements &&
                  selectedMinisterio.requirements.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Requisitos
                      </h3>
                      <div className="space-y-2">
                        {selectedMinisterio.requirements.map(
                          (requirement, index) => (
                            <div
                              key={index}
                              className="flex items-center text-gray-600"
                            >
                              <div className="w-2 h-2 bg-secondary-600 rounded-full mr-3"></div>
                              {requirement}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
                <Button className="flex-1">
                  <Calendar className="mr-2 h-4 w-4" />
                  Unirse al Ministerio
                </Button>
                <Button variant="outline" className="flex-1">
                  <Phone className="mr-2 h-4 w-4" />
                  Contactar Líder
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
            ¿No encuentras el ministerio perfecto?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Estamos siempre abiertos a nuevas ideas y ministerios. Si tienes una
            pasión o don especial, hablemos sobre cómo puedes servir en nuestra
            iglesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/contacto">
                <Mail className="mr-2 h-5 w-5" />
                Contáctanos
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600"
              asChild
            >
              <a href="/sobre-nosotros">Conocer Más</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministerios;
