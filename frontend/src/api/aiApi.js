import.meta.env.VITE_API_URL
const API_URL = `${import.meta.env.VITE_API_URL}/ai/insights`;

export async function getAIInsights(
  habits
){

  const response =
    await fetch(
      API_URL,
      {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          habits
        })

      }
    );

  return response.json();

}