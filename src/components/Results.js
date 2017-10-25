import React, { Component } from 'react';

class Results extends Component {
    render() {
        return (
            <div className="col-sm">
                <div key={this.props.item.id} className="card">
                    <a href={this.props.item.assets.preview.url}>
                        <img className="card-img-top" src={this.props.item.assets.small_thumb.url} />
                    </a>
                </div>
            </div>
        )
    }
}

export default Results;
