# Psychological Testing App

## Development server

Run `ng serve` for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/). The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Packaging with Electron

To package the Angular application with Electron, you can use the following commands:

- For Windows: `npm run package:win`
- For Linux: `npm run package:linux`

To package for both Windows and Linux at once: `npm run package:all`

Once the packaging process is complete, you can find the executable files in the `release-builds` directory. This directory contains the packaged applications that you can distribute and run on your systems.

## Windows Installer

For Windows users, there is an installer available that simplifies the setup process. The installer includes options to install the necessary dependencies, such as Node.js and MongoDB.

## Running the Server After Cloning

If you clone the project instead of using the installer, you will need to manually install Node.js and MongoDB on your system. After installing these dependencies, you can start the server by running the following command in the console: `npm run server`

For downloading the necessary dependencies, visit the following links:

- [Download Node.js](https://nodejs.org/en/download/)
- [Download MongoDB](https://www.mongodb.com/try/download/community)
