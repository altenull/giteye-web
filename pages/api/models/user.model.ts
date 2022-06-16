export interface SearchUser {
  id: number;
  login: string;
  avatar_url: string;
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  followers_total: number;
  following_total: number;
  created_at: string;
  name?: string;
  company?: string;
  location?: string;
  email?: string;
  bio?: string;
}
