import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import GoogleMapReact from "google-map-react";
import { EnvironmentFilled } from "@ant-design/icons";

const AnyReactComponent = (props: any) => <EnvironmentFilled style={{ color: 'red', fontSize: 48 }}/>;

const MapPage = () => {
  const [center, setCenter] = useState({ lat: 13.893995, lng: 100.516286 });
  const [zoom, setZoom] = useState(17);
  return (
    <Layout>
      <div style={{ height: "60vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDdcAIDa-CqF4laCIhthBtKeLe-zmUoc8s" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent {...center} text="My Marker" />
        </GoogleMapReact>
      </div>
    </Layout>
  );
};

export default MapPage;
