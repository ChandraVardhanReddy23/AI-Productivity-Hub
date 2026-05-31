export async function getAIInsights(
  habits
){

  const response =
    await fetch(
      "http://localhost:3000/ai/insights",
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