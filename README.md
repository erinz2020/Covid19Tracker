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
This product displays the Covid-19 pandemic situation in various countries around the world in real time. There are 3 Infoboxes and a map on the left side of the page. By selecting a country from the drop-down menu, the infoBoxes and the map can display the distribution of the Covid-19 cases and the specific cases of each country.


## InfoBox and Map components
The infoBoxes component can display the active cases, recovered cases and deaths in that country using numeral to format the numbers. The map can also display the distribution of the epidemic around the world, with red circles showing the corresponding current active cases, green circles showing the number of recovered cases, and yellow circles showing the number of dead cases. we can change the type of displayed data by clicking on the infobox.


## Table component
This table component shows countries around the world ranked from highest to lowest number of outbreaks. In css implemented n:th of child to display adjacent rows in different colors for convinience.

![Covid19-Tracker](https://github.com/erinz2020/pictures/blob/main/2.png)

## LineGraph component
The LineGraph component visually shows the trend of the epidemic over several months. Clicking on the infoboxes on the left will also cause the graph to display the corresponding data.

## Building and running on localhost

"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

First install dependencies:

```sh
npm install
```
