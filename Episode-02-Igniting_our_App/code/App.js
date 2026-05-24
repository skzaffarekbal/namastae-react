import React from "react";
import ReactDOM from "react-dom/client"

let parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1', key: '1' }, [
    React.createElement('h1', { key: '1' }, 'h1 of child1'),
    React.createElement('h2', { key: '2' }, 'h2 of child1'),
  ]),
  React.createElement('div', { id: 'child2', key: '2' }, [
    React.createElement('h1', { key: '1' }, 'h1 of child2'),
    React.createElement('h2', { key: '2' }, 'h2 of child2'),
  ]),
]);

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
