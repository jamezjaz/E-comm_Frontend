<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jamezjaz/Robot_Market">
    <img src="../junior-react-frontend/src/assets/icons/logo.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Robots Markets</h3>

  <p align="center">
    This is the front-end repository of the Junior React Developer Position Test. It's an e-commerce application.
    <br />
    <a href="https://github.com/jamezjaz/Robot_Market"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jamezjaz/Robot_Market/issues">Report Bug</a>
    ·
    <a href="https://github.com/jamezjaz/Robot_Market/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table Of Contents

* [About The Project](#about-the-project)
* [Preview](#preview)
* [Live Link](#live-link)
* [Built With](#built-with)
* [Getting Started](#getting-started)
* [Author](#author)
* [Acknowledgements](#acknowledgements)
* [License](#license)

<!-- ABOUT THE PROJECT -->
## About The Project
  It's an e-commerce front-end application built with React, Redux, and Styled Components. It has product listing page - PLP, product description page -PDP, cart page, and cart overlay.

  A user can can hover over specific products to see the attributes (options) of the those products if such products have options. He/she can add products to cart either from the PLP page using the cart icon or from the PDP page using Add To Cart button. He/she can increment/decrement the quantity of the added products. He/she can also remove specific products from cart entirely using the remove button.

  A user can filter products based on their categories such as tech, clothes. All category render the entire products on the PLP page.

  A user can also exchange currencies using the currency exchanger on the header. Again, the cart icon on the header keeps count of the number of products added to cart.

  This project consumes a third party GraphQL API.

## Preview
![preview](https://user-images.githubusercontent.com/57812000/156348166-65470deb-b3bc-4e8c-87f7-eee0a6981c32.png)

## Live Link
Please, run the the server locally [here](https://github.com/scandiweb/junior-react-endpoint)
The frontend is deployed on [Vercel](https://james-odufu-junior-react-frontend.vercel.app/) and [Netlify](https://james-odufu-entry-react-test.netlify.app/)

### Built With
This project was built using these technologies.
* Create-React-App
* React
* Redux
* JavaScript
* GraphQL API
* Axios
* React-DOM
* Redux-thunk
* ES6
* Styled Components
* Redux Persist
* HTML React Parser

### Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

 * [Node.js](https://nodejs.org/) is required to install dependencies and run scripts via npm.
 * A modern browser

## Client
### Clone
* Clone this repo:
  - Clone with SSH:
  ```
    git@github.com:jamezjaz/junior-react-frontend.git
  ```
  - Clone with HTTPS
  ```
    https://github.com/jamezjaz/junior-react-frontend.git
  ```
  - Clone with GitHub CLI
  ```
    gh repo clone jamezjaz/junior-react-frontend
    
 - cd to junior-react-frontend

### Setup
To install dependencies:

Run ```$ npm install```

To start the local webserver and have the application run live on http://localhost:3000/:

Run ```$ npm start```

## Server
### Clone
* Clone this repo:
  - Clone with SSH:
  ```
    git@github.com:scandiweb/junior-react-endpoint.git
  ```
  - Clone with HTTPS
  ```
    https://github.com/scandiweb/junior-react-endpoint.git
  ```
    
 - cd to junior-react-endpoint
 
### Setup
Run ```$ yarn build``` to install the dependencies

Run ```$ npm start``` to start the server on http://localhost:4000/


<!-- CONTACT -->
## Author

## 👤 Odufu James Chigozie

 [![Website](https://img.shields.io/badge/-Website-black?style=for-the-badge&logo=Julia&logoColor=white)](http://jamezjaz.com/)
 [![LINKEDIN](https://img.shields.io/badge/-LINKEDIN-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/jamesgozieodufu/)
 [![EMAIL](https://img.shields.io/badge/-EMAIL-D14836?style=for-the-badge&logo=Mail.Ru&logoColor=white)](mailto:jamezjaz@gmail.com)
 [![TWITTER](https://img.shields.io/badge/-TWITTER-1DA1F2?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/jamezjaz90)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/jamezjaz/junior-react-frontend/issues).

## Show your support

Give a ✯ if you like this project!


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* I acknowledge [Scandiweb](https://scandiweb.com//) for the opportunity to work on this project.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jamezjaz/junior-react-frontend.svg?style=flat-square
[contributors-url]: https://github.com/jamezjaz/junior-react-frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jamezjaz/junior-react-frontend.svg?style=flat-square
[forks-url]: https://github.com/jamezjaz/junior-react-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/jamezjaz/junior-react-frontend.svg?style=flat-square
[stars-url]: https://github.com/jamezjaz/junior-react-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/jamezjaz/junior-react-frontend.svg?style=flat-square
[issues-url]: https://github.com/jamezjaz/junior-react-frontend/issues

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
