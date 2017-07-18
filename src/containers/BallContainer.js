import BallList from 'components/ball/BallList'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    balls: state.get('balls')
});

const mapDispatchToProps = (dispatch) => ({
});

const BallContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BallList);

export default BallContainer;