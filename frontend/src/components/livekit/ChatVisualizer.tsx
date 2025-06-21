import {BarVisualizer, useVoiceAssistant} from "@livekit/components-react";
import styles from "./styles/ChatVisualizer.module.css";

export function ChatVisualizer() {
    const { state, audioTrack } = useVoiceAssistant();
    return (
      <div className={styles.mainContainer}>
        <div className={`${styles.section} ${styles.messageSection}`}>
          <h1 className={"text-[24px] mt-1"}> Chat </h1>
        </div>
        <div className={`${styles.section} ${styles.visualizerSection}`}>
          <h1 className={"text-[24px] mt-1"}> Visualizer </h1>
            <BarVisualizer state={state} trackRef={audioTrack} className={styles.visualizer} barCount={5}/>
        </div>
      </div>
    );
}
