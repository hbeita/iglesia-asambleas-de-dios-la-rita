import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { cn } from "../../utils/cn";

interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  icon: string;
  color: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  // Función para obtener iconos - se puede expandir en el futuro
  // const getIconComponent = (iconName: string) => {
  //   return "User";
  // };

  return (
    <div className={cn("relative", className)}>
      {/* Línea vertical */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600"></div>

      <div className="space-y-8">
        {items.map((item, index) => {
          const isExpanded = expandedItems.has(item.id);

          return (
            <div key={item.id} className="relative flex items-start">
              {/* Punto en la línea */}
              <div
                className={cn(
                  "relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-white shadow-lg",
                  item.color
                )}
              >
                <span className="text-white font-bold text-lg">
                  {index + 1}
                </span>
              </div>

              {/* Contenido */}
              <div className="ml-8 flex-1">
                <div
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => toggleExpanded(item.id)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-primary-600 font-medium mb-2">
                          {item.subtitle}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        {isExpanded ? (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </div>

                    {/* Actividades expandibles */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">
                          Actividades y Procesos:
                        </h4>
                        <ul className="space-y-2">
                          {item.activities.map((activity, activityIndex) => (
                            <li
                              key={activityIndex}
                              className="flex items-start"
                            >
                              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-gray-600 leading-relaxed">
                                {activity}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
