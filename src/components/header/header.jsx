import './header.css'
import { connect } from 'react-redux';

function Header({counters}) {
    return (
        <header>
            <span id='logo'>Logo</span>
            <span id='total'>Total: {counters.reduce((prev, curr) => prev += curr.value > 0 ? 1 : 0, 0)}</span>
        </header>
    );
}

export default connect(state => ({ counters: state }))(Header);