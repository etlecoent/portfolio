import { useState, useEffect } from "react";
import axios from "axios";

const Projects = (props) => {
  
  const [respos, setRepos] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users/Deteri0n/repos")
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [respos]);

  return (
    <section>
    </section>
  )
};

export default Projects;


