import { connect } from 'react-redux';
import { Games } from '../components';
import {
  getGenre,
  getWindowSize,
  getLikes,
  getIsAuthenticated
} from '../selectors/CommonSelectors';
import { getGameCollectionData } from '../selectors/GamesSelectors';
import { GENRES } from '../constants/GlobalConstants';
import { changeRoute } from '../actions/RouterActions';
import { fetchGamesNext, fetchGamesIfNeeded } from '../actions/GamesActions';
import { playFullVideo } from '../actions/AppActions';
import { toggleLike } from '../actions/UserActions';

const mapStateToProps = state => { // gọi state từ store
  return {
    ...getGameCollectionData(state),
    genres: GENRES,
    genre: getGenre(state),
    windowSize: getWindowSize(state),
    likes: getLikes(state),
    isAuthenticated: getIsAuthenticated(state)
  };
};
 // mapDispatchToProps : cứ hiểu là gọi theo dang function
 //thực hiện các hành động theo case mình đã đặt
export default connect(mapStateToProps, {
  fetchGamesNext,
  fetchGamesIfNeeded,
  changeRoute,
  playFullVideo,
  toggleLike
})(Games);
