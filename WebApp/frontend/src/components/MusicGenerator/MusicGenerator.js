// import "../App.css";
import { useState } from "react";
import AxiosInstance from "../Axios";
import ReactAudioPlayer from 'react-audio-player';
import LoadingIcons from 'react-loading-icons'
import styles from './MusicGenerator.module.css';

let maxLength = 100;
let duration;

const MusicGenerator = () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [songInfo, setSongInfo] = useState(null);

    const generate = async (max_length) => {
        setIsGenerating(true);
        setSongInfo(null);
        try {
            duration = Date.now();
            const response = await AxiosInstance.get('generate_song', {timeout: 120000, params: {max_length: max_length}}); // This generates but doesnt actually get the tokens
            duration = Date.now() - duration;
            setSongInfo(response.data);
            console.log(response.data);
            console.log(duration);

        } catch (error) {
            console.error(error);
        };

        setIsGenerating(false);
    }

    const handleLengthChange = (e) => {
        maxLength = e.target.value;
        if (maxLength > 2048) {
            maxLength = 2048;
        }
        if (maxLength < 50) {
            maxLength = 50;
        }
    }

    return (
        <section>
            <h1>Music Generator</h1>
            
            <div className={styles.info}>
                <p>Generate a song using a Mistral model trained on MIDI files</p>
                <label>Choose number of tokens (50-2048):</label>
                <input
                    id="maxLength"
                    type="number"
                    onChange={handleLengthChange}
                />
                <button onClick={() => generate(maxLength)} disabled={isGenerating}>
                    {isGenerating ? "Generating..." : "Generate Song"}
                </button>
                {isGenerating && (
                    <>
                        <LoadingIcons.ThreeDots  className={styles.loading}/>
                        <p>May take up to a minute(depending on number of tokens)</p>
                    </>
                )}

                {songInfo &&(
                    <>
                    <ReactAudioPlayer
                        src={`${songInfo.song_url}?${global.Date.now()}`}
                        controls
                        className={styles.audio}
                    />
                    <p>Generated in {String(duration)}ms</p>
                    <img src={`${songInfo.img_url}?${global.Date.now()}`} alt="pianoroll" style={{ maxWidth: '1200px' }} />
                    <p className={styles.tokens} >
                        Tokens: Length of {songInfo.tokens.length} 
                        <br />
                         {songInfo.tokens.join(", ")}</p>
                    </>
                    )
                }
            </div>
        </section>
    );
}
export default MusicGenerator;
