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
import {create} from "../functions/travel"
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Mapcontent = () => {
  const [position, setPosition] = useState(null);
  const [form, setForm] = useState({
    lat: 0,
    lng: 0,
  });

  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        // console.log(e.latlng);
        map.flyTo(e.latlng, 10);
        setPosition(e.latlng);
        setForm({
          ...form,
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        });
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  const handleOnChange = (e) => {
    console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    create(form)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>console.log(err))
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
        <form onSubmit={handleSubmit}>
          {" "}
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              name="name"
              onChange={(e) => handleOnChange(e)}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Detail</label>
            <input
              name="detail"
              onChange={(e) => handleOnChange(e)}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Latitude</label>
            <input
              name="lat"
              value={form.lat}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="latitude"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Longitude</label>
            <input
              name="lng"
              value={form.lng}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="longitude"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Mapcontent;
