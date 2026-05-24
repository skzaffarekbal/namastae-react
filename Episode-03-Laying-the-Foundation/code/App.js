import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
// const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React');
const jsxHeading = <h1 id='heading'>Namaste React from JSX Element</h1>;
const Heading = () => {
  return <h1 id='heading'>Namaste React from Component</h1>;
};

// React Component
const HeadingComponent = () => {
  return (
    <div className='container'>
      {jsxHeading}
      {Heading()}
      <Heading />
      <Heading></Heading>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

// React Element Render
// root.render(jsxHeading);

// React Component Render
root.render(<HeadingComponent />);
