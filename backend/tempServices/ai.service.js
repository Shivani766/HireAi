import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY || process.env.OPENAI_ADMIN_KEY;
const baseURL = process.env.OPENROUTER_BASE_URL || "https://openrouter.ai/api/v1";

let client;
if (apiKey) {
  client = new OpenAI({
    apiKey,
    baseURL,
  });
} else {
  console.warn(
    "Missing OpenAI/OpenRouter API key. Set OPENROUTER_API_KEY or OPENAI_API_KEY in backend/.env."
  );
}

export const generateAIResponse = async (message) => {
  if (!client) {
    console.log("AI client is not configured because the API key is missing.");
    return "AI is not available right now. Please try again later.";
  }

  try {
    const completion = await client.chat.completions.create({
      model: "openrouter/auto",

      messages: [
        {
          role: "system",
          content:
            "You are a smart AI assistant for a Hire AI job portal. Give short, helpful, professional answers in 2-4 lines only.",
        },
        {
          role: "user",
          content: message,
        },
      ],

      max_tokens: 80,
      temperature: 0.7,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.log(
      "OPENROUTER ERROR:",
      error.response?.data || error.message
    );

    return "AI is busy right now. Try again.";
  }
};