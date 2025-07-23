"use client";

import { CollapsibleSectionProps, ExpandedSections } from "@/types/movies";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const CollapsibleSection = <T,>({
  title,
  items,
  icon: Icon,
  sectionKey,
  renderItem,
}: CollapsibleSectionProps<T>) => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    characters: false,
    planets: false,
    species: false,
    starships: false,
    vehicles: false,
  });

  const toggleSection = (section: keyof ExpandedSections): void => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-700/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-yellow-400" />
          <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
          <span className="bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full text-sm">
            {items.length}
          </span>
        </div>
        {expandedSections[sectionKey] ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>

      {expandedSections[sectionKey] && (
        <div className="px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-md p-3 border border-gray-600"
              >
                {renderItem(item)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
