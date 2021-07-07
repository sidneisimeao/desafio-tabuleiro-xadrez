import Casa from "./Casa";
import styles from "../styles/Tabuleiro.module.css";

export default function Tabuleiro() {
  let comecaBranca = true;
  function preencherCor(posicao) {
    let color = posicao % 2 === 0 ? true : false;

    if (posicao % 8 === 0) {
      comecaBranca = !comecaBranca;
    }

    if (!comecaBranca && posicao % 8 !== 0) {
      color = !color;
    }
    return color;
  }

  function construirTabuleiro() {
    let tabuleiro = [];
    for (let i = 1; i <= 64; i++) {
      tabuleiro.push(<Casa key={i} isBlack={preencherCor(i)} />);
    }
    return tabuleiro;
  }

  return <section className={styles.tabuleiro}>{construirTabuleiro()}</section>;
}
