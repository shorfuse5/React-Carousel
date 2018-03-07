import { connect } from 'react-redux'
import { nextSlide, prevSlide } from '../../reducers/sliderCount';

import Slider from './Slider';

const mapStateToProps = (state) => {
    const { team } = state.content;
    const { sliderCount } = state.sliderCount;

    return {
        team: team.slice(0, 12),
        sliderNumber: sliderCount
    }
};

const mapDispatchToProps = {
    nextSlide,
    prevSlide
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)