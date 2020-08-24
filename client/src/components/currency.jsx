import React, { Component } from 'react';
import '../assets/css/currency.css';

export default class Header extends Component{
    constructor(props){
        super(props);
        
        this.state = {data:false};
      }

      getValues(){
        fetch(`https://exchange-server-app.herokuapp.com/cotizacion/`+this.props.currency,
          {method: 'GET',
              headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
              }
          })
          .then((result)=>{
            result.json().
              then((result)=>{
                this.setState({data: result})
              })
          })
      }

      componentDidMount(){
        this.getValues();
        setInterval(() => {
          this.getValues();
        }, 5000);
      }
      render() {
        let data = this.state.data;
        return(
            <div className="Currency-body">
                <p className="Currency-content">Nombre: {data.name}</p>
                <p className="Currency-content">Precio: ${data.precio}</p>
            </div>
        )
    }
}