import React, { Component } from 'react'

export class BolSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:[]
          };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(event) {
        if(!event.target.checked){
            let selected = [...this.state.selected];
            selected.push({value: this.props.bol_id});
            this.setState({selected});
        }else{
            let selected = [...this.state.selected];
            let index = selected.indexOf(this.props.bol_id);
            selected.splice(index,1);
            this.setState({selected});

        }
    }

    render() {
        return (
            <td><input type="checkbox" name="name" onClick={this.handleSelect} />&nbsp;</td>
        )
    }
}

export default BolSelector
