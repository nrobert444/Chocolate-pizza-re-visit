import  React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
        <div>
            <header>
                <img src= {this.props.image8} alt = 'small-logo'/>
                <h1>Delicious</h1>
                <h6>THE BEST FOOD BLOG ON THE WEB</h6>
                <img src= {this.props.image} alt = 'facebook icon'/>
                <img src= {this.props.image1} alt = 'twitter-icon'/>
                <img src= {this.props.image2} alt = 'google-icon'/>
                <img src= {this.props.image3} alt= 'instagram-icon'/>
                <img src= {this.props.image4}alt= 'flic-icon' />
                <img src= {this.props.image5} alt = 'pinterest-icon' />
                <img src= {this.props.image6}alt= 'rss-icon' />
                <img src= {this.props.image7} alt = 'mail-icon' />
            </header>
        </div>
        );
    }
}