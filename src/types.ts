export interface Company {
  id: string;
  name: string;
  match_score: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}