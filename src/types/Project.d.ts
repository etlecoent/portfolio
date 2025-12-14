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

export type { Project, Owner };
