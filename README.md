# react-redux-apollo-authentication-example
## Introduction
Wandering on Github to find a smart way to use Redux and Apollo, I found this very promising [react-redux-apollo-authenticaton-example](https://github.com/lnmunhoz/react-redux-apollo-authenticaton-example) from [lnmunhoz](https://github.com/lnmunhoz).  
I updated some dependencies. I changed the architecture trying to follow `ducks/reducks` architecture.  
Still, I couldn't reach my goal which was also to move all the business logic which resides in the containers into the `state` directory (using `redux-thunk` and `operations.js` files). I'm open to any suggestions.  

## Includes
- React
- React Router v.4
- Redux
- Apollo

## Setup the backend
- Create an account on [Graph.cool](http://graph.cool)
- Follow part of [this tutorial](https://www.graph.cool/docs/tutorials/react-apollo-email-oopheesaj9/)
- Endpoint uri should reside in "config.json"

> You dont need to create any schema. Scaphold.io already provides a User schema designed for the needs of this project.

## Setup this project
```
npm install
npm start
```

The project should be listening on [http://localhost:3000](http://localhost:3000)
