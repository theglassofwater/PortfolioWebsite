import React, { useRef, useState } from 'react'
// import { useFrame } from '@react-three/fiber'

const TileBox = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
  // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    const [position, setPosition] = useState([GenerateRandomNum(-6,6),GenerateRandomNum(-3,3),0])

    if (clicked) {
        setPosition([GenerateRandomNum(-6,6),GenerateRandomNum(-3,3),0]);
        click(false);
        props.onDeath();
    }

    const moveBox = () => {


    }

    return (
        <mesh
            {...props}
            position={position}
            ref={ref}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>

            <boxGeometry args={[1,1,.5]}/>
            <meshStandardMaterial color={hovered ? "blue" : "red"} />
        </mesh>
  )
}


const GenerateRandomNum = (min, max) => {
    let randomNum = (Math.random() * (max - min) + min).toFixed(3);
    return randomNum;
}



export default TileBox;