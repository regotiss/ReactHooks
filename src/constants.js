import sadImage from './images/sad.png';
import happyImage from './images/happy.jpg';
import fearImage from './images/fear.jpg';
import sleepyImage from './images/sleepy.png';
import suprisedImage from './images/suprised.jpg';

export const ROUTES = {
    HOME: '/',
    USE_STATE_1: '/useState1',
    USE_STATE_2: '/useState2',
    USE_EFFECT: '/useEffect1',
    USE_CALLBACK: '/useCallback',
    USE_MEMO: '/useMemo',
    USE_REF: '/useRef',
    USE_REDUCER: '/useReducer',
    USE_CONTEXT: '/useContext',
};

export const EMOJIS = [
    {
        image: happyImage,
        emotion: 'Happy'
    },
    {
        image: sadImage,
        emotion: 'Sad'
    },
    {
        image: fearImage,
        emotion: 'Fear'
    },
    {
        image: sleepyImage,
        emotion: 'Sleepy'
    },
    {
        image: suprisedImage,
        emotion: 'Suprised'
    }
];