
const Repository = (props) => {
  const {
    name,
    description,
    html_url,
    created_at
  } = props.data;

  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-80 cursor-pointer mx-auto my-5 relative">
        <a href={html_url} className="w-full h-full z-30">
          <div className="bg-gray-800 w-full p-4 relative">
              <p className="text-indigo-500 text-md font-medium">
              </p>
              <p className="text-white text-xl font-medium mb-2">
                  {name}
              </p>
              <p className="text-gray-300 font-light text-md">
                  {description}
              </p>
              <footer className="mt-5 ">
                <span className="text-xs text-gray-300">{Date(created_at)}</span>
              </footer>
          </div>
        </a>
    </div>

  )
};

export default Repository;