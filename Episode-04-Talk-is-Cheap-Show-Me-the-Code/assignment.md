# 📘 Theory Assignment

---

## 🧠 Questions

- **What is `Config Driven UI`?**
  - Is a UI technique that allow you to create User Interfaces based on a configuration file such as JSON. 
  - Location wise data change as Swiggy and Zomato UI is working
- **What is `Reconciliation`?**
  - Is a process React uses to synchronize it's virtual DOM (A lightweight JS copy of the actual DOM) with real browser DOM.
  - When a Component's State or Props change, React create a virtual DOM tree and compare with previous one to determined which parts of UI needs to update.
- **What is `Diffing`?**
  - This the core logic behind the reconciliation. While comparing two trees is normally O(n^3) operation, but React uses a heuristic algorithm to achieve O(n) complexity.
- **What is `Fiber Architecture`?**
  - Introduce in React-16, React fiber is the current reconciliation engine. It split rendering in chunk and prioritize urgent updates (e.g: User Input) over less critical one.  
- **Why do we need keys in React?**
  - A key is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists. Keys should be given to the elements within the array to give the elements a stable identity.
- **Can we use index as keys in React?**
  - Yes, we can use the index as keys, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.
- **Difference between `Virtual DOM` and `Real DOM`?**
  - the Real DOM is the actual browser structure used to render the page, while the Virtual DOM (VDOM) is a lightweight, in-memory copy used by React to calculate changes efficiently before applying them to the screen

|   `Real DOM`    |   `Virtual DOM` |
|-------------|-----------------|
| DOM manipulation is very expensive  | DOM manipulation is very easy  | 
| There is too much memory wastage  | No memory wastage  |
| It updates Slow | It updates fast |
| It can directly update HTML | It can’t update HTML directly  |
|  Creates a new DOM if the element updates. | Update the JSX if the element update |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the UI of your application | It is only a virtual representation of the DOM |