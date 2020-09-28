1. What problem does the context API help solve?

Context API simplifies state management without using prop-drilling. You can also choose to use application state or component state.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are plain objects that decribe what will happen to the state. Reducers are pure funcions that transform the state based on the action. The store is known as the single source of trutch because it hold the entire state of the application.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state can also be known as global state since it it data that is available to the entire application. Component state is data that is only accessible to the component. A good time to use application state is when data is needed by multpled components. Id data is only relevent to one component, it would be best to have it at the component state.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk helps our logic be asynchronous. It changes out actions creators by allowin us to delay the dispatch of an action or only run if the logic allows it.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is Context API. Even though it is limited to React applications, I like that there is significantly less code to write in order to set up everything and it it much easier to read. 