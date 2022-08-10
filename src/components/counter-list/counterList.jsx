import './counterList.css'
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