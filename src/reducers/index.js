import {combineReducers} from 'redux';
import content from './content';
import sliderCount from './sliderCount';

const root = combineReducers({
    content,
    sliderCount
});

export default root;
