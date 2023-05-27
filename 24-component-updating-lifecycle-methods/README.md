# Lifecycle Method

- Mounting

  - When an instance of a component is being created and inserted into the DOM
  - 4 methods
    - constructor()
    - static getDerivedStateFromProps()
    - render()
    - componentDidMount()
      <br>

- Updating

  - When a component is being re-rendered as a result of changes to either its props or state
  - 5 methods
    - static getDerivedStateFromProps()
    - shouldComponentUpdate()
    - render()
    - getSnapshotBeforeUpdate()
    - componentDidUpdate()
      <br>

- Unmounting

  - When a component is being removed from the DOM
  - 1 method
    - componentWillUnmount()
      <br>

- Error Handling
  - When there is an error during rendering, in a lifecycle method, or in the constructor of any child component
  - 2 methods
    - static getDerivedStateFromError()
    - componentDidCatch()

<br>

# Mounting Lifecycle Methods

- constructor ( props )
  - A special function that will get called whenever a new component is created
  - Initializing state
  - Binding the event handlers
  - Do not cause side effects ( ex. HTTP requests )
  - Super(props)
    - Directly overwrites the this.state

<br>

- static getDerivedStateFromProps ( props, state )
  - When the state of the component depends on changes in props over time
  - Set the state
  - Do not cause side effects ( ex. HTTP requests )

<br>

- render()
  - Only required method in a class component
  - Read props & state and return JSX
  - Do not change state or interact with DOM or make AJAX calls
  - Children components lifecycle methods are also executed

<br>

- componentDidMount()
  - Invoked immediately after a component and all its children components have been rendered to the DOM
  - Cause side effects ( ex. Interact with DOM or perform any AJAX calls to load data )

<br>

## Result of the Mounting Lifecycle Methods

1. LifecycleA - constructor
2. LifecycleA - getDerivedStateFromProps
3. LifecycleA - render
4. LifecycleB - constructor
5. LifecycleB - getDerivedStateFromProps
6. LifecycleB - render
7. LifecycleB - componentDidMount
8. LifecycleA - componentDidMount

<br>

# Updating Lifecycle Methods

- static getDerivedStateFromProps ( props, state )
  - Methods is called every time a component is re-rendered
  - Set the state
  - Do not cause side effects ( ex. HTTP requests )
  - One of the rarely used methods

<br>

- shouldComponentUpdate ( nextProps, nextState )
  - Dictates if the component should re-render or not
  - Performance optimization
  - Do not cause side effects ( ex. HTTP requests, calling the setState method )
  - One of the rarely used methods

<br>

- render()
  - Only required method
  - Read props & state and return JSX
  - Do not change state or interact with DOM or make AJAX calls

<br>

- getSnapshotBeforeUpdate ( prevProps, prevState )
  - Called right before the changes from the virtual DOM are to be reflected in the DOM
  - Capture some information from the DOM
  - Method will either return null or return a value
  - The returned value will be passed as the third parameter to the next method
  - One of the rarely used methods

<br>

- componentDidUpdate ( prevProps, prevState, snapshot )
  - Called after the render is finished in the re-render cycles
  - Cause side effects ( ex. Interact with DOM or perform any AJAX calls to load data )
  - One of the rarely used methods

## Result of the Updating Lifecycle Methods

1. LifecycleA - constructor
2. LifecycleA - getDerivedStateFromProps
3. LifecycleA - render
4. `LifecycleB - constructor`
5. `LifecycleB - getDerivedStateFromProps`
6. `LifecycleB - render`
7. `LifecycleB - componentDidMount`
8. LifecycleA - componentDidMount

<br>

9. LifecycleA - getDerivedStateFromProps
10. LifecycleA - shouldComponentUpdate
11. LifecycleA - render
12. LifecycleB - getDerivedStateFromProps
13. LifecycleB - shouldComponentUpdate
14. LifecycleB - render
15. `LifecycleA - getSnapshotBeforeUpdate`
16. `LifecycleB - getSnapshotBeforeUpdate`
17. LifecycleA - componentDidUpdate
18. LifecycleB - componentDidUpdate

<br>

# Unmounting Lifecycle Methods

- componentWillUnmount
  - Invoked immediately before a component is unmounted and destroyed
  - Cancelling any network requests, removing event handlers, cancelling any subscriptions and also invalidating timers
  - Do not call the setState method

<br>

# Error Handling Lifecycle Methods

- static getDerivedStateFromError ( error )
- componentDidCatch
  - When there is an error either during rendering, in a lifecycle method, or in the constructor of any child component
