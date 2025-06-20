'use client';
import styles from './styles/Controls.module.css';
import {TrackToggle, DisconnectButton} from "@livekit/components-react";
import { Track } from "livekit-client";
import {useState} from "react";

export function Controls() {
  const [micActive, setMicActive] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);

  return (
      <div className={styles.bar}>
            <TrackToggle
              source={Track.Source.Camera}
              className={`${styles.button} ${styles.toggleBtn} ${!cameraActive ? styles.toggleBtnActive : ''}`}
              onClick={() => setCameraActive(!cameraActive)}
            />
            <TrackToggle
              source={Track.Source.Microphone}
              className={`${styles.button} ${styles.toggleBtn} ${!micActive ? styles.toggleBtnActive : ''}`}
              onClick={() => setMicActive(!micActive)}
            />
            <DisconnectButton
              className={`${styles.button} ${styles.disconnectBtn}`}
            >
              Disconnect
            </DisconnectButton>
      </div>
  )
}