import { connect } from 'react-redux'
import { setSliderCount } from '../../reducers/sliderCount';
import TribeContent from './TribeContent';


const mapStateToProps = (state) => {
    const { team } = state.content;

    return {
        team: team.slice(0, 14)
    }
};

const mapDispatchToProps = {
    setSliderCount
}


export default connect(mapStateToProps, mapDispatchToProps)(TribeContent)