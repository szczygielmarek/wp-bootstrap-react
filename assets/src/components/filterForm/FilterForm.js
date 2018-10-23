import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class FilterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            filter: event.target.value
        });
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div className="o-section--small input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-search"></i>
                    </div>
                </div>
                <input type="text" 
                    className="form-control" 
                    name="search" 
                    placeholder="Search" 
                    value={this.state.filter} 
                    onChange={this.handleChange} />
            </div>
        );
    }
}

FilterForm.propTypes = {
    onChange: PropTypes.func.isRequired
};