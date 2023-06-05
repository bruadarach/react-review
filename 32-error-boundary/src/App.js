import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      {/* it will throw an error */}
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
};

export default App;
