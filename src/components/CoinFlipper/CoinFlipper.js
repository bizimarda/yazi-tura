import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "",
      flipping: false,
      flipState: [],
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    let stateTurn = Math.floor(Math.random()*2);
    const finalState =  stateTurn ===0 ? "tura" : "yazı";

    this.setState({ flipping: true }, () => {
      setTimeout(()=> {
        this.setState({
          flipping: false,
          side: finalState,
          flipState: [...this.state.flipState, finalState],
        });
        console.log(this.state.flipState);
      }, 1000);
    });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
  };
  tura = () => {
		let tura = this.state.flipState.filter((value) => value === 'tura');
		return tura.length;
	};

	yazı = () => {
		let yazı = this.state.flipState.filter((value) => value === 'yazı');
		return yazı.length;
	};

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong>{this.state.flipState.length} </strong>
          atıştan
          <strong> {this.yazı()} </strong>ü tura
          <strong> {this.tura()} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
