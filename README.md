# React App Language Translator

This is a simple React application that uses the Axios library to make HTTP requests to a language translation API. The application allows users to enter a phrase in a source language and select a target language to translate the phrase into.

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project.
3. Run `npm install` to install the dependencies.
4. Rename `.env.example` file to `.env` and add your API key in the `REACT_APP_TRANSLATE_API_KEY` variable.
5. Run `npm start` to start the application.
6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

1. Enter a phrase in the source language text box.
2. Select the target language from the dropdown menu.
3. Click the "Translate" button.
4. The translated text will be displayed below the source text box.

## Dependencies

This application uses the following dependencies:

- React
- Axios

## API

This application uses the [Google Cloud Translation API](https://cloud.google.com/translate/docs) to translate text. You will need to provide your own API key to use this application.