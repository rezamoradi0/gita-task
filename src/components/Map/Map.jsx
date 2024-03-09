import NeshanMap from "@neshan-maps-platform/react-openlayers";
import Button from "../Button/Button";
import { useState } from "react";

function Map({
  position = { latitude: 35.69672648316882, longitude: 51.36281969540723 },
}) {
  const [reset, setReset] = useState(false);
  const [zoom, setZoom] = useState(16);
  const maxZoom=18;
  const minZoom=10;
 
  function zoomHandler(positive) {
 
    console.log(zoom>minZoom)
    console.log(positive)
    if(positive>0&&zoom<maxZoom){
  
        setZoom(zoom=>zoom+1)
        setReset(!reset);
    }else if(positive<0&&zoom>minZoom){
      
        setZoom(zoom=>zoom-1)
        setReset(!reset);
    }
   
   
  }
  return (
    <div className="relative flex overflow-hidden rounded-3xl">
      {
        <NeshanMap
          key={reset}
          style={{ height: "350px", width: "100%" }}
          center={position}
          zoom={zoom}
          mapKey="web.1aa916e53ac64d718fd58457067cfa38"
        ></NeshanMap>
      }
      <span className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-full">
        <i className="fa-solid fa-location-dot text-5xl text-rose-700"></i>
      </span>
      {/* <div className="absolute h-full w-full"></div> */}
      <div className="absolute left-2 top-2 flex flex-col items-start gap-2">
        <Button
          onClick={() => {
            setReset(!reset);
          }}
          text="بازگشت به مرکز"
        />
        <Button
       className={`${zoom==maxZoom?"opacity-80":""} w-12`}
          onClick={() => {
            zoomHandler(+1);
          }}
          text="+"
        />
        <Button
          className={`${zoom==minZoom?"opacity-80":""} w-12`}
          onClick={() => {
            zoomHandler(-1);
          }}
          text="-"
        />
      </div>
    </div>
  );
}

export default Map;
