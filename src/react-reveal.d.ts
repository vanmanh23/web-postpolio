import { FadeProps, ZoomProps, BounceProps } from 'react-reveal/Fade';

 declare module 'react-reveal' {
    export const Fade: React.FC<FadeProps>;
    export const Zoom: React.FC<ZoomProps>;
    export const Bounce: React.FC<BounceProps>;
    // Các component khác của react-reveal mà bạn sử dụng.
}