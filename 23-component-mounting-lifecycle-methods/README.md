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
