import {createDrawerNavigator} from 'react-navigation'
import { connect, Provider } from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {reduxifyNavigator, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'
import FilterReducer from './Reducers/FilterReducer'
import ArticlesList from './Components/ArticleListScreen/ArticleListScreen'
import Research from './Components/ResearchScreen/ResearchScreen'
import About from './Components/AboutScreen/AboutScreen'
import {StackNav} from './Components/ArticleListScreen/StackNavigator'
import ArticleReducer from './Reducers/ArticleReducer'

const Reducers = combineReducers({FilterReducer, ArticleReducer}); //Pour utiliser plusieurs Reducers

export const store = createStore(Reducers);

const MyStack = createDrawerNavigator({
  Home: {
    screen: StackNav,
  },
  Filter:{
    screen: Research,
  },
  About:{
    screen: About,
  },
},
{
  initialRouteName: "Home"
});

export const middleware = createReactNavigationReduxMiddleware("root", state => state.navigation); // Pour connecter toutes les pages de react-navigation a redux grace au Middleware

const addListner = reduxifyNavigator(MyStack, "root"); // Pour dire que l'on utilise le Navigator 'myStack'

const mapStateToProps = state => ({navigation : state.navigation}); // Pour lier le store au navigator

export default ConnectDrawer = connect(mapStateToProps)(MyStack);// Pour finir la connection a redux