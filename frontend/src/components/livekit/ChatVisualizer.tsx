import {
  BarVisualizer,
  ChatEntry,
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

  // ✅ USER mic segments
  const { segments: userSegments } = useTrackTranscription({
    publication: localParticipant.microphoneTrack,
    source: Track.Source.Microphone,
    participant: localParticipant.localParticipant,
  });

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const msgs = [];

    // ✅ Helper to clean up line breaks & extra spaces
    const clean = (text) =>
      text?.replace(/\s*\n\s*/g, " ").replace(/\s+/g, " ").trim();

    // User messages
    userSegments?.forEach((seg) => {
      msgs.push({
        message: clean(seg.text),
        from: {
          name: "You",
          identity: "user",
          isLocal: true,
        },
        timestamp: seg.firstReceivedTime ?? Date.now(),
      });
    });

    // Agent messages
    agentTranscriptions?.forEach((seg) => {
      msgs.push({
        message: clean(seg.text),
        from: {
          name: "Agent",
          identity: "agent",
          isLocal: false,
        },
        timestamp: seg.firstReceivedTime ?? Date.now(),
      });
    });

    // Sort by timestamp, then limit to last 5
    msgs.sort((a, b) => a.timestamp - b.timestamp);
    const lastFive = msgs.slice(-5);

    setMessages(lastFive);
  }, [userSegments, agentTranscriptions]);

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.section} ${styles.messageSection}`}>
        <h1 className="text-[24px] mt-1">Chat</h1>
        <div className={styles.aiMsg}>
          {messages.map((msg, index) => (
            <ChatEntry key={index} entry={msg} />
          ))}
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
