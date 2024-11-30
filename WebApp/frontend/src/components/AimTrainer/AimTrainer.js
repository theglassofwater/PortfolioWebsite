import { useState } from "react";
import Box from "./gameComponents/Box"
import TileBox from "./gameComponents/TIleBox";
import { Canvas, useFrame } from '@react-three/fiber'
import styles from './AimTrainer.module.css'

const AimTrainer = () => {
    const numOfBoxes = 3;



    return (
        <section>
            <div className={styles.canvas} >
                <Canvas >
                    <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[100, 100, 100]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-100, -100, -100]} decay={0} intensity={Math.PI} />
                    {Array.from({ length: numOfBoxes }).map((_, index) => (
                        <TileBox key={index} />
                    ))}
                </Canvas>
            </div>
        </section>
    )
}

export default AimTrainer;