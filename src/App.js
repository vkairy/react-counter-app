import './App.css';
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
