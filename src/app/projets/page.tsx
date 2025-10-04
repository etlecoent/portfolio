type Owner = {
  login: string;
  id: number;
};

type Project = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  owner: Owner;
};

export default async function Projets() {
  const GITHUB_PROFILE = process.env.GITHUB_PROFILE;

  const data = await fetch(
    `https://api.github.com/users/${GITHUB_PROFILE}/starred`
  );
  let projects: Project[] = await data.json();
  projects = projects.filter((p) => p.owner.login === GITHUB_PROFILE);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <a
              href={project.html_url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
