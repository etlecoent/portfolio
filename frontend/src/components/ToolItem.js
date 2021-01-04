import { useState } from "react";

export default function Tool(props) {
  
  const { src, alt, href} = props;
  
  const [loaded, setLoaded] = useState(false);

  return (
    
    <a href={href}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className="h-14 px-5 pb-5 opacity-80 hover:opacity-100 transition-all transform hover:scale-110"
        style={loaded ? {} : {display: 'none'}}
      />
    </a>
  )
}