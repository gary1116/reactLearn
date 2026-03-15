*********ABOUT REDUX*********

# STORE
- this is the single place where all the app's state lives
- store is like a repository

# action
- An action is a plain javascript object that describes what you want to do, such as adding an item to the cart.

# Reducer
- A function that receives the current state and an action, then returns a new state based on the action

# what redux is?
- Redux is a global state manager.


- Normally in React:

Component A state
Component B state
Component C state

State is scattered.

Redux creates one central state container:

Redux Store
     │
     ├── state
     │     count: 0
     │
     └── logic to update state

All components read and update this one store.

Redux has 3 main concepts
Concept	Purpose
Store	Holds the global state
Action	Describes what happened
Reducer	Updates the state based on action

Think of it like:

User clicks button
        ↓
Action sent
        ↓
Reducer updates state
        ↓
Store updates
        ↓
UI updates

- about actions.js

        export const increment=()=>({
            type:'INCREMENT'
        });

        export const decrement=()=>({
            type:'DECREMENT'
        });
What this means?
These functions create actions.
An action is just a JavaScript object.

    {
    type: "INCREMENT"
    }

- Why?
        Because Redux needs a description of what happened.
        Example:
        "INCREMENT"
        "DECREMENT"
        "ADD_TODO"
        "LOGIN"
        The type tells Redux what change should happen.


*********************************************
# in counterReducer.js
        const initialState = { count: 0 };

        This is the initial state of the app.

        So Redux starts with:

        state = {
        count: 0
        }
*********************************************

# REDUCER FUNCTION

- const counterReducer=(state=initialState,action)=>{
    Reducer always receives two things:
    Parameter	Meaning
    state	current state
    action	what happened
- The switch
    switch(action.type)

- Redux checks the action type.

Case 1
case 'INCREMENT':
   return {count:state.count+1};

    If action type is:

    INCREMENT

    then:
    count = count + 1
Case 2
    case 'DECREMENT':
    return {count:state.count-1};

    If action type is:

    DECREMENT

    then:
    count = count - 1
Default case
    default:
    return state;

    If Redux receives an unknown action:
    DO NOTHING
    Return the existing state.

# store.js
- import {createStore} from "redux";
createStore creates the central Redux store.

Creating store
const store = createStore(counterReducer);

    This means:
    Redux Store
        │
        └── uses counterReducer

        Redux now knows:
        How to update state
        because reducer contains that logic.

# Store now contains
        store
        │
        ├── state
        │      count:0
        │
        ├── reducer
        │
        └── dispatch function


#  useSelector
it is a React-Redux hook that lets your react component access data from the Redux store

# useDispatch
it is another React-Redux hook that lets your component send actions to the Redux store.