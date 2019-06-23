# Solution of test job for Travelpayouts Frontend developer

Test: [SPA (ReactJS)](https://github.com/KosyanMedia/Front-end_TP_test)

Demo: [https://dozalex.github.io/Travelpayouts_test/](https://dozalex.github.io/Travelpayouts_test/)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

- Run this command:
```
yarn install
yarn dev
```
- Go to http://localhost:3000

### Deployment to github pages

- Uncomment `build` in .gitignore.
- Add build folder and commit.
- Run this command:
```
yarn deploy
```

Note: 

- Check `config/webpack.common.config.js` to set `BASE_URL` (default for deployment is `/Travelpayouts_test/`)

### Dependencies

|package|version|
|-------|-------|
|Node|11.5.0|
