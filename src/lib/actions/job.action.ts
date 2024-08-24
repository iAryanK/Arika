"use server";

import { Job } from "@/models/job.model";

let chrome: any = {};
let puppeteer;

if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
  chrome = require("chrome-aws-lambda");
  puppeteer = require("puppeteer-core");
} else {
  puppeteer = require("puppeteer");
}

const url = "https://www.jobsinternshipswale.com/app/#/home";

const scrapeJobs = async () => {
  try {
    let options = {};

    if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
      options = {
        args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
        defaultViewport: chrome.defaultViewport,
        executablePath: await chrome.executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
      };
    }

    const browser = await puppeteer.launch(options);

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
  console.log("[GET ALL JOBS] Getting all jobs");
  try {
    const jobs = await scrapeJobs();
    await Job.create({ jiw: jobs });
    console.log("[GET ALL JOBS] Returning fresh scraped data");
    // @ts-ignore
    return jobs;
  } catch (error) {
    console.error("[GET ALL JOBS ERROR]", error);
    throw new Error("Unable to get jobs right now.");
  }
};

export { getAllJobs };
