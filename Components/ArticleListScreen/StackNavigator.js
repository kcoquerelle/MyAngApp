import {createStackNavigator} from 'react-navigation';
import ArticleDetailsScreen from '../ArticleDetailsScreen/ArticleDetailsScreen';
import ArticleListScreen from './ArticleListScreen';
import { connect, Provider } from 'react-redux'
import {reduxifyNavigator, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers'

export const StackNav = createStackNavigator({
    Home: {
        screen: ArticleListScreen
    },
    Article: {
        screen: ArticleDetailsScreen
    }
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName: 'Home'
});

export const middleware = createReactNavigationReduxMiddleware("rootStack", state => state.navigation); // Pour connecter toutes les pages de react-navigation a redux grace au Middleware

const addListner = reduxifyNavigator(StackNav, "rootStack"); // Pour dire que l'on utilise le Navigator 'myStack'

const mapStateToProps = state => ({navigation : state.navigation}); // Pour lier le store au navigator

export default ConnectDrawer = connect(mapStateToProps)(StackNav);// Pour finir la connection a redux