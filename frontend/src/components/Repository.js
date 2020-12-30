
const Repository = (props) => {
  const {
    name,
    description,
    html_url
  } = props.data;

  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-80 cursor-pointer mx-auto my-1 relative">
        <a href={html_url} className="absolute w-full h-full z-30" />
        
        <div className="bg-white dark:bg-gray-800 w-full p-4 relative">
            <p className="text-indigo-500 text-md font-medium">
            </p>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                {name}
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                {description}
            </p>
        </div>
    </div>

  )
};

export default Repository;