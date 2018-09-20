import React, { Component } from "react";
import { View, Text, Picker, Button } from "react-native";
import { connect } from "react-redux";
import { styles } from "./ResearchStyles";
import { search } from "./../../Actions/FilterActions";

class ResearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
        category: ""
    };

    this.onPickerChange = this.onPickerChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onPickerChange(itemValue) {
    this.setState({ category: itemValue });
  }

  onSubmit() {
    this.props.search({ category: this.state.category });
  }

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.language}
          style={styles.picker}
          onValueChange={this.onPickerChange}>
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
    return state.filters
}

const mapDispatchToProps = (dispatch) => {
    return { 
        search: (research) => dispatch(search(research))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ResearchScreen)
