
const Toggle = (props) => {
  
  const { state, handleClick } = props;
  
  return (
    
    <div>
      <div className="relative inline-block w-12 mr-2 align-middle select-none">
        <input onChange={handleClick} type="checkbox" checked={state} name="darkMode" id="prefix-21" className="absolute bg-white w-6 h-6 rounded-full border-4 cursor-pointer appearance-none outline-none transition-all duration-300 ease-in transform checked:translate-x-full checked:bg-blue-600"/>
        <label htmlFor="prefix-21" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
        </label>
      </div>
        <span className="text-gray-400 font-medium">
          Dark Mode
        </span>
    </div>
  )
};

export default Toggle;