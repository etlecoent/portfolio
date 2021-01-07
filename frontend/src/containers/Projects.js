import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";

import Repository from "../components/Repository";
import Error from "../components/Error";

import lfgameImg from "../images/repos/caleb-woods-fpmV3dQPUvU-unsplash.jpg";
import portfolioImg from "../images/repos/nordwood-themes-ubIWo074QlU-unsplash.jpg";
import tweeterImg from "../images/repos/brett-jordan-ulRlAm1ITMU-unsplash.jpg";
import schedulterImg from "../images/repos/eric-rothermel-FoKO4DpXamQ-unsplash.jpg";
import myMapsImg from "../images/repos/t-h-chia-tVZMk-cidEc-unsplash.jpg";

const Projects = (props) => {
  
  const images = {
    lfgame: lfgameImg,
    portfolio: portfolioImg,
    tweeter: tweeterImg,
    scheduler: schedulterImg,
    'My-Maps': myMapsImg
  };

  const [repos, setRepos] = useState([]);
  const [shownRepos, setShownRepos] = useState(repos);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const orderRepos = (repos) => {
    return repos
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
  }


  useEffect(() => {
    
    axios.get("https://api.github.com/users/Deteri0n/starred")
      .then(res => {
        const orderedRepos = orderRepos(res.data);
        setRepos(orderedRepos);
        setShownRepos(orderedRepos)
        setIsLoading(false); 
      })
      .catch(err => {
        console.log(err);
        setIsLoading(null);
        setIsError(true);
      })
  }, []);

  
  const searchRepos = (term) => {
    
    if (term === "") {
      setShownRepos(repos);
    } else {
      const filteredRepos = repos.filter(repo => repo.name.toLowerCase().includes(term.toLowerCase()))
      setShownRepos(filteredRepos);
    }
  }

  return (
    <section className="min-h-screen pt-16 bg-ysosw dark:bg-ysosb text-black dark:text-white">
      <div className="container h-full mx-auto py-8 px-8">
        {isError ? <Error message={"Oops, something went wrong"}/> :
          <>
            <SearchBar onSearch={searchRepos}/>
            {isLoading ? <Loading /> :
              <div className="flex w-full flex-wrap items-center justify-evenly">
                {shownRepos.map((repo, index) => (
                  <Repository 
                    key={index} 
                    name = {repo.name}
                    description = {repo.description}
                    html_url = {repo.html_url}
                    created_at = {repo.created_at} 
                    updated_at = {repo.updated_at}
                    language = {repo.language}
                    contributors_url = {repo.contributors_url}
                    image={images[repo.name]}
                  />)
                )}
              </div>
            }
          </>
        }
      </div>
    </section>
  )
};

export default Projects;


