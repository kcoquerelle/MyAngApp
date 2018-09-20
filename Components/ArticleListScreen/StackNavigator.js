import {createStackNavigator} from 'react-navigation';

import ArticleListScreen from './ArticleListScreen';

export default createStackNavigator({
    ArticleList: {
        screen: ArticleListScreen
    }
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});