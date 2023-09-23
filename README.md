# WorldWideCountries

An application for storing and manipulating the countries returned from a third-party API.

## ♦️ Process

1- Project Analysis and task planning:

- Analyze the project and write down the issues/tickets and how the development process will be split.
- Setup an environment for development, testing, and make it production-ready.
- Create the fetch and seeding functionality.
- Create the server and build the API main routes and test them.
- Create the extra route for admins to download the data file.
- Create the project's documentation.

## ♦️ Project Setup

- Start by going to the green `Code` button in the repositories main page and copy the link as shown in the picture below.

![Screenshot from 2023-09-23 17-44-25](https://github.com/moustf/WorldWideCountries/assets/77394697/771f5319-3ba6-4084-9de4-11b7766470f1)

- After that, you can go to your favorite terminal and clone the repository, type: `git clone <link>`.
- Now you can navigate to the project file and start your favorite text editor or you can use the GUI to do this job.

## ♦️ Database Setup

- To start using the MongoDB database, all you need to do is to add a `.env` file to your project, and you need to provide two database connection strings, one for development and the other is for testing environment.
- Development connection string: `DEV_DB_URI=mongodb://localhost:27017/<dev_database_name>`.
- Testing connection string: `DEV_DB_URI=mongodb://localhost:27017/<test_database_name>`.
- Run `yarn` to install the project's packages.
- And finally, run `yarn dbSeed` to seed the database with countries from a third party API.

## ♦️ Start Project

- If you didn't install the project's packages, please run `yarn` to install them.
- To start the development server run `yarn dev`, this will start a hot server that refreshes automatically with every change.
- To start the production server, run `yarn startProduction`. This will start the build process and then start the node server for the application.
