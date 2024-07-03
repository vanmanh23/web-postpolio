import React from 'react';

interface LottiePlayerProps {
    src: string;
    background: string;
    speed: string;
    style: React.CSSProperties;
    loop: boolean;
    controls: boolean;
    autoplay: boolean;
    direction: string;
    mode: string;
}

const LottiePlayer: React.FC<LottiePlayerProps> = (props) => {
    return React.createElement('lottie-player', props);
}

export default LottiePlayer;