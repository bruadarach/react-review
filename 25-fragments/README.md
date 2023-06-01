# Fragments

#noExtraNodeToDOM #keyAttribute #<React.Fragment> #<></>

# What is ‘Fragments’?

Fragments groups a list of children elements, without adding extra nodes to the DOM.

# 1. Prevent extra node to the DOM

## Example 1 : Parent - Child component rendering

1. ‘To return multiple elements, a component has to enclose in a single parent element.

- `<div></div>`

2. It is possible to replace the enclosing` <div></div>` tag with `React.Fragment`, and that will prevent the extra node from being added to the DOM.

- `<div></div`> ⇒ `<React.Fragment></React.Fragment>`

```js
// App.js

import React from "react";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";

const App = () => {
  return (
    <div>
      <FragmentDemo />
    </div>
  );
};

export default App;
```

```js
// FragmentDemo.js

//rfce
import React from "react";

function FragmentDemo() {
  return (
    // <div>
    **<React.Fragment>**
      <h1>Fragment Demo</h1>
      <p>This describes the FragmentDemo component</p>
    **</React.Fragment>**
    // </div>
  );
}

export default FragmentDemo;
```

## Example 2: Table

### Error Handling

> Warning: validateDOMNesting(…): `<td>` cannot appear as a child of `<div>`.

An error will occur if you try to use `<div>` instead of `<React.Fragment>`.

This is because `<div>` cannot be a child of `<tr>`.

```js
// Table.js

// rfce
import React from "react";
import Columns from "./Columns";

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
```

```js
// Colummns.js

// rfce
import React from "react";

function Columns() {
  const items = [];

  return (
    // 3. React.Fragment can be replaced with <></>
    // 3. However, <></> cannot have a key attribute
    <>
      {/* 1. An error will occur if you try to use <div> instead of <React.Fragment>: */}
      {/* 1. This is because <div> cannot be a child of <tr> */}
      {/* <div> */}
      {/* <React.Fragment> */}

      {/* 2. React.Frangment can have a key attribute */}
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}

      <td>Name</td>
      <td>Sujeong</td>
      {/* </div> */}
      {/* </React.Fragment> */}
    </>
  );
}

export default Columns;
```

### Solution

> Replace the `<div></div>` tag with `<React.Fragment></React.Fragment>`

```js
// Colummns.js

// rfce
import React from "react";

function Columns() {
  const items = [];

  return (
      {/* 1. An error will occur if you try to use <div> instead of <React.Fragment>: */}
      {/* 1. This is because <div> cannot be a child of <tr> */}
      {/* <div> */}
      <React.Fragment>
      <td>Name</td>
      <td>Sujeong</td>
      {/* </div> */}
      </React.Fragment>
    </>
  );
}

export default Columns;
```

# 2. Accept `key` attribute when rendering lists

`<React.Fragment></React.Fragment>` can have a key attribute.

```js
// Colummns.js

// rfce
import React from "react";

function Columns() {
  const items = [];

  return (
      <React.Fragment>
      {/* 2. React.Frangment can have a key attribute */}
      {items.**map**((item) => (
        **<React.Fragment key={item.id}>**
          <h1>Title</h1>
          <p>{item.title}</p>
        **</React.Fragment>**
      ))}

      <td>Name</td>
      <td>Sujeong</td>
      </React.Fragment>
  );
}

export default Columns;
```

# 3. Replace <React.Fragment> with `<></>`

`<React.Fragment></React.Fragment>` can be replaced with `<></>`.

However, `<></>` cannot have a key attribute.
