import React, { Component } from 'react';
import queryString from "query-string"


class Blogs extends Component {

    showQuery = ()=>{
        const query = queryString.parse(this.props.location.search)
        console.log(query)
    }


    render() {
        return (
            <div>
                <h1>Blogs:</h1>
                <p>the author is  {this.props.match.params.author}</p>
               <button onClick={this.showQuery}>query string</button>
            </div>
        );
    }
}

export default Blogs;