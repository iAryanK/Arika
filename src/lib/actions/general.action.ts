"use server";

import { Potd } from "@/models/potd.model";
import { getAptitudeOfTheDay } from "./aptitude.action";
import { getCodeOfTheDay } from "./code.action";

const getPotd = async () => {
  try {
    const potdData = await Potd.find({});

    if (potdData.length === 0) {
      const aptitudeData = await getAptitudeOfTheDay();
      const codeData = await getCodeOfTheDay();

      const potd = await Potd.create({
        aptitude: {
          question: aptitudeData.question,
          options: aptitudeData.options,
          answer: aptitudeData.answer,
          explanation: aptitudeData.explanation,
          companiesAsked: aptitudeData.companiesAsked,
        },
        code: {
          title: codeData.title,
          question: codeData.question,
          difficulty: codeData.difficulty,
          date: codeData.date,
          link: codeData.link,
        },
      });

      return potd[0];
    }
    /*
    if (potdData.length > 0 && potdData[0].createdAt < Date.now() - 6000) {
      console.log(
        "GETPOTD",
        "fetching new potd",
        potdData[0].createdAt,
        Date.now() - 6000,
      );
      const aptitudeData = await getAptitudeOfTheDay();
      const codeData = await getCodeOfTheDay();

      const potd = {
        aptitude: aptitudeData,
        code: codeData,
      };

      await Potd.findOneAndUpdate({}, potd);
      return JSON.stringify(potd);
    }
    */

    return JSON.stringify(potdData[0]);
  } catch (error) {
    console.log("GETPOTD_ERROR", error);
  }
};

export { getPotd };
