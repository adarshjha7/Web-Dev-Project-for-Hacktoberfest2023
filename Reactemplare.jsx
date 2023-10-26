import React from 'react';
import ReactDOM from 'react-dom';

// Create a functional component
function App() {
  return (
    <div>
      <header>
        <h1>Hello, React Website!</h1>
      </header>
      <main>
        <p>This is a simple React website.</p>
      </main>
    </div>
  );
}

// Render the component to the root HTML element
ReactDOM.render(<App />, document.getElementById('root'));
