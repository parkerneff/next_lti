import React, {Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';
class IndexPage extends Component {
    static async getInitialProps(context) {
        console.log(context);
        return {appName: "LTI Provider"};
    }

    render () {
        return(
            <div>
                <h1>The Main Page of {this.props.appName}</h1>

            </div>
        );
    }
}



export default IndexPage;