import {
  Map,
  MapFullscreenControl,
  MapLocateControl,
  MapMarker,
  MapPopup,
  MapSearchControl,
  MapTileLayer,
  MapTooltip,
  MapZoomControl,
  MapLayerGroup,
  MapLayers,
  MapLayersControl,
} from "@/components/ui/map";
import type { LatLngExpression } from "leaflet";
import { useState, useEffect } from "react";
import { useMap } from "react-leaflet";
import { MapPinIcon } from "lucide-react";
import { changeColorOfIcon, QURAN_EVENTS, type BaseEvent, type QuranGroup } from "./data";
export function Globe() {


  return (
    <div className="relative rounded-xl mt-8">
      <Map
        center={QURAN_EVENTS[0].events[0].coordinates}
        zoom={3}
        className="!bg-slate-900"
      >
        <MapTileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <MapLayers defaultLayerGroups={QURAN_EVENTS.map((group) => group.type)}>
          <MapLayersControl
            position="top-1 right-1"
            layerGroupsLabel="Katmanlar"
          />
          {QURAN_EVENTS.map((group: QuranGroup) => (
            <MapLayerGroup key={group.type} name={group.type}>
              {group.events.map((event: BaseEvent) => (
                <MapMarker
                  key={event.id}
                  position={event.coordinates}
                  icon={
                    <div className={`${changeColorOfIcon(group.type)}`}>
                      <MapPinIcon className="size-5" />
                    </div>
                  }
                >
                  <MapTooltip
                    side="top"
                    className="bg-amber-500 font-bold border-none text-slate-950"
                  >
                    {event.name}
                  </MapTooltip>
                  <MapPopup className="border-amber-500/50">
                    <div className="space-y-1">
                      <h3 className="font-bold text-amber-500 text-lg">
                        {event.name}
                      </h3>
                      {event.surah && (
                        <p className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                          <span className="text-amber-500/80">📖</span>{" "}
                          {event.surah} {event.ayah}
                        </p>
                      )}
                      {event.description && (
                        <p className="text-sm mt-2 leading-relaxed italic border-t border-amber-500/10 pt-1">
                          {event.description}
                        </p>
                      )}
                    </div>
                  </MapPopup>
                </MapMarker>
              ))}
            </MapLayerGroup>
          ))}
        </MapLayers>

        {/* <MapFullscreenControl /> */}
        <MapZoomControl position="left-1 bottom-1" />
        <MapLocateControl />
        <MapSearchControl />
        <MapSearchControlWrapper />
        <MapFullscreenControl position="right-1 top-12" />
      </Map>
    </div>
  );
}

function MapSearchControlWrapper() {
  const map = useMap();
  const [selectedPosition, setSelectedPosition] =
    useState<LatLngExpression | null>(null);
  useEffect(() => {
    if (!selectedPosition) return;
    map.panTo(selectedPosition);
  }, [selectedPosition]);
  return (
    <>
      <MapSearchControl
        onPlaceSelect={(feature) =>
          setSelectedPosition(
            feature.geometry.coordinates.toReversed() as LatLngExpression,
          )
        }
      />
      {selectedPosition && (
        <MapMarker position={selectedPosition} icon={<MapPinIcon />} />
      )}
    </>
  );
}
