import {
  ArrowRight,
  BookOpen,
  Church,
  Eye,
  Hand,
  Heart,
  Home,
  MapPin,
  Send,
  Target,
  Users,
} from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import ExpandableCard from "../components/ui/expandable-card";
import InteractiveDiagram from "../components/ui/interactive-diagram";
import Staircase from "../components/ui/staircase";
import Tabs from "../components/ui/tabs";
import Timeline from "../components/ui/timeline";
import {
  commitmentLevels,
  disciplePlaces,
  discipleStages,
  foundation,
  pillars,
  workModel,
} from "../data/modelo-iglesia";

const NuestroModelo: React.FC = () => {
  // Preparar tabs para el fundamento
  const foundationTabs = foundation.map((item) => ({
    id: item.id,
    label: item.title,
    content: (
      <div className="space-y-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
            {item.id === "vision" && (
              <Eye className="h-8 w-8 text-primary-100" />
            )}
            {item.id === "mission" && (
              <Target className="h-8 w-8 text-primary-100" />
            )}
            {item.id === "mm33" && (
              <img
                src="/images/mm33.png"
                alt="MM33 Logo"
                className="h-12 w-12 object-contain"
              />
            )}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {item.title}
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {item.description}
          </p>
          {item.details && (
            <p className="text-gray-700 leading-relaxed">{item.details}</p>
          )}
        </div>
      </div>
    ),
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white hidden">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestro Modelo
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Conoce la visión, misión y modelo de discipulado que guía nuestra
              iglesia hacia el cumplimiento de la gran comisión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="#fundamento">
                  <Target className="mr-2 h-5 w-5" />
                  Nuestro Fundamento
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-600"
                asChild
              >
                <a href="#discipulado">
                  <Users className="mr-2 h-5 w-5" />
                  Modelo de Discipulado
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fundamento */}
      <section id="fundamento" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Fundamento
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Los principios fundamentales que guían nuestra iglesia y definen
              nuestro propósito en el cumplimiento de la gran comisión.
            </p>
          </div>

          <Tabs
            tabs={foundationTabs}
            className="max-w-4xl mx-auto"
            contentClassName="min-h-[300px]"
          />
        </div>
      </section>

      {/* Modelo de Trabajo */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestro Modelo de Trabajo
            </h2>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-600">
                  {workModel.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-600 mb-4">
                  {workModel.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {workModel.details}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Los Cinco Pilares
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Los fundamentos que sostienen nuestra iglesia y guían nuestro
              crecimiento espiritual y comunitario.
            </p>
          </div>

          <InteractiveDiagram pillars={pillars} className="mb-12" />

          {/* Lista detallada de pilares */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const getIcon = () => {
                switch (pillar.icon) {
                  case "Heart":
                    return <Heart className="h-6 w-6" />;
                  case "Send":
                    return <Send className="h-6 w-6" />;
                  case "Users":
                    return <Users className="h-6 w-6" />;
                  case "BookOpen":
                    return <BookOpen className="h-6 w-6" />;
                  case "Hands":
                    return <Hand className="h-6 w-6" />;
                  default:
                    return <Heart className="h-6 w-6" />;
                }
              };

              return (
                <ExpandableCard
                  key={pillar.id}
                  title={pillar.title}
                  subtitle={pillar.subtitle}
                  description={pillar.description}
                  icon={getIcon()}
                  color={pillar.color}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Modelo de Discipulado */}
      <section id="discipulado" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modelo de Discipulado Bíblico
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Siguiendo el modelo de Jesús, formamos discípulos que se
              multiplican en otros discípulos, cumpliendo así la gran comisión.
            </p>
          </div>

          <Timeline items={discipleStages} className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Escalera del Compromiso */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Escalera del Compromiso
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              El camino progresivo que cada creyente puede seguir para crecer en
              su compromiso con Cristo y su iglesia.
            </p>
          </div>

          <Staircase levels={commitmentLevels} className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Lugares de Discipulado */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lugares de Discipulado
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Los diferentes contextos donde desarrollamos el discipulado,
              siguiendo el modelo de Jesús.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {disciplePlaces.map((place) => {
              const getIcon = () => {
                switch (place.icon) {
                  case "MapPin":
                    return <MapPin className="h-6 w-6" />;
                  case "Home":
                    return <Home className="h-6 w-6" />;
                  case "Church":
                    return <Church className="h-6 w-6" />;
                  default:
                    return <MapPin className="h-6 w-6" />;
                }
              };

              return (
                <Card
                  key={place.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 ${place.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      {getIcon()}
                    </div>
                    <CardTitle className="text-xl">{place.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-center">
                      {place.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Actividades:
                      </h4>
                      <ul className="space-y-1">
                        {place.activities.map((activity, index) => (
                          <li
                            key={index}
                            className="flex items-start text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Te gustaría ser parte de nuestro modelo?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a nosotros en este viaje de fe y crecimiento espiritual. Te
            invitamos a formar parte de nuestra familia y crecer junto a
            nosotros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/contacto">
                <Users className="mr-2 h-5 w-5" />
                Únete a Nosotros
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600"
              asChild
            >
              <a href="/ministerios">
                <ArrowRight className="mr-2 h-5 w-5" />
                Conoce Nuestros Ministerios
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NuestroModelo;
