import { useState }
from "react";

import {
  getAIInsights
} from "../api/aiApi";

function AIInsights({
  habits
}) {

  const [insight,
    setInsight] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  async function generateInsight(){

    try {

      setLoading(true);

      const data =
        await getAIInsights(
          habits
        );

      setInsight(
        data.insight
      );

    } catch(error){

      console.log(error);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="ai-card">

      <h2>🧠 Weekly AI Report</h2>

      <button
        type="button"
        className="btn btn-primary"
        onClick={generateInsight}
        disabled={loading}
      >
        Generate Report
      </button>

      {loading && <p>Thinking...</p>}

      {insight && (
        <div className="ai-response">
          <p>{insight}</p>
        </div>
      )}

    </div>

  );

}

export default AIInsights;