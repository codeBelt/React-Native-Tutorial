/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * http://www.raywenderlich.com/99473/introducing-react-native-building-apps-javascript
 */
'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');

var styles = React.StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80
    },
    container: {
        flex: 1
    }
});

class HelloWorld extends React.Component {
    render() {
        return <React.Text style={styles.text}>Hello World (Again)</React.Text>;
    }
}

class PropertyFinder extends React.Component {
    render() {
        return (<React.NavigatorIOS style={styles.container} initialRoute={{title: 'Property Finder', component: HelloWorld}} />);
    }
}

React.AppRegistry.registerComponent('PropertyFinder', function () { return PropertyFinder; });