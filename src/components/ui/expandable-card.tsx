import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { cn } from "../../utils/cn";

interface ExpandableCardProps {
  title: string;
  subtitle?: string;
  description: string;
  details?: string;
  icon?: React.ReactNode;
  color?: string;
  className?: string;
  defaultExpanded?: boolean;
  children?: React.ReactNode;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  subtitle,
  description,
  details,
  icon,
  color = "bg-primary-500",
  className,
  defaultExpanded = false,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden",
        className
      )}
    >
      <div className="p-6 cursor-pointer" onClick={toggleExpanded}>
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            {/* Icono */}
            {icon && (
              <div
                className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-full text-white flex-shrink-0",
                  color
                )}
              >
                {icon}
              </div>
            )}

            {/* Contenido */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
              {subtitle && (
                <p className="text-sm text-primary-600 font-medium mb-2">
                  {subtitle}
                </p>
              )}
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>

          {/* Botón expandir */}
          <div className="ml-4 flex-shrink-0">
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </div>
      </div>

      {/* Contenido expandible */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-200">
          <div className="pt-6">
            {details && (
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed">{details}</p>
              </div>
            )}
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;
