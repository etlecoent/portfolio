import { useState, useEffect } from "react";
import axios from "axios";

import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";

import Repository from "../components/Repository";

const Projects = (props) => {
  
  const [repos, setRepos] = useState([]);
  const [shownRepos, setShownRepos] = useState(repos);
  const [loading, setLoading] = useState(true);

  const orderRepos = (repos) => {
    return repos
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
  }

  useEffect(() => {
    
    axios.get("https://api.github.com/users/Deteri0n/repos")
      .then(res => {
        const orderedRepos = orderRepos(res.data);
        setRepos(orderedRepos);
        setShownRepos(orderedRepos)
        setLoading(false); 
      })
      .catch(err => console.log(err))
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
    <section className="min-h-screen pt-16 bg-ysosw dark:bg-ysosb shadow text-black dark:text-white">
      <div className="h-full mx-auto py-8 px-8">
        <SearchBar onSearch={searchRepos}/>
        {loading ? <Loading /> :
          <div className="flex items-center justify-between">
            <div className="w-full flex-wrap flex items-center">
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
                />)
              )}
            </div>
          </div>
        }
      </div>
    </section>
  )
};

export default Projects;


