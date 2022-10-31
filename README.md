# Covid-19Tracker

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)


Real-time COVID-19 data updates for every country in the world, tracking cases, deaths, recoveries. React allowed us to implement the requirements quickly and to keep the code maintainable. We were able to use React hooks and context to allow all the components to interface and share the same data.

![Covid19-Tracker](https://github.com/erinz2020/pictures/blob/main/1.png)


## Product Overview
Provides a comprehensive look of covid-19 cases all over the workd. Displays a main map along with its accompanied infoBox that will show the distribution of the pandemic on the world map. Clicking on the infoBox will show variants along with with the images, sizes, and product availability. By changing countries, the specific cases of this country will show on infoBox and map. 


## Map component
Related product widgets consist of two parts. One is the Related products which are related to the item displayed by overview component and it changes accordingly. Having carousel of cards let users navigate between the card. And, upon clicking on a star button a modal would pop up which compares the feature between the related card and the product item. Once a card clicked, it would change the overview item as well. The second part is the outfit section, which is unique to each user. It gives the user the ability to save the current product item and navigating through them.


## InfoBox Component
The infoBox component consists of three parts which provid the user with the active, recovered and death cases for a selected country. On page load, the widget will request data from the API and dynamically render the correct questions in order of helpfulness rating. Additional functionality includes a search bar to filter the displayed questions, options to post questions and answers to the API and buttons to rate questions as helpful or report report them for internal review.

## Table component
This table component shows countries around the world ranked from highest to lowest number of outbreaks.

![Covid19-Tracker](https://github.com/erinz2020/pictures/blob/main/2.png)

## LineGraph component
The LineGraph component visually shows the trend of the epidemic over several months.

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run using nodemon:

```sh
npm start
```

To create a production build and watch for changes:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

Open the file `dist/index.html` in your browser

## Testing

To run unit tests:

```sh
npm test
```
