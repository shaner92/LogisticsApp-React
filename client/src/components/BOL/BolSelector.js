import React, { Component } from 'react'
import store from '../../store/index'
import {addBol, removeBol} from '../.././actions'

export class BolSelector extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(event) {
        if(event.target.checked){
            store.dispatch(addBol({value: this.props.bol_id}));
            console.log(store.getState().selected_bol);
        }else{
            store.dispatch(removeBol({value: this.props.bol_id}));
            console.log(store.getState().selected_bol);
        }
    }

    render() {
        return (
            <td><input type="checkbox" name="name" onClick={this.handleSelect} />&nbsp;</td>
        )
    }
}

export default BolSelector
