import  React, { Component } from 'react';

export default class CpSection extends Component {
    render() {
        return (
            <section className="pizzaPic">
            <img src= {this.props.image9} alt = 'choco-pizza'/>
          </section>
        )   
     }
 }