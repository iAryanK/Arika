"use server";

import { Job } from "@/models/job.model";
import puppeteer from "puppeteer";
import { Browser } from "puppeteer";

const url = "https://www.jobsinternshipswale.com/app/#/home";

const scrapeJobs = async () => {
  try {
    const browser: Browser = await puppeteer.launch({ headless: true });

    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle0" });

    const data = await page.evaluate(() => {
      const listOfCompanies = document.querySelectorAll(
        "div[class='col-md-4 ng-star-inserted']",
      );
      const companies = Array.from(listOfCompanies).map((company) => {
        const companyName = company
          .querySelector("i[class='bi bi-building']")
          ?.nextSibling?.textContent?.trim();

        const infos = company.querySelector("div[class='col-md-8 vstack']");
        const jobType = infos?.children[1]
          ?.querySelector("strong")
          ?.nextSibling?.textContent?.trim();
        const experience = infos?.children[2]
          ?.querySelector("strong")
          ?.nextSibling?.textContent?.trim();
        const location = infos?.children[3]
          ?.querySelector("strong")
          ?.nextSibling?.textContent?.trim();
        const category = infos?.children[4]
          ?.querySelector("strong")
          ?.nextSibling?.textContent?.trim();

        return {
          companyName,
          jobType,
          experience,
          location,
          category,
        };
      });
      return companies;
    });

    await browser.close();

    return data;
  } catch (error) {
    throw new Error("Unable to get jobs right now.");
  }
};

const getAllJobs = async () => {
  try {
    const data = await Job.find({});
    // if data.updatedAt is within 24 hours, return data else clear database and update  with new scraped data
    // @ts-ignore
    if (data && data.updatedAt > Date.now() - 86400000) {
      console.log("[GET ALL JOBS] Returning data from database");

      return data;
    }

    await Job.deleteMany({});
    const jobs = await scrapeJobs();
    await Job.create({ jiw: jobs });
    console.log("[GET ALL JOBS] Returning fresh scraped data");
    return jobs;
  } catch (error) {
    console.error("[GET ALL JOBS ERROR]", error);
    throw new Error("Unable to get jobs right now.");
  }
};

export { getAllJobs };
