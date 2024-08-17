
1. How can you implement shared functionality across a component tree?
* There are serveral ways to implement the shared functionality like props, utility functions, contextAPI.
    * Props: data/states can be passed from the parent component to child component through means of props(component arguments).
      ```
      eg: dataFromParent = ['item1','item2','item3'];
          <ChildComponent data={dataFromParent}/>
      ```
    * Utility Functions: pure functions that can be imported by any component in the component tree.
      ```
      eg: export const add = (a,b) => a+b;
      ```
    * Context API: A context can be created using createContext() hook provided by react, this context can store data from the parent component and child components can grab the data stored. This also avoid Prop Drilling so regardless of position, any component in the tree can access that data.

2. Why is the `useState` hook appropriate for handling state in a complex component?
* `useState` hook is the most convinient hook that react provides for immediate state management, where each component can have it's own states. This also allows react to efficiently re-render a specific component based on state change.

3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
