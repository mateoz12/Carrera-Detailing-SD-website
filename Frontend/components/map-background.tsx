"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    L: any
  }
}

const pins = [
  { name: "La Jolla", lat: 32.8328, lng: -117.2713 },
  { name: "Del Mar", lat: 32.9595, lng: -117.2653 },
  { name: "Pacific Beach", lat: 32.7952, lng: -117.2524 },
  { name: "Rancho Santa Fe", lat: 33.0233, lng: -117.1937 },
]

export function MapBackground() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    const initMap = () => {
      const L = window.L
      if (!mapRef.current || mapInstanceRef.current) return

      const map = L.map(mapRef.current, {
        center: [32.9, -117.22],
        zoom: 11,
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        attributionControl: false,
      })

      // CartoDB Dark Matter — dark, no API key needed
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map)

      // Glowing red pin
      const redIcon = L.divIcon({
        html: `<div style="width:14px;height:14px;background:#dc2626;border-radius:50%;border:2px solid rgba(255,255,255,0.85);box-shadow:0 0 10px rgba(220,38,38,1),0 0 24px rgba(220,38,38,0.5)"></div>`,
        className: "",
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      })

      pins.forEach(({ lat, lng }) => {
        L.marker([lat, lng], { icon: redIcon }).addTo(map)
      })

      mapInstanceRef.current = map
    }

    // Load Leaflet CSS from CDN
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      document.head.appendChild(link)
    }

    // Load Leaflet JS from CDN
    if (window.L) {
      initMap()
    } else if (!document.querySelector('script[src*="leaflet"]')) {
      const script = document.createElement("script")
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
      script.onload = initMap
      document.head.appendChild(script)
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return <div ref={mapRef} className="absolute inset-0 z-0" />
}
