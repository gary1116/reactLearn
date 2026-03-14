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


# React Forms
-     const {register, handleSubmit}=useForm();
  useForm() is a hook from react-hook-form that creates an internal form manager.

| Function       | Purpose                                 |
| -------------- | --------------------------------------- |
| `register`     | connects an input to the form system    |
| `handleSubmit` | handles form submission + collects data |


- <input {...register('name')} />

register('name') tells react-hook-form:
“Track this input and store its value under the key name.”

When the user types:

Name: Gary
Email: gary@mail.com

React Hook Form automatically stores:

{
  name: "Gary",
  Email: "gary@mail.com"
}

- handleSubmit()

It does several things:

1️⃣ Prevents default form reload
2️⃣ Collects all registered input values
3️⃣ Validates them (if rules exist)
4️⃣ Sends them to your onSubmit

# searchParams

What useSearchParams() gives you

This hook:
const [searchParams, setSearchParams] = useSearchParams();

gives you two things:

Variable	Purpose
searchParams	read query parameters from URL
setSearchParams	change query parameters

Query parameters are the part after ? in a URL.

Example:
/about?topic=Team

Here:

topic = Team
2️⃣ What this line does
const topic = searchParams.get("topic") || "general";



- Part 1
searchParams.get("topic")

This means:
"Get the value of the URL parameter called topic."
Example URL:
/about?topic=Team
    Then:

        searchParams.get("topic") → "Team"
        Why "general" is there

    The || operator means:
        value || fallback
        If the value is null / undefined / empty, use the fallback.

So this line means:
topic = searchParams.get("topic")
if no topic exists → topic = "general"





- Why the URL does NOT show ?topic=general initially when you load the page?

        You wrote:
        const topic = searchParams.get("topic") || "general";
        Important thing:
        ⚠️ This line does NOT change the URL.
        It only creates a variable in JavaScript.

        So when the page loads:

        http://localhost:5173/about

        Then:
        searchParams.get("topic")

        returns:
        null
        Because the URL has no topic parameter.

        Then the || operator runs:
        const topic = null || "general"

        Result:
        topic = "general"
        But the URL remains unchanged.

        So the browser still shows:
        http://localhost:5173/about

        But inside your React component:
        topic = "general"

        That’s why the UI shows:
        Current Topic is general
        Even though the URL does not contain it.


- when topic becomes part of the URL later?

        This happens here:
        setSearchParams({topic:newTopic});

        Example:
        handleTopic("Vision")
        React Router updates the URL to:

        /about?topic=Vision
        Now searchParams.get("topic") returns:
        "Vision"