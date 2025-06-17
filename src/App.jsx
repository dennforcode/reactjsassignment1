import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [predefinedNumbers, setPredefinedNumbers] = useState([3, 5, 10, 15]);
  const [newNumber, setNewNumber] = useState('');

  const handleAddNumber = () => {
    const parsed = parseInt(newNumber);
    if (!isNaN(parsed) && !predefinedNumbers.includes(parsed)) {
      setPredefinedNumbers([...predefinedNumbers, parsed].sort((a, b) => a - b));
      setNewNumber('');
    }
  };

  const handleAddOrRemove = (num) => {
    if (predefinedNumbers.includes(num)) {
      setPredefinedNumbers(predefinedNumbers.filter(n => n !== num));
    } else {
      setPredefinedNumbers([...predefinedNumbers, num].sort((a, b) => a - b));
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-between bg-cover bg-center px-4 py-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')",
      }}
    >
      {/* Header */}
      <div className="text-center space-y-2">
        <p className="text-3xl md:text-4xl font-extrabold tracking-wide">Assignment - 2</p>
        <p className="text-5xl md:text-7xl font-black drop-shadow">Counter Application</p>
      </div>

      {/* Counter Section */}
      <div className="flex flex-col items-center gap-2">
        {/* Main +/- */}
        <div className="flex items-center justify-around mt-6 w-full">
          <button
            onClick={() => {let newCount = count - 1; setCount(newCount < 0 ? 0 : newCount)}}
            className="text-3xl md:text-7xl w-16 h-16 rounded-full shadow active:scale-95 transition flex justify-center items-center cursor-pointer"
          >
            −
          </button>
          <p className="text-4xl md:text-7xl font-extrabold">{count}</p>
          <button
            onClick={() => {let newCount = count + 1; setCount(newCount < 0 ? 0 : newCount)}}
            className="text-3xl md:text-7xl w-16 h-16 rounded-full active:scale-95 transition flex justify-center items-center cursor-pointer"
          >
            +
          </button>
        </div>

        {/* Reset Button */}
        <button
          onClick={() => setCount(0)}
          className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full shadow hover:bg-red-600 active:scale-95 transition"
        >
          Reset
        </button>
        
        <div className="mt-6 flex gap-2 flex-col items-center lg:flex-row">
          <input
            type="number"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
            placeholder="Add a number"
            className="px-3 py-2 rounded bg-white text-black placeholder-gray-500 shadow focus:outline-none"
          />
          <button
            onClick={handleAddNumber}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 active:scale-95 transition"
          >
            Add
          </button>
        </div>
      </div>

      {/* Predefined +/- Buttons */}
      <div className="mt-6 p-1 flex flex-col gap-3 w-full max-w-md max-h-[180px] md:max-h-[280px] overflow-auto" style={{scrollbarWidth:'thin'}}>
          {predefinedNumbers.map((num, idx) => (
            <div key={idx} className="flex justify-between items-center rounded-lg px-4 py-2 text-white">
              <button
                className="bg-red-200 text-red-800 p-2 rounded hover:bg-red-300 active:scale-95 transition"
                onClick={() => setCount(count - num)}
              >
                -{num}
              </button>
              <button
                className="bg-yellow-300 text-black px-4 py-1 rounded hover:bg-yellow-400 active:scale-95 transition"
                onClick={() => handleAddOrRemove(num)}
              >
                Remove
              </button>
              <button
                className="bg-green-200 text-green-800 p-2 rounded hover:bg-green-300 active:scale-95 transition"
                onClick={() => setCount(count + num)}
              >
                +{num}
              </button>
            </div>
          ))}
        </div>

      {/* Footer Spacer */}
      <div />
    </div>
  );
}

export default App;
