# reactLearn
learning react step by step

# useEffect hook
- its like setting a task to happen after the screen updates or when    certain data is ready

    SYNTAX:
    useEffect(()=>{
        //code to run
    }, [dependency]);

    different variations
    useEffect(()=>{}); //Run on every render
    useEffect(()=>{},[]); // runs only once after the initial render because it has an empty dependency array
    useEffect(()=>{},[count]); // runs after initial render and when count updates


# UseRef Hook
    persist values across renders
    does not cause the component to re-render when the value changes

-     useref hook is used to persist values across renders without      causing the components to rerender when the value changes

how in console the value will be displayed
it shows as object
    {
        current: 'hello, world!!'
    }

# Prop Drilling 
- when data from top component needs to be passed down to bottom         children components who needs in 
    - Component 1
        - Component 2 
            - Component 3

    here in above case component1 has the data and it passes it component2 and eventually to component 3 now component 2 does not need the data but it has the data so it passes it down to the component 3 who is in need of it

# UseContext Hook

- a hook where you can create a context and you can access that context directly from the main component where the context is present you don't need to pass it down from component to compoenent to a component who needs it it can directly access it from the component which has it 

    create a context in parent component
        const myContext= createContext(defaultValue);

    consume the context in the component which needs it:
    const testContext= useContext(myContext);


# provider for useContext 

Provider is a wrapper that shares data globally inside a component tree.

        const UserContext = createContext();

        function App() {
         return (
            <UserContext.Provider value="Gary">
            <Profile />
            </UserContext.Provider>
        );
    }

        function Profile() {
            const user = useContext(UserContext);
            return <h1>Hello {user}</h1>;
        }


# Custom Hooks
- custom hooks in react are functions that let us re use logic across multiple components

- custom hooks should just start with "use" keyword