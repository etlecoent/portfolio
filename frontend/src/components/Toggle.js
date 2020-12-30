
const Toggle = (props) => {
  
  const { state, handleClick } = props;
  
  return (
    
    <div>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input onChange={handleClick} type="checkbox" checked={state} name="darkMode" id="prefix-21" className="checked:right-0 checked:bg-blue-600 absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
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