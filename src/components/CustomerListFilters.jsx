import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

class CustomerListFilters extends Component {

    onTextChange = (e) => {
        const text = e.target.value;
        this.props.dispatch(setTextFilter(text));
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(CustomerListFilters);