'use client';

import { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface MapProps {
  selectedBasemap: string;
}

export default function Map({ selectedBasemap }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  const getMapStyle = (basemap: string): maplibregl.StyleSpecification | null => {
    if (basemap === 'osm') {
      return {
        version: 8 as const,
        sources: {
          'osm-tiles': {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors'
          }
        },
        layers: [
          {
            id: 'osm-tiles',
            type: 'raster',
            source: 'osm-tiles',
            minzoom: 0,
            maxzoom: 19
          }
        ]
      };
    } else if (basemap === 'satellite') {
      return {
        version: 8 as const,
        sources: {
          'satellite-tiles': {
            type: 'raster',
            tiles: ['https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],
            tileSize: 256,
            attribution: '© Esri'
          }
        },
        layers: [
          {
            id: 'satellite-tiles',
            type: 'raster',
            source: 'satellite-tiles',
            minzoom: 0,
            maxzoom: 19
          }
        ]
      };
    } else if (basemap === 'terrain') {
      return {
        version: 8 as const,
        sources: {
          'terrain-tiles': {
            type: 'raster',
            tiles: ['https://tile.opentopomap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenTopoMap contributors'
          }
        },
        layers: [
          {
            id: 'terrain-tiles',
            type: 'raster',
            source: 'terrain-tiles',
            minzoom: 0,
            maxzoom: 17
          }
        ]
      };
    }
    return null;
  };

  useEffect(() => {
    const style = getMapStyle(selectedBasemap);
    if (!style) return;

    if (map.current) {
      map.current.setStyle(style);
      return;
    }

    if (mapContainer.current) {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: style || {
          version: 8,
          sources: {
            'osm-tiles': {
              type: 'raster',
              tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
              tileSize: 256,
              attribution: '© OpenStreetMap contributors'
            }
          },
          layers: [
            {
              id: 'osm-tiles',
              type: 'raster',
              source: 'osm-tiles',
              minzoom: 0,
              maxzoom: 19
            }
          ]
        },
        center: [117.0, -2.5],
        zoom: 4
      });

      map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

      // Add custom CSS to adjust navigation control position
      const navControl = document.querySelector('.maplibregl-ctrl-top-right');
      if (navControl instanceof HTMLElement) {
        navControl.style.top = '4rem';
      }
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [selectedBasemap]);

  return (
    <div className="w-full h-full">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}