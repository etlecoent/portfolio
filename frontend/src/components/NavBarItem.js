import { Link } from "react-router-dom";

export default function NavBarItem(props) {

  const {text, svg, url, handleClick} = props;

  return (
    <Link to={url} className="flex flex-row content-center" onClick={handleClick}>
      <div className="flex flex-row content-center items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
        {svg}
        <span className="pl-2">{text}</span>
      </div>
    </Link>
  )
} 