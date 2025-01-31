import { useState } from "react";
import TileBox from "./gameComponents/TIleBox";
import { Canvas, useFrame } from '@react-three/fiber'
import styles from './AimTrainer.module.css'
import { Text } from "@react-three/drei";

const AimTrainer = () => {
    const numOfBoxes = 3;
    // for (let i = 0; i < numOfBoxes + 1; i++){

    // }
    const [Counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter((x) => x+1);
        console.log(Counter);
    }
    const timer = 30;
    
    return (
        <section>
            <div className={styles.canvas} >
                {/* <h1>Tile Frenzy {Counter}</h1> */}
                <Canvas className={styles.outline}>
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[100, 100, 100]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-100, -100, -100]} decay={0} intensity={Math.PI} />
                    

                    {Array.from({ length: numOfBoxes }).map((_, index) => (
                        <TileBox key={index} onDeath={incrementCounter}/>
                    ))}

                    <Text
                        position={[5.8, 3.5, 0]} // Position the text in the 3D space
                        fontSize={.5}         // Adjust font size
                        color="hotpink"      // Set text color
                    >
                    Counter: {Counter.toString()}
                    </Text>
                </Canvas>
            </div>
        </section>
    )
}

export default AimTrainer;