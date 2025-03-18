'use client';

import { useState } from 'react';
import Map from '@/components/Map';
import Sidebar from '@/components/Sidebar';
import PropertiesPanel from '@/components/PropertiesPanel';

export default function Home() {
  const [selectedBasemap, setSelectedBasemap] = useState('osm');

  return (
    <main className="h-screen w-screen">
      <Sidebar onBasemapChange={setSelectedBasemap} />
      <PropertiesPanel />
      <Map selectedBasemap={selectedBasemap} />
    </main>
  )}
