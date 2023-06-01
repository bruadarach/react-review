# [Class] Pure Component

#`shouldComponentUpdate` #SC(ShallowComparison) #NOReRendering
#BoostPerformance

<br>

# How to create a class component?

1. by extending the `Component class` from React

   ```js
   // **rce**

   import React, { Component } from "react";

   class RegComp **extends Component** {
     render() {
       console.log("Regular Component Render");
       return <div>Regular Component {this.props.name}</div>;
     }
   }

   export default RegComp;
   ```

2. by extending the `PureComponent class` from React

   ```js
   // **rpce**

   import React, { PureComponent } from "react";

   class PureComp **extends PureComponent** {
     render() {
       return <div>Pure Component</div>;
     }
   }

   export default PureComp;
   ```

<br>

# Regular Component vs. Pure Component?

### Regular Component

Regular Component does **not** implement the `shouldComponentUpdate` method.
It always returns true by default, and re-renders whenever the parent component re-renders. (⇒ NO props and state comparison)

### Pure Component

Pure Component implement the `shouldComponentUpdate` method, with a shallow props and state comparison.

<br>

# What is the Shallow Comparison(SC)?

### 1. Primitive Types (string, number, boolean)

`a (SC) b` returns true, if a and b have the same value and are of the same type.

> string `Sujeong` (SC) string `Sujeong` ⇒ true

### 2. Complex Types (object, array)

> `a (SC) b` returns true, if a and b reference the exact same object.

```js
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = a;

a === b; // false
a === c; // true
```

<br>

# What will happen after `render()`?

### 1. When the Parent component is a regular class component & updates (primitive type) ‘string’ state with the ‘same’ value

⇒ (Child) Regular Component will be re-rendered.

⇒ (Child) Pure Component will not be re-rendered.

**[Case]**

> - App.js
> - ParentComp.js (⇒ regular component)
>   - RegComp.js (⇒ regular component)
>   - PureComp.js (⇒ pure component)

⇒ After the initial renders, 2 seconds later, there is no re-rendering of Pure component.

⇒ Parents component checks the current state and props (SC), and if there is no change, the children Pure component never re-renders.

<br>

# When should use Pure component?

Pure component prevents unnecessary re-renders, which can boost performance.

(e.g) Render a list of 50 items. By not re-rendering, when it is not required, it can have a good performance boost.

### Keep in mind

DO NOT mutate object or arrays in props or state, directly by pushing an item into the list. The reference to the array never changes, and the Pure component only checks for that, it will not re-render even if there is a difference.

Always return a new object or array when dealing with Pure components.

<br>

# Summary

- It is possible to create a component by extending the PureComponent class from React.
- A PureComponent implements the `shouldComponentUpdate` lifecycle method by performing a shallow comparison(SC) on the props and state of the component.
- If there is no difference, the Pure component is not re-rendered ⇒ performance boost.
- It is a good idea to ensure that all the children components are also pure to avoid unexpected behavior.

- When using a pure components, never mutate the state. Always return a new object that reflects the new state ⇒ see `Counter.js`
  - By returning a new object, you create a new reference for the state or props, indicating that a change has occurred.
  - React uses this reference comparison to determine whether a component needs to be re-rendered.
  - It is safe to use a regular component, unless you have a performance issue.
