import React, { Component } from "react";
import { Image } from "react-native";
import images from "../../assets/images";
import { GlobalStyles } from "../../constants/GlobalStyles";

class Checkbox extends Component {
    render() {
        const { checked } = this.props;
        return (
            <Image
                style={GlobalStyles.iconCheckbox}
                source={checked ? images.iconChecked : images.iconUnchecked}
            />
        );
    }
}

export default Checkbox;
