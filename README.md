# ReactJS fundamentals

## Goal
The goal of this exercise is to learn some basic React patterns, React Router, and how to fetch data into your app. There are thousands of tutorials online but there's no better way to learn than hacking it yourself.

## Requirements
You need to be comfortable writing JavaScript (ES6: Module system, class, JS context vs scope, arrow functions).
You need to have `node` (at least version 4.4.5) and git installed in your computer.

## Getting started:

Clone [this repository](https://github.com/reactjs-academy/reactjs-fundamentals) and run `npm start`

`git clone https://github.com/reactjs-academy/reactjs-fundamentals`
`cd react-course`
`npm install`

Now you can run your application by running: `npm start`

## Exercise

1. Implement the following route http://localhost:3456/#/workshops. Hint: Check this file app/config/Routes.js
2. Refactor UserList so it implements the [container component pattern](https://medium.com/@learnreact/container-components-c0e67432e005). Use UserListContainer. Hint: You also need to change app/config/Routes.js
3. Clicking on a user on the list should display the user's profile. Hint:  Check UserListContainer, should it return children components?  
4. Refactor UserProfile so it implements the [container component pattern](https://medium.com/@learnreact/container-components-c0e67432e005). Hint: You also need to change app/config/Routes.js
5. Implement WorkshopList and WorkshopListContainer using http://localhost:3456/data/workshops.js


## What's next

Read the following articles to learn more about these subjects

- https://medium.com/@learnreact/container-components-c0e67432e005#.btkvoecha
- https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.oy1l2u2ew
- http://andrewhfarmer.com/ajax-libraries/
- https://github.com/reactjs/react-router/tree/master/docs

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
