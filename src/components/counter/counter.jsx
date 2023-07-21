import './counter.css'
import { MdAddCircle, MdRemoveCircle, MdDeleteForever } from 'react-icons/md'
import { connect } from 'react-redux';

function Counter({counter, dispatch}) {
    return (
        <div id='counter-container'>
            <p className={counter.value === 0 ? 'zero' : ''}>
                {counter.value === 0 ? 'zero' : counter.value}
            </p>
            <button onClick={ () => dispatch({ type: 'INC', id: counter.id }) }>
                <MdAddCircle />
            </button>
            <button onClick={ () => dispatch({ type: 'DEC', id: counter.id }) }>
                <MdRemoveCircle />
            </button>
            {counter.value === 0 && <button onClick={ () => dispatch({ type: 'DEL', id: counter.id }) }>
                <MdDeleteForever />
            </button>}
        </div>
    );
}

// no need the state, only dispatch, which is given as default :)
export default connect()(Counter);