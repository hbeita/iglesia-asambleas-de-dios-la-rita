import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Eye,
  GraduationCap,
  Heart,
  Mail,
  Phone,
  Target,
  Users,
} from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { churchHistory, missionVisionValues, pastoralTeam } from "../data/team";

const SobreNosotros: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Conoce nuestra historia, misión y el equipo pastoral que guía
              nuestra congregación hacia un futuro lleno de fe y esperanza.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary-600" />
                </div>
                <CardTitle className="text-2xl">Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {missionVisionValues.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-secondary-600" />
                </div>
                <CardTitle className="text-2xl">Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {missionVisionValues.vision}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent-600" />
                </div>
                <CardTitle className="text-2xl">Nuestros Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {missionVisionValues.values
                    .slice(0, 3)
                    .map((value, index) => (
                      <div key={index} className="text-sm text-gray-600">
                        <span className="font-medium text-gray-900">
                          {value.title}:
                        </span>{" "}
                        {value.description}
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* All Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Nuestros Valores Fundamentales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missionVisionValues.values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent-600 mr-2" />
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Church History */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Desde {churchHistory.founded}, hemos sido una comunidad de fe
              comprometida con el crecimiento espiritual y el servicio a nuestra
              comunidad.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

              <div className="space-y-8">
                {churchHistory.milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="ml-16">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-2">
                          <Calendar className="h-5 w-5 text-primary-600 mr-2" />
                          <span className="font-bold text-primary-600">
                            {milestone.year}
                          </span>
                        </div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pastoral Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo Pastoral
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce a los pastores y líderes que guían nuestra congregación con
              amor, sabiduría y dedicación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastoralTeam.map((member) => (
              <Card
                key={member.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-64 md:h-full bg-gray-200 flex items-center justify-center">
                      <Users className="h-16 w-16 text-gray-400" />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-primary-600 font-medium">
                        {member.position}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {member.bio}
                      </p>

                      <div className="space-y-3">
                        {member.education && member.education.length > 0 && (
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                              <GraduationCap className="h-4 w-4 mr-2 text-primary-600" />
                              Educación
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {member.education.map((edu, index) => (
                                <li key={index} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                  {edu}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {member.specialties &&
                          member.specialties.length > 0 && (
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                <Award className="h-4 w-4 mr-2 text-primary-600" />
                                Especialidades
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {member.specialties.map((specialty, index) => (
                                  <span
                                    key={index}
                                    className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                                  >
                                    {specialty}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                        <div className="flex space-x-4 pt-4">
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors"
                            >
                              <Mail className="h-4 w-4 mr-1" />
                              Email
                            </a>
                          )}
                          {member.phone && (
                            <a
                              href={`tel:${member.phone}`}
                              className="flex items-center text-sm text-gray-600 hover:text-primary-600 transition-colors"
                            >
                              <Phone className="h-4 w-4 mr-1" />
                              Teléfono
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Declaración de Fe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestras creencias fundamentales basadas en las Escrituras y la
              tradición de las Asambleas de Dios.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Las Escrituras
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Creemos que las Escrituras, tanto el Antiguo como el Nuevo
                      Testamento, son verbalmente inspiradas por Dios y son la
                      revelación de Dios al hombre, la regla infalible e
                      inerrante de fe y conducta.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      La Deidad
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Creemos en un solo Dios que existe eternamente en tres
                      personas: el Padre, el Hijo y el Espíritu Santo. Estos
                      tres son un solo Dios, teniendo la misma naturaleza,
                      atributos y perfección.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      El Señor Jesucristo
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Creemos en la deidad de nuestro Señor Jesucristo, en su
                      nacimiento virginal, en su vida sin pecado, en sus
                      milagros, en su muerte vicaria y expiatoria, en su
                      resurrección corporal, en su ascensión a la diestra del
                      Padre, y en su retorno personal en poder y gloria.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      La Salvación del Hombre
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Creemos que la salvación del hombre se efectúa únicamente
                      por la gracia de Dios, mediante la fe en Jesucristo, y que
                      el arrepentimiento y la regeneración por el Espíritu Santo
                      son absolutamente esenciales para la salvación.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      El Bautismo en el Espíritu Santo
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Creemos que el bautismo en el Espíritu Santo, con la
                      evidencia inicial de hablar en otras lenguas, está
                      disponible para todos los creyentes y es una experiencia
                      distinta y posterior a la salvación.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      La Iglesia
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Creemos que la Iglesia es el cuerpo de Cristo, la
                      habitación de Dios por el Espíritu, con el encargo divino
                      de cumplir la gran comisión. Cada creyente es una parte
                      integral de la Iglesia universal.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Te gustaría conocer más sobre nosotros?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Te invitamos a visitarnos y experimentar la calidez de nuestra
            comunidad de fe. Estamos aquí para recibirte con los brazos
            abiertos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/contacto">
                <Users className="mr-2 h-5 w-5" />
                Visítanos
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600"
              asChild
            >
              <a href="/ministerios">
                <BookOpen className="mr-2 h-5 w-5" />
                Nuestros Ministerios
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;
