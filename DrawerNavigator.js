import {createDrawerNavigator} from 'react-navigation'
import { connect, Provider } from 'react-redux'
import {createStore, combineReducers} from 'redux'
import Test from './Components/test/Test'
import About from './Components/AboutScreen/AboutScreen'
import {reduxifyNavigator, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'
import Reducer from './Reducers/ReducerTest'

const Reducers = combineReducers({Reducer}); //Pour utiliser plusieurs Reducers

export const store = createStore(Reducers);

const MyStack = createDrawerNavigator({
  Home: {
    screen: Test,
  },
  Filter:{
    screen: Test,
  },
  About:{
    screen: About,
  },
});

export const middleware = createReactNavigationReduxMiddleware("root", state => state.navigation); // Pour connecter toutes les pages de react-navigation a redux grace au Middleware

const addListner = reduxifyNavigator(MyStack, "root"); // Pour dire que l'on utilise le Navigator 'myStack'

const mapStateToProps = state => ({navigation : state.navigation}); // Pour lier le store au navigator

export default ConnectDrawer = connect(mapStateToProps)(MyStack);// Pour finir la connection a redux