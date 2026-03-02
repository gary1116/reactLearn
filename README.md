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
