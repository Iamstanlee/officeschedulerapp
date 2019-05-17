import React, { Component } from 'react'
import { Text } from 'react-native'
import styles from './Text.styles';

export default class Typography extends Component {
  render() {
    const {
      center,
      right,
      color,
      size,
      height,
      weight,
      spacing,
      h1,
      h2,
      h3,
      h4,
      paragraph,
      caption,
      medium,
      bold,
      light,
      italic,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      h4 && styles.h4,
      paragraph && styles.paragraph,
      paragraph && color === 'gray' && styles.paragraphGray,
      paragraph && color === 'gray2' && styles.paragraphGray2,
      caption && styles.caption,
      caption && medium && styles.captionMedium,
      center && styles.center,
      right && styles.right,
      color && { color },
      color && color === 'blue' && styles.blue,
      color && color === 'lightblue' && styles.lightblue,
      color && color === 'green' && styles.green,
      color && color === 'red' && styles.red,
      color && color === 'yellow' && styles.yellow,
      color && color === 'teal' && styles.teal,
      color && color === 'black' && styles.black,
      color && color === 'black2' && styles.black2,
      color && color === 'black3' && styles.black3,
      color && color === 'white' && styles.white,
      color && color === 'gray' && styles.gray,
      color && color === 'gray2' && styles.gray2,
      color && color === 'gray3' && styles.gray3,
      color && color === 'caption' && styles.caption,
      size && { fontSize: size },
      bold && styles.bold,
      light && styles.light,
      height && { lineHeight: height },
      weight && { fontWeight: weight },
      spacing && { letterSpacing: spacing },
      style
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    )
  }
}
