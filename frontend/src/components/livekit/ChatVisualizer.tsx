import {
  BarVisualizer,
  useLocalParticipant,
  useTrackTranscription,
  useVoiceAssistant,
} from "@livekit/components-react";
import styles from "./styles/ChatVisualizer.module.css";
import { useEffect, useState } from "react";
import { Track } from "livekit-client";

export function ChatVisualizer() {
  const { state, audioTrack, agentTranscriptions } = useVoiceAssistant();
  const localParticipant = useLocalParticipant();

  const { segments: userSegments } = useTrackTranscription({
    publication: localParticipant.microphoneTrack,
    source: Track.Source.Microphone,
    participant: localParticipant.localParticipant,
  });

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const msgs = [];

    userSegments?.forEach((seg) => {
      msgs.push({
        message: seg.text,
        from: {
          name: "You",
          identity: "user",
          isLocal: true,
        },
        timestamp: seg.firstReceivedTime ?? Date.now(),
      });
    });

    agentTranscriptions?.forEach((seg) => {
      msgs.push({
        message: seg.text,
        from: {
          name: "Agent",
          identity: "agent",
          isLocal: false,
        },
        timestamp: seg.firstReceivedTime ?? Date.now(),
      });
    });

    msgs.sort((a, b) => a.timestamp - b.timestamp);

    setMessages(msgs);
  }, [userSegments, agentTranscriptions]);

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.section} ${styles.messageSection}`}>
        <h1 className="text-[24px] mt-1 mb-8">Chat</h1>
        <div className={styles.msgSection}>
          {messages.map((msg, index) => {
            if (msg.from.identity === "agent") {
              return (
                <div key={index} className={`${styles.msgRow} ${styles.agentRow}`}>
                  <div className={styles.agentMsg}>
                    <p>{msg.message}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className={`${styles.msgRow} ${styles.userRow}`}>
                  <div className={styles.userMsg}>
                    <p>{msg.message}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className={`${styles.section} ${styles.visualizerSection}`}>
        <h1 className="text-[24px] mt-1">Visualizer</h1>
        <BarVisualizer
          state={state}
          trackRef={audioTrack}
          className={styles.visualizer}
          barCount={5}
        />
      </div>
    </div>
  );
}
