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
    contributors_url,
    image
  } = props;

  const [nbCommits, setNbCommits] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
    <div className="h-90 w-80 mx-10 my-10 relative rounded-lg cursor-pointer transition-all fade-in transform hover:scale-105">
        <a href={html_url} target="_blanck" rel="noopener noreferrer" className="absolute w-full h-full z-30">
        </a>
        <img 
          alt={name} 
          src={image}
          style={{opacity: isLoaded ? 1 : 0}}
          onLoad={() => setIsLoaded(true)} 
          className="object-cover rounded-t-lg max-h-32 w-full -mb-1"
        />
        <div className=" bg-gray-700 w-full p-4 relative rounded-b-lg">
            <div className="flex flex-row justify-between mb-2">
              <div className="text-white text-xl font-bold">
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
            <div className="flex justify-end text-gray-300 mt-2 font-medium">
              {nbCommits} Commits
            </div>
            <footer className="border-t-2 flex justify-between mt-3 pt-2">
              <div className="text-xs text-gray-300">Updated: {formatedDate(updated_at)}</div>
              <div className="text-xs text-gray-300">Created: {formatedDate(created_at)}</div>
            </footer>
        </div>
    </div>

  )
};

export default Repository;