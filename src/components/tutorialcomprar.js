import React, { Component } from "react";
import "../App.css";

class Tutorialcompras extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: 'Matheus',
            contador: 0
        };   
        
        this.diminuir = this.diminuir.bind(this);
        this.aumentar = this.aumentar.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.contador += 1;
        state.nome = 'Blusas'
        this.setState(state);
    }

    diminuir(){
        let state = this.state;
        if(state.contador === 0){
            alert('Opa chegou a zero!');
            return;
        }
        state.contador -= 1;
        this.setState(state);
    }

    render (){
        return(
            <div>
    <div class='row'>
                <div class='col-4'>
        <div class="card" >
            <img src="https://m.media-amazon.com/images/I/612L4H-VcVL._AC_SY450_.jpg" class="card-img-top" height="200px" width="150px"alt="a"/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h3>
                    <button onClick={this.diminuir} >-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar} >+</button>
                </h3>
                <button type="button" class="btn btn-success">Comprar</button>
        </div>
        </div>
        </div>
        


        
                <div class='col-4'>
            <div class="card" >
                    <img src="https://m.media-amazon.com/images/I/61ta6dl4zlL._AC_SX425_.jpg" class="card-img-top" height="200px" width="150px"alt="a"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <h3>
                    <button onClick={this.diminuir} >-</button>
                    0
                    <button onClick={this.aumentar} >+</button>
                </h3>
                <button type="button" class="btn btn-success">Comprar</button>
                    </div>
            </div>
            </div>
        

        <div class='col-4'>
        <div class="card" >
            <img src="https://images-americanas.b2w.io/produtos/01/00/img/3081357/8/3081357861_1SZ.jpg" class="card-img-top" height="200px" width="150px"alt="a"/>
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <h3>
                    <button onClick={this.diminuir} >-</button>
                   0
                    <button onClick={this.aumentar} >+</button>
                   
                </h3>
                <button type="button" class="btn btn-success">Comprar</button>
                
            </div>
        </div>
     </div>
     </div>





            </div>
        );
    }
}

export default Tutorialcompras;