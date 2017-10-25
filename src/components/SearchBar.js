import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <fieldset>
                <input
                    type="text"
                    defaultValue={this.props.value}
                    onChange={this.props.action_change}

                />

                <button onClick={this.props.action_click}>Search</button>
            </fieldset>

        )
    }
}

export default SearchBar;

