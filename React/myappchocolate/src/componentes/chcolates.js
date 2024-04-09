import React from "react";
import './App.css';
import { json } from "stream/consumers";

const requestURL = "C:\\Users\\alumne-DAM\\Documents\\Lenguaje-Marcas\\Lenguaje\\Activitat3.15\\data.json";
const request = new data.json;
request.open("GET", requestURL)

request.responseType = "json";
request.send();


class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            items : {},
            DataisLoaded: false
        };
    }
    
    componentDidMount(){
        fetch(
            "C:\\Users\\alumne-DAM\\Documents\\Lenguaje-Marcas\\Lenguaje\\Activitat3.15\\data.json")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items : json,
                    DataisLoaded: true
                });
            });
    }
    render(){
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1>Por favor espere un poco...</h1></div>;

            return (
                <div className="App">
                    <h1> Fetch data from an api in react </h1> {
                        items.datosOferta.map((item) => (
                            <ol key={item.id} >
                                User_Name: {item.nombreOferta} 
                            </ol>
                        ))
                    }
                </div>
            );
    }
    
}
export default App