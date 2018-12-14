import React, { Component } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import history from '../history';

export default class NavHeader extends Component {
    constructor(props) {
        super(props)
    }
   
    render() {
        return (
            <nav className="navbar navbar-expand-sm BckYellow navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item active ">
                        <Link className="nav-link colorNav" to='/'>Home</Link>
                    </li>
                    {
                        this.props.addMovie &&
                        <li className="nav-item active ">
                            <button className="btn buttonSearch nav-link colorNav"
                                onClick={this.props.onClickAddMovie}>Add Movie</button>
                        </li>

                    }

                </ul>
            </nav>
        )
    }
}
