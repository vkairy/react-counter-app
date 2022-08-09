import './counterList.css'

// import Counter from '../counter'

// function CounterList({counters, onIncrement, onDecrement, onDelete}) {
//     return (
//         <div id='counter-list-container'>
//             {counters.map(counter =>
//                 <Counter key={counter.id} counter={counter} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} />)}
//         </div>
//     );
// }

// export default CounterList;

import Counter from '../counter'
import { connect } from 'react-redux';

function CounterList({counters}) {
    return (
        <div id='counter-list-container'>
            {counters.map(counter =>
                <Counter key={counter.id} counter={counter} />)}
        </div>
    );
}

export default connect(state => ({ counters: state }))(CounterList);