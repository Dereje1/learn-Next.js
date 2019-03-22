# nextjs-challenge
You are responsible for writing a node app using nextjs. Your app will consist of two pages (a form, and a feed), and a server that reads and writes to the feed.

Challenge: Create a new Github project with NextJS and React that meets the following criteria:
1. Starts with the command `npm i && npm run dev` <sup>1</sup> :heavy_check_mark:
2. Shows a form with “name” and “message” when it runs at localhost:3000 :heavy_check_mark:
3. When submitting form, runs a `POST` to `/api/guestbook` and resets with a success message (should show an error if things are missing). :heavy_check_mark:
4. A link on the homepage takes you to `/guestbook` and shows all posts that have been submitted from the previous form. <sup>2</sup> :heavy_check_mark:
  - A link on that page exists to go back to the homepage :heavy_check_mark:
  - You do not need to persist that data in any database, just keep it in memory. :heavy_check_mark:

##### BONUS

Feel free to add the following
1. Add some UI/UX features :heavy_check_mark:
2. Unit tests (coverage) <sup>3</sup> :x:
3. Code linting :heavy_check_mark:

---
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

| Prerequisite                                | Version |
| ------------------------------------------- | ------- |
| [Node.js](http://nodejs.org) /  npm (comes with Node)  | `~ 11.9.0` / `~ 6.5.0` |
| [Git](https://git-scm.com/downloads) | `~ 2.17.1` |

### Installing

```
$ git clone https://github.com/Dereje1/learn-Next.js.git

$ cd learn-Next.js

$ npm i && npm run dev
```

### Linting
```
$ npm run lint
```

Notes
1. Changed from `npm i && npm dev` to `npm i && npm run dev`, assuming it was a typo.
2. Instead of separate links in each component, I persisted a nav bar that contains both links.
3. I'm green on testing but currently learning.