import { useEffect, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames';

const Repository = (props) => {
  const {
    name,
    description,
    html_url,
    created_at, 
    updated_at,
    language,
    contributors_url
  } = props.data;

  const [nbCommits, setNbCommits] = useState(null);

  const formatedDate = (dateString) => {
    const formatedDate = new Date(dateString);
    return formatedDate.toDateString();
  };

  const tagClassName = classNames({
    "place-self-center text-xs py-1.5 px-4 text-black rounded-2xl": true,
    "bg-yellow-300": language === "JavaScript",
    "bg-red-500": language === "Ruby",
    "bg-yellow-500": language === "HTML",
  });

  useEffect(() => {
    
    axios.get(contributors_url)
      .then(res => {
        const user = res.data.filter((contributor => (contributor.login === "Deteri0n")));
        const nbCommits = user.length ? user[0].contributions : 0;
        setNbCommits(nbCommits);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div className=" h-90 w-80 mx-auto my-5 relative">
        <a href={html_url} className="w-full h-full z-30 cursor-pointer">
          <div className="transition-all fade-in transform hover:scale-110 bg-gray-700 w-full p-4 relative rounded-lg ">
              <p className="text-indigo-500 text-md font-medium">
              </p>
              <div className="flex flex-row justify-between mb-2">
                <div className="text-white text-xl font-medium">
                    {name}
                </div>
                {language && 
                  <div className={tagClassName}>
                    {language}
                  </div>
                }
              </div>
              <p className="text-gray-300 font-light text-md">
                  {description}
              </p>
              <div className="flex justify-end text-gray-300">
                {nbCommits} Commits
              </div>
              <footer className="border-t-2 flex justify-between mt-3 pt-2">
                <div className="text-xs text-gray-300">Updated: {formatedDate(updated_at)}</div>
                <div className="text-xs text-gray-300">Created: {formatedDate(created_at)}</div>
              </footer>
          </div>
        </a>
    </div>

  )
};

export default Repository;