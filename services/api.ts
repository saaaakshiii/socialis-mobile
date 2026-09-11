// const API_BASE_URL = "http://192.168.1.35:8000";

// // Types matching your FastAPI backend

// export type Problem = {
//   id: string;
//   token_number: number;
//   user_id: string;

//   title: string;
//   pd: string;

//   photos: string[];
//   videos: string[];

//   location: string;

//   status:
//     | "NO_BIDDERS"
//     | "ASSIGNED"
//     | "IN_PROGRESS"
//     | "RESOLVED"
//     | "CLOSED";

//   assigned_to: string | null;

//   proposals: Record<string, any>[];

//   date_reported: string;
//   categories: string[];

//   created_at: string;
// };

// export type ProblemListResponse = {
//   total: number;
//   limit: number;
//   offset: number;
//   items: Problem[];
// };


// // ================================
// // GET ALL PROBLEMS
// // ================================

// export async function getProblems(): Promise<ProblemListResponse> {
//   const response = await fetch(`${API_BASE_URL}/problems`);

//   if (!response.ok) {
//     const errorText = await response.text();

//     throw new Error(
//       `Failed to fetch problems: ${response.status} ${errorText}`
//     );
//   }

//   return response.json();
// }

const API_BASE_URL = "http://192.168.1.35:8000";

// Types matching your FastAPI backend

export type Problem = {
  id: string;
  token_number: number;
  user_id: string;

  title: string;
  pd: string;

  photos: string[];
  videos: string[];

  location: string;

  status:
    | "NO_BIDDERS"
    | "ASSIGNED"
    | "IN_PROGRESS"
    | "RESOLVED"
    | "CLOSED";

  assigned_to: string | null;

  proposals: Record<string, any>[];

  date_reported: string;
  categories: string[];

  created_at: string;
};

export type ProblemListResponse = {
  total: number;
  limit: number;
  offset: number;
  items: Problem[];
};


// ================================
// GET ALL PROBLEMS
// ================================

export async function getProblems(): Promise<ProblemListResponse> {
  const response = await fetch(`${API_BASE_URL}/problems`);

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      `Failed to fetch problems: ${response.status} ${errorText}`
    );
  }

  return response.json();
}