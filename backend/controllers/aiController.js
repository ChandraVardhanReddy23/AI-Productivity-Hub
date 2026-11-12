const Groq =
  require("groq-sdk");

const groq =
  new Groq({
    apiKey:
      process.env.GROQ_API_KEY
  });

const FALLBACK_MODEL =
  "llama-3.1-70b-versatile";

async function getGroqModel() {

  try {

    const response =
      await fetch(
        "https://api.groq.com/openai/v1/models",
        {
          headers: {
            Authorization:
              `Bearer ${process.env.GROQ_API_KEY}`
          }
        }
      );

    if (!response.ok) {

      throw new Error(
        `Groq model request failed with status ${response.status}`
      );

    }

    const { data } =
      await response.json();

    const activeLlamaModel =
      Array.isArray(data)
        ? data.find(
          (model) =>
            model.active === true &&
            typeof model.id === "string" &&
            (model.id.includes("llama-3") ||
              model.id.includes("llama3"))
        )
        : undefined;

    return activeLlamaModel?.id ||
      FALLBACK_MODEL;

  } catch (error) {

    console.error(
      "Unable to retrieve active Groq models. Using fallback model.",
      error
    );

    return FALLBACK_MODEL;

  }
}

const generateInsights =
  async (req, res) => {

    const { habits } =
      req.body;

    const prompt = `
    You are a productivity coach.
    Analyze these habits:

    ${JSON.stringify(habits)}

    Provide:
    1.weekly summary
    2.strongest habit
    3.weakest habit
    4.strongest category
    5.one actionable recommendation

    Keep it conise and encouraging.
    Format the response exactly like:

        📅 Weekly Summary
        ...

        🏆 Strongest Habit
        ...

        ⚠️ Weakest Habit
        ...

        📊 Strongest Category
        ...

        💡 Recommendation
        ...
    `;

    const completion =
      await groq.chat.completions.create({

        model:
          await getGroqModel(),

        messages: [
          {
            role: "user",
            content: prompt
          }
        ]

      });

    res.json({
      insight:
        completion.choices[0]
          .message.content
    });

};

module.exports = {
  generateInsights
};