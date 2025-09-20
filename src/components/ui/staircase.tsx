import {
  ChevronDown,
  ChevronUp,
  Church,
  User,
  UserCheck,
  UserCog,
} from "lucide-react";
import React, { useState } from "react";
import { cn } from "../../utils/cn";

interface CommitmentLevel {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  icon: string;
  color: string;
  level: number;
}

interface StaircaseProps {
  levels: CommitmentLevel[];
  className?: string;
}

const Staircase: React.FC<StaircaseProps> = ({ levels, className }) => {
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);

  const toggleExpanded = (levelId: string) => {
    setExpandedLevel(expandedLevel === levelId ? null : levelId);
  };

  const getIconComponent = (iconName: string) => {
    const iconMap = {
      User,
      UserCheck,
      UserCog,
      Church,
    };
    return iconMap[iconName as keyof typeof iconMap] || User;
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="space-y-4">
        {levels.map((level, index) => {
          const isExpanded = expandedLevel === level.id;
          const IconComponent = getIconComponent(level.icon);
          const isLast = index === levels.length - 1;

          return (
            <div key={level.id} className="relative">
              {/* Escalón */}
              <div
                className={cn(
                  "relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer",
                  "border-l-4 border-primary-500",
                  isExpanded && "shadow-xl"
                )}
                onClick={() => toggleExpanded(level.id)}
                style={{
                  marginLeft: `${index * 20}px`,
                  width: `calc(100% - ${index * 20}px)`,
                }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Nivel numérico */}
                      <div
                        className={cn(
                          "flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg",
                          level.color
                        )}
                      >
                        {level.level}
                      </div>

                      {/* Icono */}
                      <div className="p-3 bg-gray-100 rounded-full">
                        <IconComponent className="h-6 w-6 text-gray-600" />
                      </div>

                      {/* Contenido */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {level.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed max-w-2xl">
                          {level.description}
                        </p>
                      </div>
                    </div>

                    {/* Botón expandir */}
                    <div className="ml-4">
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Contenido expandible */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-900 mb-4">
                        Requisitos y Procesos:
                      </h4>
                      <ul className="space-y-3">
                        {level.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600 leading-relaxed">
                              {requirement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Conector visual (flecha) */}
              {!isLast && (
                <div
                  className="absolute left-8 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-primary-300"
                  style={{
                    marginLeft: `${index * 20}px`,
                  }}
                ></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Leyenda */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600 text-center">
          <strong>Progresión del Compromiso:</strong> Cada nivel representa un
          mayor compromiso y responsabilidad en el cuerpo de Cristo. La meta es
          que cada creyente progrese según su llamado y madurez espiritual.
        </p>
      </div>
    </div>
  );
};

export default Staircase;
