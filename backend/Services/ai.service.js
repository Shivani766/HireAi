import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export const generateAIResponse = async (message) => {
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