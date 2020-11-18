import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';


export class CustomerListFilters extends Component {

    onTextChange = (e) => {
        const text = e.target.value;
        this.props.setTextFilter(text);
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

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text))
});

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerListFilters);