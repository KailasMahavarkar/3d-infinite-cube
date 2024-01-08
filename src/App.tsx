import { useState } from 'react';
import './App.css';
import { useSwipeable } from 'react-swipeable';

import catImageOne from './assets/cat_1.webp';
import catImageTwo from './assets/cat_2.webp';
import catImageThree from './assets/cat_3.webp';
import catImageFour from './assets/cat_4.webp';

const Cube = () => {
    const [rotate, setRotate] = useState(0);

    const handler = useSwipeable({
        onSwipedLeft: () => {
            setRotate(rotate - 90);
        },
        onSwipedRight: () => {
            setRotate(rotate + 90);
        },
        trackMouse: true
    })


    return (
        <>
            <div className="scene">
                <div
                    className="cube"
                    style={{ transform: `rotateY(${rotate}deg)` }}
                    {...handler}
                >
                    <div className="cube__face cube__face--1">
                        <img src={catImageOne} />
                    </div>
                    <div className="cube__face cube__face--2">
                        <img src={catImageTwo} />
                    </div>
                    <div className="cube__face cube__face--3">
                        <img src={catImageThree} />
                    </div>
                    <div className="cube__face cube__face--4">
                        <img src={catImageFour} />
                    </div>
                </div>
            </div >
            <div className="controls">
                <button onClick={() => setRotate(rotate + 90)}>Left</button>
                <button onClick={() => setRotate(rotate - 90)}>Right</button>
            </div>
        </>
    );
};

function App() {
    return (
        <Cube />
    );
}

export default App;
