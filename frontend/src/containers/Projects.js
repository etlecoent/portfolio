import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "../components/Loading";
import Repository from "../components/Repository";


const Projects = (props) => {
  
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://api.github.com/users/Deteri0n/repos")
      .then(res => {
        setRepos(res.data);
        setLoading(false); 
      })
      .catch(err => console.log(err))
  }, []);

  const formatRepos = () => {
    return repos
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
  }

  return (
    <section className="h-full bg-ysosw dark:bg-ysosb shadow text-black dark:text-white">
      {loading ? <Loading /> :
        <div className="mx-auto py-8 px-8">
          <div className="flex items-center justify-between">
            <div className="w-full flex-wrap flex items-center">
              {formatRepos().map((repo, index) => (<Repository key={index} data={repo}/>))
              }
            </div>
          </div>
        </div>
      }
    </section>
  )
};

export default Projects;


