// rafce
import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Mapcontent = () => {
  const [position, setPosition] = useState(null);

  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng);
        map.flyTo(e.latlng, 10);
        setPosition(e.latlng);
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };
  return (
    <div className="row">
      <div className="col-md-10">
        <MapContainer
          center={[13, 100]} // กำหนดโลเคชั่น
          zoom={5}
          style={{ height: "100vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[13, 100]}>
            <Popup>555</Popup>
          </Marker>

          <LocationMarker />
        </MapContainer>
      </div>
      <div className="col-md-2">
        From
        <from>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Titile
            </label>
            <input
              name="name"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Detail
            </label>
            <input
              name="detail"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              latitude
            </label>
            <input
              name="lat"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Longitude
            </label>
            <input
              name="lng"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
            />
          </div>
          <button></button>
        </from>
      </div>
    </div>
  );
};

export default Mapcontent;
