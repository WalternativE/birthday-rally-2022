import './BirthdayRallyMap.scss';

import {
  MapContainer,
  TileLayer,
  useMap,
} from 'react-leaflet';


function BirthdayRallyMap() {
  const minZoom = 11;
  const maxZoom = 15;
  const maxBounds = [
    [48.35118, 16.07147],
    [48.02304, 16.62683]
  ];

  return (
    <div className="App">
      <MapContainer
        bounds={maxBounds}
        maxBounds={maxBounds}
        minZoom={minZoom}
        maxZoom={maxZoom}
        zoom={minZoom}
        scrollWheelZoom={false}
        id='map'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
        <TileLayer
          attribution='Copernicus Sentinel data 2021'
          url='http://localhost:9000/{z}/{y}/{x}.png'></TileLayer>
      </MapContainer>
    </div>
  );
}

export default BirthdayRallyMap;
