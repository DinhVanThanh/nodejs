import useSWR from "swr";

export default async function getQuiz() {
  const response = await axios.get("http://localhost:8000/users");

  // Parse and process the response data as needed
  return response.data;
}
