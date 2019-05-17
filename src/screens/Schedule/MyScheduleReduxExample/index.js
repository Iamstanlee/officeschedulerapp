/* import { connect } from 'react-redux';
import MySchedule from './MySchedule';
import { fetchData } from '../../redux/actions';
import { isLoaded, getScheduleData } from '../../redux/selectors';

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData())
  };
};

const mapStateToProps = state => {
  return {
    scheduleData: getScheduleData(state),
    isLoaded: isLoaded(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MySchedule);
*/
