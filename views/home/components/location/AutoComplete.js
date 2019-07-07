import React, { useState } from 'react';
import { Text, View } from 'react-native';

function AutoComplete(props) {
    const texts = props.places.map(place => <Text key={place}>{place}</Text>);
    return <View>{texts}</View>;
}

export default AutoComplete;
