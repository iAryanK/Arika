# Welcome to Arika repository

## Journey of creating the project

1. Initial setup: Initialized the next JS app with shadcn UI and enabled theme toggle using next-themes

2. Configure eslint and prettier: For better codebase

3. Create auth system: Used Auth.js to enable authentication system. Structured to codebase using "route groups". Added nextjs-toploader.

4. Create home dashboard: Created home layout. Fixed auth UIs.

5. Update user model: Updated User model in db by adding username field. Fixed UIs.

6. Update google auth: Updated google auth to take email as the default username when the user signs in for the first time. Created alert dialog for logout. Other UI fixes.

7. Create dynamic profile route: For every user, his/her personalized profile route created. Other minor changes.

8. Create user profile: After some bug fixes, protected user profile is created. Code Modal created in db to store data of coding websites of the user. Leetcode api integrated. CreateLeetCodeData backend implemented. Edit profile Modal UI created. OAuth signIn creates unique username using the mailId itself.

9. function edit profile: Edit profile button is now functional. User can update their profile. Response toast also integrated.

10. fix in edit profile: Bugs fixed in edit profile. Uniqueness check for Username and email. User and Code model schema modified. Other UI changes.

11. add leetcode detail: Added leetcode details in profile page. Code model schema modified.

12. Create community page: Created the community page. Used UserDetails component from profile page to display quick profile view in community page, when clicked on any user.

13. Enable PWA: Arika enabled as PWA. 'next.config.mjs' converted to 'next.config.js'.

14. Create jobs page: Scraped data from jobs website and stored into the database. The database updates every 24 hours only if a new request comes. In this way, I overcame the use of cron jobs.

15. Fix job page in production: Puppeteer doesn't work on vercel in production, so trying chrome-aws-lambda with puppeteer. Added loading-provider for entire website.

16. Create homepage: Arika homepage created. Jobs page temporarily removed as puppetter doesn't work on vercel hobby plan. Other fixes.

17. Create AI based aptitude: Implemented dynamic route for AI based aptitude of different subjects.

18. Create Aptitude result page: Shows result of AI based aptitude.

19. Create Aptitude page: Leaderboard UI also integrated.

20. Modify auth UI: Implemented a cleaner auth UI. Used motion-primitives component. Other UI fixes.
