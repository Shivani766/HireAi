import { generateAIResponse } from "../services/ai.service.js";

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    const response = await generateAIResponse(message);

    res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "AI Error",
    });
  }
};