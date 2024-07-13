import "./App.css";
import BasketballPlayerCard from "./components/BasketballPlayerCard";

function App() {
  return (
    <>
      <BasketballPlayerCard
        name="Thomas Hervey"
        image="https://i.ibb.co/Yb1MBk4/player1.jpg"
        position="Center"
        stats={{
          pointsPerGame: 2204,
          assistsPerGame: 8.2,
          reboundsPerGame: 9.8,
        }}
      />
    </>
  );
}

export default App;
