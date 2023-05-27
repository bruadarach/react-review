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
