import React, { Component } from 'react';
import {withRouter} from 'next/router';
import {Link} from '../../routes'

class Menu1 extends Component {
    render() {
        console.log("---about page props: ", this.props)
        return (
            <div className="text-center">
                <h1>Menu1</h1>
                <Link route="/">
                <h2 className="link-to-homepage">Homepage</h2>
                </Link>'
            <style>
                {`
                    .link-to-homepage {
                        color: white;
                        text-decoration: underline;
                        background-color: #4f9a94;
                        padding: 10px;
                        cursor: pointer;
                    }
                `}
            </style>
            </div>
        );
    }
}

export default withRouter(Menu1);