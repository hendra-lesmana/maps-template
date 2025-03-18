'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({ title, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b">
      <div 
        className="flex items-center justify-between p-3 cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium">{title}</h3>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      {isOpen && (
        <div className="p-3 pt-0">
          {children}
        </div>
      )}
    </div>
  );
}

export default function PropertiesPanel() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed right-0 top-14 h-[calc(100vh-3.5rem)] w-[300px] bg-white border-l shadow-md z-40 flex flex-col">
      <div className="flex items-center justify-between p-3 border-b">
        <h2 className="font-semibold">Properties</h2>
        <Button variant="ghost" size="icon" onClick={() => setIsVisible(false)}>
          <X size={16} />
        </Button>
      </div>

      <div className="p-3 text-sm text-gray-500">
        <div className="flex items-center">
          <div className="w-4 h-4 mr-2">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <p>Use the selector above to switch between layers in the map.</p>
        </div>
        <Button variant="ghost" size="sm" className="mt-2 h-6 text-xs" onClick={() => {}}>
          <X size={12} className="mr-1" />
          Dismiss
        </Button>
      </div>

      <div className="flex-1 overflow-auto">
        <CollapsibleSection title="Information" defaultOpen={true}>
          <div className="space-y-2">
            <p className="text-sm">USA Short-Term Weather Warnings</p>
            <Separator />
            <div className="grid grid-cols-2 gap-1 text-sm">
              <span className="text-gray-500">Source:</span>
              <span>NOAA</span>
              <span className="text-gray-500">Last Updated:</span>
              <span>Today, 10:30 AM</span>
              <span className="text-gray-500">Coverage:</span>
              <span>United States</span>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Symbology">
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="#3b82f6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-sm">NOAA Severe Thunderstorm Warnings</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="#ef4444" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-sm">NOAA Tornado Warnings</span>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}