import Clickable from '../Atoms/Clickable/Clickable';

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Clickable
        onClick={() => alert('hey!')}
        text="Say Hey!"
      />
      <br/>
      <Clickable
        href="https://google.com"
        text="Google it"
        color="purple"
        newTab
      />
    </div>
  );
}

export default App;
