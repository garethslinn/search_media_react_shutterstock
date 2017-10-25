import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';


class Media extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            items: [],
            loader: '',
            mediaType: 'images'
        };
    }

    handle_authorisation() {
        const clientId = 'ecd3e-8dc39-acfbd-54542-a5598-8acc8';
        const clientSecret = '8af9b-880dc-3f506-3bcba-24aa8-eb652';

        if (!clientId || !clientSecret) {
            console.log('not authorised');
            return;
        }
        return 'Basic ' + window.btoa(clientId + ':' + clientSecret);
    }

    handle_searchTerms(e) {
        e.preventDefault();
        const API_URL = 'https://api.shutterstock.com/v2';
        const mediaType = this.state.mediaType;
        const query = this.state.searchTerm;
        const authorisation = this.handle_authorisation();
        this.setState({loader: 'Loading...'})

        axios({
            method:'get',
            url: API_URL + '/' + mediaType + '/search',
            params: {
                query
            },
            headers: {
                Authorization: authorisation
            }
        })
        .then((response)=> {
            const items = response.data.data;
            this.setState( {items} );
            this.setState({loader: ''})

        })
    }

    render() {
        return (
            <div>
                <form>
                    <SearchBar
                        value={this.state.SearchTerm}
                        action_change={e => this.setState({searchTerm: e.target.value})}
                        action_click={(e) => this.handle_searchTerms(e)}
                    />

                </form>
                <h2>{this.state.loader}</h2>
                <div class="row">
                    {this.state.items.map(item =>
                        <Results item={item} />
                    )}
                </div>
            </div>
        );
    }
}

export default Media;