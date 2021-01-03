import { useState } from "react";

export default function Tool(props) {
  
  const { src, alt} = props;
  
  const [loaded, setLoaded] = useState(false);

  return (
    <>
    
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className="transition-all fade-in h-14 px-5 pb-5"
        style={loaded ? {} : {display: 'none'}}
      />
    
    </>
  )
}