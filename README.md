# Frontend technical test @ Fulll — Maël Martin

## Algorithm

You can find the fizzbuzz algorithm in the `./algo` directory. Use `tsc index.ts && node index.js` to run the script.

## React app

### Objective

Create a create app to show github users, as a result from a search input. Give user ability to duplicate or delete items from the list of results.

The app should be responsive, and give feedback to the user (no results, errors, etc…).

### Technologies used

For this app, I have used `create-react-app` as a boilerplate, with the typescript template. I have not added any other dependency to the project. I used React with functional components and hooks.

### Fulfillment of the request

I tried to fulfill all the objectives that were in the scope of my technical skills. I haven't used unit/functional/integration tests in the past, so I wasn't really comfortable implementing them in this app.

I could have used something like the React Context API or Redux to manage the app state, but given the limited scope of the app, I chose to manage my state primarly in the `<Main />` component, and cascade the state/actions via props to the children.

For styling, I chose to go vanilla and use an external stylesheet. This allowed me not to add any dependency to the application, and there were not any constraint/design system that would guide me towards a specific styling solution.

### Possible evolutions for the app

- Add a pagination functionality. Only the first 30 results are showed at the moment.
- Show to the user his rate limit (using the `x-ratelimit` headers given back from the response by the Github API).
