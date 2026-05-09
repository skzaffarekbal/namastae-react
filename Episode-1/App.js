// Render simple h1
// let heading = React.createElement(
//   'h1',
//   {
//     id: 'heading',
//     onClick: () => {
//       console.log('Heading Clicked');
//     },
//   },
//   'Hello World From React',
// );
// console.log(heading);
// let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

// Render nested html
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
