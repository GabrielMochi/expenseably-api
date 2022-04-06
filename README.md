<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/GabrielMochi/expenseably-api">
    <img src="https://i.imgur.com/MUmCoKc.png" alt="Logo" width="600" height="120">
  </a>

  <h3 align="center">Expenseably API</h3>

  <p align="center">
    API responsible for handling you expenses and incomes without tears or fears.
    <br />
    This API is consumed by <a href="https://github.com/GabrielMochi/expenseably-app-web">Expenseably App Web</a>.
    <br /><br />
    <a href="https://github.com/GabrielMochi/expenseably-api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://extenseably.com/">View Demo</a>
    ·
    <a href="https://github.com/GabrielMochi/expenseably-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/GabrielMochi/expenseably-api/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#docs">Docs</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Built With

- [Express.js](https://expressjs.com/) _as framework_
- [Mongo DB](https://www.mongodb.com/) _as database_
- [Redis](https://redis.io/) _as session storage_

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- You need to these programs installed before installing the dependencies:
  - Node.js
  - Docker

### Installation

Follow these steps

1. Install packages
   ```sh
   yarn install or npm install
   ```

<!-- USAGE EXAMPLES -->

## Usage

Start the API

```sh
yarn dev or npm run dev
```

Test it

```
curl --request GET 'http://localhost:5000/api/v1/auth'
```

<!-- DOCS -->

## Docs

After running the API, you can see the full documentation accessing: http://localhost:5000/docs

<!-- ROADMAP -->

## Roadmap

- [ ] Adds Jest fot unit tests
- [ ] User CRUD

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

## Contact

<div align="center">
  <img src="https://avatars.githubusercontent.com/u/20032634?v=4" alt="Profile" width="115" height="115">

  <br />

Gabriel Mochi - [Linkedin](https://www.linkedin.com/in/gabriel-mochi/) - gmochi56@icloud.com

</div>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: https://i.imgur.com/BdKPiO4.png
