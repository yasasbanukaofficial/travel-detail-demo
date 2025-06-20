import styles from "./styles/ChatVisualizer.module.css";

export function ChatVisualizer() {
  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.section} ${styles.messageSection}`}>
        <h1>Chat</h1>
      </div>
      <div className={`${styles.section} ${styles.visualizerSection}`}>
        <h1>Visualizer</h1>
      </div>
    </div>
  );
}
