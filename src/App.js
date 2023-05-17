import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import MessageFunction from "./components/MessageFunction";
import Counter from "./components/Counter";
import CounterFive from "./components/CounterFive";
import CounterFunction from "./components/CounterFunction";
import Destructure from "./components/Destructure";
import DestructureClass from "./components/DestructureClass";
import EventHandling from "./components/EventHandling";
import EventHandlingClass from "./components/EventHandlingClass";
import EventBindClass from "./components/EventBindClass";
import PropsParentComponentClass from "./components/PropsParentComponentClass";
import PropsChildComponentClass from "./components/PropsChildComponentClass";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ListRenderingFunction from "./components/ListRenderingFunction";
import Styling from "./components/Styling";
import InlineCSS from "./components/InlineCSS";
import "./components/cssModules.css";
import styles from "./components/cssModules.module.css";
import ConditionalRenderingFunction from "./components/ConditionalRenderingFunction";
import FormClass from "./components/FormClass";
import FormFunction from "./components/FormFunction";
import LifecycleMethodMounting from "./components/LifecycleMethodMounting";
import LifecycleMethodUpdating from "./components/LifecycleMethodUpdating";

function App() {
  return (
    <>
      {/* <Greet />;
      <Welcome />; 
      <Hello /> */}
      {/* props with a Functional Component */}
      <Greet name="Sujeong" favorite="flower" />
      <Greet name="Minji" favorite="family">
        <p>I love JY</p>
        <p>I love Deoqua</p>
      </Greet>
      <Greet name="Lucky" favorite="toy">
        <div>
          <button>Lucky Button</button>
        </div>
      </Greet>
      {/* Props with Class Component */}
      <h2>Props - Class Component</h2>
      <Welcome name="Sujeong" favorite="flower" />
      <Welcome name="Minji" favorite="family" />
      <Welcome name="Lucky" favorite="toy" />
      {/* Props - Functional Component */}
      <h2>Props - Functional Component</h2>
      <MessageFunction name="Jarvis" />
      {/* Props - Class Component */}
      <h2>Props - Class Component</h2>
      <Message name="Jarvis" />
      {/* setState() - Class Component */}
      <h2>setState() - Class Component</h2>
      <Counter />
      <CounterFive />
      {/* setState() - Functional Component */}
      <h2>setState() - Functional Component</h2>
      {/* <CounterFunction /> */}
      {/* Destructure - Functional Component */}
      <h2>Destructure - Functional Component</h2>
      <Destructure name="Suji" favorite="tea" />
      <Destructure name="Suji" favorite="coffee">
        <p>children props</p>
      </Destructure>
      {/* Destructure - Class Component */}
      <h2>Destructure - Class Component</h2>
      <DestructureClass name="Suji" favorite="bagel">
        <p>children props</p>
      </DestructureClass>
      {/* Event Handling - Functional Component  */}
      <h2>Event Handling - Functional Component</h2>
      <EventHandling />
      {/* Event Handling - Class Component  */}
      <h2>Event Handling - Class Component</h2>
      <EventHandlingClass />
      {/* Event Bind - Class Component */}
      <h2>Event Bind - Class Component</h2>
      <EventBindClass />
      {/* Pass a Method as Props - Class Component */}
      {/* click the button in the child component and then execute the method defined in parent component */}
      {/* children component calls a parent component */}
      <h2>Method as Props - Class Component</h2>
      <PropsParentComponentClass />
      {/* Pass a Method as Props - Class Component */}
      <PropsChildComponentClass />
      {/* Conditional Rendering - Class Component */}
      <h2>Conditional Rendering - Class Component</h2>
      <ConditionalRenderingClass />
      {/* Conditional Rendering - Class Component */}
      <h2>Conditional Rendering - Functional Component</h2>
      <ConditionalRenderingFunction />
      {/* List Rendering - Functional Component */}
      <h2>List Rendering - Functional Component</h2>
      <ListRenderingFunction />
      {/* Styling  */}
      <h2>1. CSS Stylesheet</h2>
      <Styling primary={true} />
      <h2>2. Inline CSS</h2>
      <InlineCSS />
      <h2>3. CSS Modules</h2>
      {/* Normal CSS Stylesheets - applied in the Child Component */}
      <div className="error">Error</div>
      {/* CSS Modules - not applied in the Child Component*/}
      <div className={styles.success}>Success</div>
      <InlineCSS />
      {/* Form Handling - input, textarea, select */}
      <h2>Form</h2>
      <FormClass />
      {/* Form Handling - input, textarea, select */}
      <h2>Form</h2>
      <FormFunction />
      {/* Component Lifecycle Methods - Mounting */}
      <h2>Component Lifecycle Method - Mounting</h2>
      <LifecycleMethodMounting />
      {/* Component Lifecycle Methods - Updating */}
      <h2>Component Lifecycle Method - Updating</h2>
      <LifecycleMethodUpdating />
    </>
  );
}

export default App;
