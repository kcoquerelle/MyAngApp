import React, { Component } from "react";
import { View, Picker, Button } from "react-native";
import { connect } from "react-redux";
import { styles } from "./ResearchStyles";
import { search } from "./../../Actions/FilterActions";

class ResearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
        category: "all"
    };

    this.onPickerChange = this.onPickerChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onPickerChange(itemValue) {
    if (this.state.category !== "0") this.setState({ category: itemValue });
  }

  onSubmit() {
    this.props.search({ category: this.state.category });
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.category}
          style={styles.picker}
          onValueChange={this.onPickerChange}>
          <Picker.Item label="Tous les articles" value="all" />
          <Picker.Item label="Sports" value="sports" />
          <Picker.Item label="Jeux vidéo" value="jeux" />
          <Picker.Item label="Politique" value="politique" />
        </Picker>
        <Button title="Submit" onPress={this.onSubmit} />
      </View>
    );
  }
}

const mapStateToProps = state => {
    return state.FilterReducer.filters
}

const mapDispatchToProps = (dispatch) => {
    return { 
        search: (research) => dispatch(search(research))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ResearchScreen)
