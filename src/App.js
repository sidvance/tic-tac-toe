import { useState }  from 'react';
import './App.css';
import Square from './Square';


const App = () => {
  //initialize the state for games squares to an array of 9 empty strings
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""])
  //initialize state of player variable to the boolean of true
  const [player, setPlayer] = useState(true);
  
  const handleCLick = () => {
    console.log('resetting!!!')
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
  }
  
  const calculateWinner = arr => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++){
  // lines.forEach((e) => {
    // const [a, b ,c] = e
      const [a, b, c] = lines[i];
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]){
        return `${arr[a]} won!`;
      }
    }
      return "Who will win?";
    // })
  }
  return (
    <div className="App">
        <span>{calculateWinner(squares)}</span>
        <div className="container">
          {squares.map((val, index) => {
            return (
            <Square
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              squareValue={val} 
              index={index}
            />);
          }) 
          }
        </div>
          <button onClick={handleCLick}>Reset Game</button>  
        </div>
    );
}
    
    
export default App;
    