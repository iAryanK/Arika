"use server";

import { Aptitude } from "@/models/aptitude.model";
import { CreateAptitudeValues } from "../validations";

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

const createAptitude = async (values: CreateAptitudeValues, owner: string) => {
  try {
    const data = await Aptitude.create({
      ...values,
      owner,
    });
    console.log("[CREATE_APTITUDE", data);
  } catch (error) {
    console.error("[CREATE_APTITUDE_ERROR]", error);
    return "Failed to create aptitude";
  }
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

export { getAptitudeDataFromGemini, createAptitude, getAptitudeOfTheDay };
