# Psychological Testing App

## Development server

Run `ng serve` for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/). The application will automatically reload if you change any of the source files.

## Running the backend server after cloning

If you clone the project instead of using the installer, you will need to manually install MongoDB on your system. After installing MongoDB, you can start the server by running the following command in the console: `npm run server`

For downloading MongoDB, visit the following link:

- [Download MongoDB](https://www.mongodb.com/try/download/community)

## Packaging with Electron

To package the Angular application with Electron, you can use the following commands:

- For Windows: `npm run package:win`
- For Linux: `npm run package:linux`

To package for both Windows and Linux at once: `npm run package:all`

Once the packaging process is complete, you can find the executable files in the `release-builds` directory. This directory contains the packaged applications that you can distribute and run on your systems.

## Windows Installer

For Windows users, there is an installer available that simplifies the setup process. The installer includes the option to install MongoDB.
