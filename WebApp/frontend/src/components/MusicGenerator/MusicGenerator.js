// import "../App.css";
import { useState } from "react";
import AxiosInstance from "../Axios";
import ReactAudioPlayer from 'react-audio-player';
import LoadingIcons from 'react-loading-icons'
import styles from './MusicGenerator.module.css';

const MusicGenerator = () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [song, setSong] = useState(false); 
    const [songInfo, setSongInfo] = useState(null);

    const generate = async () => {
        setIsGenerating(true);
        setSong(false);
        try {
            const response = await AxiosInstance.get('generate_song', {timeout: 60000}); // This generates but doesnt actually get the tokens
            setSongInfo(response.data);
            setSong(true);

        } catch (error) {
            console.error(error);
        };

        setIsGenerating(false);
        console.log();
    }

    return (
        <section>
            <h1>Music Generator</h1>
            
            <div className={styles.info}>
                <p>May take up to a minute</p>
                <button onClick={generate} disabled={isGenerating}>
                    {isGenerating ? "Generating..." : "Generate Song"}
                </button>
                {isGenerating && <LoadingIcons.ThreeDots  className={styles.loading}/>}

                {song &&
                    <ReactAudioPlayer
                        src={songInfo.song_url}
                        controls
                        className={styles.audio}
                    />
                }
                {song && 
                    <img src={songInfo.img_url} alt="pianoroll" style={{ maxWidth: '1200px' }} />
                }

                {song && <p>tokens: {songInfo.song}</p>}
                

            </div>
        </section>
    );
}
export default MusicGenerator;
