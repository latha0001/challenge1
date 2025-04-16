/*
  # Initial Schema Setup

  1. New Tables
    - `companies`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `match_score` (integer, not null)
      - `status` (text, default: 'Not Target')
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `companies` table
    - Add policies for authenticated users to:
      - Read all companies
      - Update status of companies
*/

CREATE TABLE companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  match_score integer NOT NULL,
  status text DEFAULT 'Not Target',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Allow authenticated users to read companies"
  ON companies
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update company status"
  ON companies
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert sample data
INSERT INTO companies (name, match_score) VALUES
  ('Tech Corp', 85),
  ('Innovation Labs', 92),
  ('Future Systems', 78),
  ('Data Dynamics', 95),
  ('Cloud Solutions', 88);