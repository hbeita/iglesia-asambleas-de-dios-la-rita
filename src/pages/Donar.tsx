import {
  BookOpen,
  Building2,
  Calendar,
  Check,
  Copy,
  DollarSign,
  Heart,
  Home,
  Smartphone,
  Target,
  TrendingUp,
  Users,
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
import { CHURCH_INFO } from "../utils/constants";

const Donar: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("transferencia");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const donationMethods = [
    {
      id: "transferencia",
      name: "Transferencia Bancaria",
      icon: <Building2 className="h-6 w-6" />,
      description: "Transferencia directa a nuestra cuenta bancaria",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "sinpe",
      name: "SINPE Móvil",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Pago rápido y seguro desde tu teléfono",
      color: "bg-green-100 text-green-600",
    },
    {
      id: "efectivo",
      name: "Efectivo",
      icon: <DollarSign className="h-6 w-6" />,
      description: "Donación en efectivo durante los servicios",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const donationPurposes = [
    {
      id: "general",
      name: "Fondo General",
      description: "Apoya las operaciones generales de la iglesia",
      icon: <Home className="h-5 w-5" />,
    },
    {
      id: "misiones",
      name: "Misiones",
      description: "Ayuda a expandir el evangelio a otras comunidades",
      icon: <Target className="h-5 w-5" />,
    },
    {
      id: "ministerios",
      name: "Ministerios",
      description: "Apoya nuestros ministerios de niños, jóvenes y adultos",
      icon: <Users className="h-5 w-5" />,
    },
    {
      id: "construccion",
      name: "Construcción",
      description: "Ayuda con mejoras y expansión de nuestras instalaciones",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      id: "ayuda",
      name: "Ayuda Social",
      description: "Apoya programas de ayuda a familias necesitadas",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      id: "educacion",
      name: "Educación",
      description: "Becas y programas educativos cristianos",
      icon: <BookOpen className="h-5 w-5" />,
    },
  ];

  const bankInfo = {
    bank: "BAC San José",
    accountName: "HILARY MARIANA ORTEGA LOPEZ",
    accountNumber: "CR93010200009414161091",
    accountType: "Cuenta Corriente",
    sinpeNumber: CHURCH_INFO.phone,
    sinpeName: CHURCH_INFO.name,
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const bibleVerses = [
    {
      verse:
        "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre.",
      reference: "2 Corintios 9:7",
    },
    {
      verse:
        "Honra a Jehová con tus bienes, y con las primicias de todos tus frutos.",
      reference: "Proverbios 3:9",
    },
    {
      verse:
        "Dad, y se os dará; medida buena, apretada, remecida y rebosando darán en vuestro regazo.",
      reference: "Lucas 6:38",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Hidden */}
      {/* <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Donar</h1>
            <p className="text-xl text-blue-100 mb-8">
              Tu generosidad nos permite continuar sirviendo a nuestra comunidad
              y expandiendo el reino de Dios. Cada donación, sin importar el
              tamaño, hace una diferencia.
            </p>
          </div>
        </div>
      </section> */}

      {/* Bible Verse */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <blockquote className="text-xl text-gray-700 italic mb-4">
                "{bibleVerses[0].verse}"
              </blockquote>
              <cite className="text-primary-600 font-medium">
                {bibleVerses[0].reference}
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Métodos de Donación
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elige el método que más te convenga para hacer tu donación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {donationMethods.map((method) => (
              <Card
                key={method.id}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedMethod === method.id
                    ? "ring-2 ring-primary-500 shadow-lg"
                    : "hover:shadow-md"
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.name}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Method Details */}
          <div className="max-w-2xl mx-auto">
            {selectedMethod === "transferencia" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building2 className="h-6 w-6 mr-2 text-primary-600" />
                    Información Bancaria
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Banco
                      </label>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-900">{bankInfo.bank}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(bankInfo.bank, "bank")}
                        >
                          {copiedField === "bank" ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tipo de Cuenta
                      </label>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-900">
                          {bankInfo.accountType}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            copyToClipboard(bankInfo.accountType, "type")
                          }
                        >
                          {copiedField === "type" ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre de la Cuenta
                    </label>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-900">
                        {bankInfo.accountName}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          copyToClipboard(bankInfo.accountName, "name")
                        }
                      >
                        {copiedField === "name" ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Número de Cuenta
                    </label>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-900 font-mono text-lg">
                        {bankInfo.accountNumber}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          copyToClipboard(bankInfo.accountNumber, "account")
                        }
                      >
                        {copiedField === "account" ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">
                      Instrucciones:
                    </h4>
                    <ol className="text-sm text-blue-800 space-y-1">
                      <li>1. Realiza la transferencia desde tu banco</li>
                      <li>2. Usa el número de cuenta exacto</li>
                      <li>
                        3. Envía el comprobante al whatsapp{" "}
                        {CHURCH_INFO.socialMedia.whatsapp}
                      </li>
                      <li>4. Recibirás confirmación en 24 horas</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedMethod === "sinpe" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="h-6 w-6 mr-2 text-green-600" />
                    SINPE Móvil
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Número SINPE
                      </label>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-900 font-mono text-lg">
                          {bankInfo.sinpeNumber}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            copyToClipboard(bankInfo.sinpeNumber, "sinpe")
                          }
                        >
                          {copiedField === "sinpe" ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-900">
                          {bankInfo.sinpeName}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            copyToClipboard(bankInfo.sinpeName, "sinpeName")
                          }
                        >
                          {copiedField === "sinpeName" ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">
                      Instrucciones:
                    </h4>
                    <ol className="text-sm text-green-800 space-y-1">
                      <li>1. Abre tu app bancaria</li>
                      <li>2. Selecciona "SINPE Móvil"</li>
                      <li>3. Ingresa el número {bankInfo.sinpeNumber}</li>
                      <li>4. Confirma el nombre y realiza el pago</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedMethod === "efectivo" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-6 w-6 mr-2 text-yellow-600" />
                    Donación en Efectivo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Donación Durante los Servicios
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Puedes hacer tu donación en efectivo durante cualquiera de
                      nuestros servicios.
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-medium text-yellow-900 mb-2">
                      Horarios de Servicio:
                    </h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Sábado: 7:00 PM - Culto Principal</li>
                      <li>• Martes: 9:00 AM - Ayuno y Oración</li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <Button size="lg" asChild>
                      <a href="/contacto">
                        <Calendar className="mr-2 h-5 w-5" />
                        Ver Horarios Completos
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Donation Purposes */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Propósitos de Donación
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Especifica cómo te gustaría que se use tu donación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationPurposes.map((purpose) => (
              <Card
                key={purpose.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      {purpose.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{purpose.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{purpose.description}</CardDescription>
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
            ¡Gracias por tu generosidad!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tu donación nos permite continuar sirviendo a nuestra comunidad y
            expandiendo el reino de Dios. Cada contribución hace una diferencia
            real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/contacto">
                <Heart className="mr-2 h-5 w-5" />
                Contactar para Más Información
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600"
              asChild
            >
              <a href="/sobre-nosotros">
                <TrendingUp className="mr-2 h-5 w-5" />
                Ver Nuestro Impacto
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donar;
