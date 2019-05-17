import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./Button.styles";

class Button extends Component {
    render() {
        const { onPress, children, color } = this.props;

        const buttonStyles = [
            color && color === "blue" && styles.blue,
            color && color === "lightgray" && styles.lightgray
        ];

        return (
            <TouchableOpacity activeOpacity={0.8} onPress={onPress} {...this.props}>
                <View style={[styles.containerStyle, buttonStyles]}>
                    <Text style={styles.textStyle}>{children}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

Button.propTypes = {
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};

Button.defaultProps = {
    color: null
};

export default Button;
