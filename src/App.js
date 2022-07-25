import "./styles.css";

//Desenvolva um contador que tenha as seguintes funcionalidades:
//1 - O contador não pode chegar abaixo de 0
//2 - O contador não pode chegar acima de 10

import React, { Component } from "react";
class App extends Component {
  state = {
    cont: 0
  };
  adicionar = () => {
    let { cont } = this.state;
    if (cont < 10) {
      this.setState({ cont: cont + 1 });
    }
  };
  remover = () => {
    let { cont } = this.state;
    if (cont > 0) {
      this.setState({ cont: cont - 1 });
    }
  };
  limpar = () => {
    this.setState({ cont: 0 });
  };
  render() {
    return (
      <section className="star">
        <h1>Contador</h1>
        <h2>{this.state.cont}</h2>
        <div>
          <button onClick={this.adicionar}>+</button>
          <button onClick={this.remover}>-</button>
        </div>
        <div>
          <button onClick={this.limpar}>Clean</button>
        </div>
      </section>
    );
  }
}
export default App;
