import { useState, useEffect, useCallback } from "react";
import useDebounce from "../hooks/useDebounce";

export default function SearchBar(props) {

  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);

  const onSearch = useCallback(props.onSearch, [term]);
  
  useEffect(() => {
    onSearch(term);
  }, [term, onSearch])

  return (
    
    <div className=" relative mb-5">
      <input type="text" onChange={ev => setValue(ev.target.value)} value={value} class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Search..."/>
    </div>
  )
};