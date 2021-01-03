import { PreviousMap } from "postcss";


export default function Tool(props) {
  const { src, alt} = props;

  return (
    <img src={src} alt={alt} className="h-14 px-5 pb-5"/>
  )
}