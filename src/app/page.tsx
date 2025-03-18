import Map from '@/components/Map';
import Sidebar from '@/components/Sidebar';
import PropertiesPanel from '@/components/PropertiesPanel';

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Sidebar />
      <PropertiesPanel />
      <Map />
    </main>
  )}
