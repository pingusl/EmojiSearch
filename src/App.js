import "./App.css";
import Search from "./components/search";
import Line from "./components/line.js";
import Footer from "./components/footer";
import arrayOfObjects from "./assets/emoji.json";
console.log(arrayOfObjects);
function App() {
  return (
    <div className="App">
      <Search />
      {arrayOfObjects.map((item, index) => {
        return (
          <Line
            title={item.title}
            symbol={item.symbol}
            keywords={item.keywords}
            key={index}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
