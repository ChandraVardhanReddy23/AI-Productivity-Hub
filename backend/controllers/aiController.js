const Groq =
  require("groq-sdk");

const groq =
  new Groq({
    apiKey:
      process.env.GROQ_API_KEY
  });

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
          "llama-3.3-70b-versatile",

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