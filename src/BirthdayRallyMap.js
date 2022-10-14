import './BirthdayRallyMap.scss';

import {
  useState,
  useMemo,
} from 'react';

import {
  MapContainer,
  TileLayer,
  Rectangle,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from 'react-leaflet';

import L from 'leaflet';

const firstZoomBox = [
  [48.26781, 16.33423],
  [48.16857, 16.46921],
];

const secondZoomBox = [
  [48.225725, 16.392390],
  [48.180658, 16.448562],
];

const thirdZoomBox = [
  [48.212414, 16.411944],
  [48.201395, 16.430492],
];

const zoomBoxColor = { color: 'red' };

const markerPosition = [48.2059293, 16.4197211];

const icon = L.icon({ iconUrl: `${process.env.PUBLIC_URL}/images/marker-icon.png`});

function ZoomBoxRectangles({ initialZoom }) {
  const [zoom, setZoom] = useState(initialZoom);
  const map = useMap();

  useMapEvent('zoom', () => {
    setZoom(map.getZoom());
  });

  const firstZoomHandler = useMemo(
    () => ({
      click() {
        map.fitBounds(firstZoomBox);
      }
    }),
    [map],
  );

  const secondZoomHandler = useMemo(
    () => ({
      click() {
        map.fitBounds(secondZoomBox);
      }
    }),
    [map],
  );

  const zoomBox = zoom < 12
    ? <Rectangle bounds={firstZoomBox} eventHandlers={firstZoomHandler} pathOptions={zoomBoxColor} />
    : zoom > 11 && zoom < 14
    ? <Rectangle bounds={secondZoomBox} eventHandlers={secondZoomHandler} pathOptions={zoomBoxColor} />
    : <Rectangle bounds={thirdZoomBox} pathOptions={zoomBoxColor} />;

  const marker =
    <Marker position={markerPosition} icon={icon}>
      <Popup>This is the place!</Popup>
    </Marker>

  return (
    <>
      {zoomBox ?? zoomBox}
      {zoom > 14 && marker}
    </>
  );
}

function BirthdayRallyMap() {
  const minZoom = 11;
  const maxZoom = 15;
  const maxBounds = [
    [48.35118, 16.07147],
    [48.02304, 16.62683]
  ];

  return (
    <div className="App h-full w-full">
      <MapContainer
        bounds={maxBounds}
        maxBounds={maxBounds}
        minZoom={minZoom}
        maxZoom={maxZoom}
        zoom={minZoom}
        scrollWheelZoom={false}
        className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
        <TileLayer
          attribution='Copernicus Sentinel data 2021'
          url={`${process.env.PUBLIC_URL}/tile_directory/{z}/{y}/{x}.png`}></TileLayer>
        <ZoomBoxRectangles initialZoom={minZoom} />
      </MapContainer>
    </div>
  );
}

export default BirthdayRallyMap;
