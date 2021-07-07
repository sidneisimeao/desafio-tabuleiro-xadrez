import styles from "../styles/Casa.module.css";
export default function Casa(props) {
  let classNames = styles.casa + " ";
  classNames += props.isBlack ? styles.black : styles.white;

  return <div className={classNames}></div>;
}
