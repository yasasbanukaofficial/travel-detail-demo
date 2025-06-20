'use client';
import styles from './SimpleVoiceAssistant.module.css';
import {TrackToggle, DisconnectButton, useVoiceAssistant, BarVisualizer} from "@livekit/components-react";
import { Track } from "livekit-client";
import "@livekit/components-styles";
import {useState} from "react";

export function SimpleVoiceAssistant() {
  const [micActive, setMicActive] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const { state, audioTrack } = useVoiceAssistant();

  return (
      <>
      <BarVisualizer
        state={state}
        barCount={5}
        trackRef={audioTrack}
        className="agent-visualizer"
        options={{ minHeight: 24 }}
      />
      <div className={styles.bar}>
            <TrackToggle
              source={Track.Source.Camera}
              className={`${styles.toggleBtn} ${!cameraActive ? styles.toggleBtnActive : ''}`}
              id={styles.button}
              onClick={() => setCameraActive(!cameraActive)}
            />
            <TrackToggle
              source={Track.Source.Microphone}
              className={`${styles.toggleBtn} ${!micActive ? styles.toggleBtnActive : ''}`}
              id={styles.button}
              onClick={() => setMicActive(!micActive)}
            />
            <DisconnectButton
              className={styles.disconnectBtn}
              id={styles.button}
            >
              Disconnect
            </DisconnectButton>
      </div>
    </>
  )
}