import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="steps">
        <div className="numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <p className="word"> Step 1:Learn React</p>
        <div className="buttons">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
