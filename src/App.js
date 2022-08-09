import './App.css';

// import { useState } from 'react';
// import CounterList from './components/counter-list';
// import Header from './components/header';

// function App() {
//   const [counters, setCounters] = useState([
//     { id: 1, value: 0 },
//     { id: 2, value: 0 },
//     { id: 3, value: 0 },
//     { id: 4, value: 0 },
//     { id: 5, value: 0 },
//     { id: 6, value: 0 },
//     { id: 7, value: 0 },
//     { id: 8, value: 0 },
//   ]);

//   const incrementOrDecrement = (id, increment = true) => {
//     // preventing negatives when decreasing the value
//     if (!increment && counters.find(counter => counter.id === id).value === 0) {
//       return;
//     }

//     const newCounters = [...counters];
//     const counterToBeUpdated = newCounters.find(counter => counter.id === id);
//     counterToBeUpdated.value += increment ? 1 : -1;
//     setCounters(newCounters);
//   }

//   const handleIncrement = (id) => {
//     incrementOrDecrement(id);
//   };

//   const handleDecrement = (id) => {
//     incrementOrDecrement(id, false);
//   }

//   const handleDelete = (id) => {
//     const newCounters = counters.filter(counter => counter.id !== id);
//     setCounters(newCounters);
//   }

//   return (
//     <>
//       <Header counters={counters} />
//       <CounterList counters={counters} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} />
//     </>
//   );
// }

// export default App;

import { Provider } from 'react-redux';

import CounterList from './components/counter-list';
import Header from './components/header';
import counterStore from './store';

function App() {
  return (
    <Provider store={counterStore}>
      <Header />
      <CounterList />
    </Provider>
  );
}

export default App;
