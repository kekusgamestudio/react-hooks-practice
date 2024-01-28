import { useEffect, useState } from 'react';

export const Message = () => {

  const [coordenates, setCoordenates] = useState({x: 0, y: 0})

  useEffect(() => {
    //console.log('Message mounted');

    const onMouseMove = ({x = 0, y = 0}) => {
      const coords = {x, y};
      setCoordenates(coords);
    }

    window.addEventListener('mousemove', onMouseMove );
  
    return () => {
      //console.log('Message unmounted');
      window.removeEventListener('mousemove', onMouseMove );
    }
  }, [])
  

  return (
    <>
      <h3>Mi usuario favorito!!</h3>
      {JSON.stringify(coordenates)}
    </>
  )
}
