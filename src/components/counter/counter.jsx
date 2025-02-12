import './counter.css'
import { MdAddCircle, MdRemoveCircle, MdDeleteForever } from 'react-icons/md'

// function Counter({counter, onIncrement, onDecrement, onDelete}) {
//     return (
//         <div id='counter-container'>
//             <p id='badge' className={counter.value === 0 ? 'zero' : ''}>
//                 {counter.value === 0 ? 'zero' : counter.value}
//             </p>
//             <button id='increment' onClick={() => onIncrement(counter.id)}>
//                 <MdAddCircle />
//             </button>
//             <button id='decrement' onClick={() => onDecrement(counter.id)}>
//                 <MdRemoveCircle />
//             </button>
//             {counter.value === 0 && <button id='delete' onClick={() => onDelete(counter.id)}>
//                 <MdDeleteForever />
//             </button>}
//         </div>
//     );
// }

// export default Counter;

import { connect } from 'react-redux';

function Counter({counter, dispatch}) {
    return (
        <div id='counter-container'>
            <p id='badge' className={counter.value === 0 ? 'zero' : ''}>
                {counter.value === 0 ? 'zero' : counter.value}
            </p>
            <button id='increment' onClick={ () => dispatch({ type: 'INC', id: counter.id }) }>
                <MdAddCircle />
            </button>
            <button id='decrement' onClick={ () => dispatch({ type: 'DEC', id: counter.id }) }>
                <MdRemoveCircle />
            </button>
            {counter.value === 0 && <button id='delete' onClick={ () => dispatch({ type: 'DEL', id: counter.id }) }>
                <MdDeleteForever />
            </button>}
        </div>
    );
}

// no need the state, only dispatch, which is given as default :)
export default connect()(Counter);