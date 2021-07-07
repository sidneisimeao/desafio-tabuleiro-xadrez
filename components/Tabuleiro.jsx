import Casa from "./Casa";
import styles from "../styles/Tabuleiro.module.css";

export default function Tabuleiro() {
  let startWithWhite = true;

  function preencherCor(posicao) {
    let isBlack = posicao % 2 === 0 ? true : false;

    if (!startWithWhite) {
      isBlack = !isBlack;
    }

    if (posicao % 8 === 0) {
      startWithWhite = !startWithWhite;
    }
    return isBlack;
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
