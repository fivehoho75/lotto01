import BallSet from 'components/ball/BallSet'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    balls: state.get('balls'),
    count: state.get('count')
});

const mapDispatchToProps = (dispatch) => ({
});

const BallContainerNew = connect(
    mapStateToProps,
    mapDispatchToProps
)(BallSet);

export default BallContainerNew;