import React, { Component } from 'react'
import store from '../../store/index'
import {selectBol} from '../.././actions'

export class BolSelector extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(event) {
            store.dispatch(selectBol({value: this.props.bol_id}));
            console.log(store.getState().selected_bol);
    }

    render() {
        return (
            <td><input type="radio" name="name" onClick={this.handleSelect} />&nbsp;</td>
        )
    }
}

export default BolSelector
