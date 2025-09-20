import { BookOpen, Hand, Heart, Send, Users } from "lucide-react";
import React, { useState } from "react";
import { cn } from "../../utils/cn";

interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
}

interface InteractiveDiagramProps {
  pillars: Pillar[];
  className?: string;
}

const InteractiveDiagram: React.FC<InteractiveDiagramProps> = ({
  pillars,
  className,
}) => {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  const getIconComponent = (iconName: string) => {
    const iconMap = {
      Heart,
      Send,
      Users,
      BookOpen,
      Hand,
    };
    return iconMap[iconName as keyof typeof iconMap] || Heart;
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Diagrama circular */}
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Círculo central */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg text-center">
              Iglesia
              <br />
              La Rita
            </span>
          </div>
        </div>

        {/* Líneas conectoras desde el centro */}
        <div className="absolute inset-0 flex items-center justify-center">
          {pillars.map((pillar, index) => {
            const angle = (index * 360) / pillars.length;
            const radius = 160;
            const isHovered = hoveredPillar === pillar.id;

            return (
              <div
                key={`line-${pillar.id}`}
                className="absolute"
                style={{
                  width: `${radius}px`,
                  height: "2px",
                  transformOrigin: "left center",
                  transform: `rotate(${angle}deg)`,
                  left: "50%",
                  top: "50%",
                  marginLeft: "16px", // Radio del círculo central
                }}
              >
                <div
                  className={cn(
                    "w-full h-full transition-all duration-300",
                    isHovered ? "bg-primary-500" : "bg-gray-300"
                  )}
                />
              </div>
            );
          })}
        </div>

        {/* Pilares alrededor del círculo */}
        <div className="relative w-full h-96">
          {pillars.map((pillar, index) => {
            const IconComponent = getIconComponent(pillar.icon);
            const angle = (index * 360) / pillars.length;
            const radius = 160;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            const isHovered = hoveredPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20"
                style={{
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
                onMouseEnter={() => setHoveredPillar(pillar.id)}
                onMouseLeave={() => setHoveredPillar(null)}
              >
                {/* Pilar */}
                <div
                  className={cn(
                    "w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer",
                    "hover:scale-110 hover:shadow-xl",
                    pillar.color,
                    isHovered && "scale-110 shadow-xl"
                  )}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Tooltip mejorado */}
                {isHovered && (
                  <div className="absolute z-30">
                    {/* Posicionamiento dinámico del tooltip */}
                    <div
                      className={cn(
                        "absolute w-72 bg-gray-900 text-white text-sm rounded-lg p-4 shadow-xl",
                        // Posicionamiento basado en el ángulo
                        angle >= 0 && angle < 90
                          ? "bottom-full left-1/2 transform -translate-x-1/2 mb-3"
                          : angle >= 90 && angle < 180
                          ? "bottom-full right-0 mb-3"
                          : angle >= 180 && angle < 270
                          ? "top-full left-1/2 transform -translate-x-1/2 mt-3"
                          : "top-full left-0 mt-3"
                      )}
                    >
                      <div className="font-semibold mb-2 text-base">
                        {pillar.title}
                      </div>
                      <div className="text-sm text-primary-300 mb-2 font-medium">
                        {pillar.subtitle}
                      </div>
                      <div className="text-sm leading-relaxed">
                        {pillar.description}
                      </div>

                      {/* Flecha del tooltip */}
                      <div
                        className={cn(
                          "absolute w-0 h-0",
                          // Posición de la flecha basada en el ángulo
                          angle >= 0 && angle < 90
                            ? "top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"
                            : angle >= 90 && angle < 180
                            ? "top-full right-4 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"
                            : angle >= 180 && angle < 270
                            ? "bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-900"
                            : "bottom-full left-4 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-900"
                        )}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lista de pilares para móvil */}
      <div className="mt-8 md:hidden">
        <div className="space-y-4">
          {pillars.map((pillar) => {
            const IconComponent = getIconComponent(pillar.icon);
            return (
              <div
                key={pillar.id}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md"
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center text-white",
                    pillar.color
                  )}
                >
                  <IconComponent className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-primary-600">{pillar.subtitle}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InteractiveDiagram;
