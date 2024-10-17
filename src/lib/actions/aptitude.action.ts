"use server";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const getAptitudeDataFromGemini = async (
  subject: string,
  numberOfQuestions: number = 15,
) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
  Generate ${numberOfQuestions} aptitude questions for ${subject} in the following format:
  {
    "question": ,
    "options": [],
    "answer": ,
    "companiesAsked": [],
    "explanation":
  }
  Return the reponse in JSON format only.
  `;

  const result = await model.generateContent(prompt);
  const data = await result.response.text().trim().slice(7, -3);
  const jsonData = await JSON.parse(data);
  return jsonData;
};

const getAptitudeOfTheDay = async () => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
  Generate a tough level aptitude question of logical reasoning in the following format:
  {
    "question": ,
    "options": [],
    "answer": ,
    "companiesAsked": [],
    "explanation":
  }
  Return the reponse in JSON format only.
  `;

  const result = await model.generateContent(prompt);
  const data = await result.response.text().trim().slice(7, -3);
  const jsonData = await JSON.parse(data);

  return jsonData;
};

export { getAptitudeDataFromGemini, getAptitudeOfTheDay };
