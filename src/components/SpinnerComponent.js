import React, { Component } from 'react';
import '../style.css';

export default class SpinnerComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='busy-indicator' >
                <div className='busy-background'></div>
                <h2>{this.props.message}</h2>
                <div className='busy-icon'>
                    <i className='fa fa-cog fa-spin fa-3x fa-fw'></i>
                </div>
            </div>
        )
    }
}
