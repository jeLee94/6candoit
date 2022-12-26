import React, { useEffect } from 'react';
const { kakao } = window;

const MapContainer = ({ searchPlace }) => {
  useEffect(() => {
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  });
  return (
    <div
      id='myMap'
      style={{
        width: '100%',
        height: '100%',
      }}
    ></div>
  );
};
export default MapContainer;
