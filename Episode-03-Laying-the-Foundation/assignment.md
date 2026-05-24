# 📘 Theory Assignment

---

## 🧠 Questions

- **What is `JSX`?**
  - JSX stands for JavaScript XML. 
  - JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods. JSX makes it easier to write and add HTML in React. JSX converts HTML tags into react elements.
  - Using JSX
  ```bash
  const myElement = <h1>I Love JSX!</h1>;
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(myElement);
  ```
  - Without Using JSX
  ```bash
  const myElement = React.createElement('h1', {}, 'I do not use JSX!');
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(myElement);
  ```
- **What is `Babel`? Why do we need it?**
  - Babel is a JavaScript compiler (or transpiler) that converts modern, cutting-edge JavaScript code into a backward-compatible version. This older version can run smoothly on a wide variety of browsers, including older or less updated environments.
  - JSX -> React.CreateElement -> ReactElement -> JS Object -> HTML(Render)
- **What is `Component Composition`?**
  - A design pattern in React where you build complex user interfaces by combining smaller, independent, and reusable components.
  ```bash
  <Card>
    <Header />
    <Body />
    <Footer />
  </Card>
  ```
- **`{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.**
  - `{TitleComponent}` : This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.
  - `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {<  />} expression.
  - `<TitleComponent></TitleComponent>` : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.
