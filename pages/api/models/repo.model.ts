export interface Repo {
  id: number;
  node_id: string;
  name: string; // e.g. "Hello-World"
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  topics: string[]; // e.g. ["octocat", "atom", "electron", "api"]
  size: number;
  archived: boolean;
  fork: boolean;
  pushed_at: string; // e.g. "2011-01-26T19:06:43Z"
  created_at: string; // e.g. "2011-01-26T19:01:12Z"
  updated_at: string; // e.g. "2011-01-26T19:14:43Z"
  description?: string;
  homepage?: string;
  language?: string;
}
