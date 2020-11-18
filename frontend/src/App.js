import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Paper Tracker</h1>
        <input type="search" name="paper name" placeholder="調べたい論文名を入力"/>
        <button type="button" class="btn-search">検索</button>
      </header>
    </div>
  );
}

export default App;
