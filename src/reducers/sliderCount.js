export const SET_SLIDER_COUNT = 'sliderCount/SET_SLIDER_COUNT';
export const NEXT_SLIDE = 'sliderCount/NEXT_SLIDE';
export const PREV_SLIDE = 'sliderCount/PREV_SLIDE';

export const defaultState = {
    sliderCount: 0
};

export default function reducer (state = defaultState, {type, payload}) {
    switch(type) {
        case SET_SLIDER_COUNT: {
            return Object.assign({}, state, {
                sliderCount: payload.index
            })
        }
        case NEXT_SLIDE: {
            return Object.assign({}, state, {
                sliderCount: state.sliderCount >= 11 ? 0 : state.sliderCount + 1
            })
        }
        case PREV_SLIDE: {
            return Object.assign({}, state, {
                sliderCount: state.sliderCount <= 0 ? 11 : state.sliderCount - 1
            })
        }
        default: {
            return state;
        }
    }
}

export function setSliderCount(index) {
    return {
        type: SET_SLIDER_COUNT,
        payload: {
            index
        }
    }
}

export function nextSlide() {
    return {
        type: NEXT_SLIDE
    }
}

export function prevSlide() {
    return {
        type: PREV_SLIDE
    }
}