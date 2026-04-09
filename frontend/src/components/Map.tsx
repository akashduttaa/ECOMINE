'use client';

import { useEffect, useState } from 'react';
import L from 'leaflet';

interface DropZone {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

const mockDropZones: DropZone[] = [
  { id: '1', name: 'Kolkata E-Waste Hub - Shyambazar', lat: 22.5897, lng: 88.3639 },
  { id: '2', name: 'Green Earth Recycling - Ballygunge', lat: 22.5384, lng: 88.3654 },
  { id: '3', name: 'EcoMine Drop Zone - Salt Lake', lat: 22.5726, lng: 88.4226 },
  { id: '4', name: 'Digital Waste Center - New Market', lat: 22.5487, lng: 88.3621 },
  { id: '5', name: 'Eco-Recovery Unit - Behala', lat: 22.4862, lng: 88.3282 },
];

export default function Map() {
  const [isMounted, setIsMounted] = useState(false);
  const [mapContainer, setMapContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !mapContainer) return;

    // Initialize map
    const map = L.map(mapContainer, {
      center: [22.5726, 88.3639],
      zoom: 12,
      zoomControl: true,
      dragging: true,
    });

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add markers for drop zones
    mockDropZones.forEach((zone) => {
      const marker = L.marker([zone.lat, zone.lng]).addTo(map);
      marker.bindPopup(`<b>${zone.name}</b>`);
    });

    // Handle resize
    const handleResize = () => {
      setTimeout(() => {
        map.invalidateSize();
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      map.remove();
    };
  }, [isMounted, mapContainer]);

  if (!isMounted) {
    return <div className="h-64 bg-neutral-800 rounded-xl animate-pulse"></div>;
  }

  return (
    <div 
      ref={setMapContainer}
      className="rounded-xl overflow-hidden shadow-2xl h-[400px]"
      style={{ width: '100%', height: '400px' }}
    />
  );
}
