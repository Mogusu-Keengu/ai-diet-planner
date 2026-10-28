import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY,
});

const AIMODELNAME = "openai/gpt-4o-mini";

export const CalculateCaloriesAI = async (PROMPT) => {
  return await openai.chat.completions.create({
    model: AIMODELNAME,
    messages: [{ role: "user", content: PROMPT }],
  });
};

export const GenerateAIRecipe = async (PROMPT) => {
  console.log("AiModel running, model:", AIMODELNAME);
  return await openai.chat.completions.create({
    model: AIMODELNAME,
    messages: [{ role: "user", content: PROMPT }],
  });
};
