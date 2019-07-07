import React, { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { debounce } from 'lodash';

import AutoComplete from './AutoComplete';
import { getPlaceDescriptions } from './GooglePlacesAPIUtil';

function LocationSection(props) {
    const [text, setText] = useState('');
    const [places, setPlaces] = useState([]);

    return (
        <View style={styles.searchBar}>
            <SearchBar
                autoCapitalize="words"
                onChangeText={onChangeText.bind(this, setText, setPlaces)}
                placeholder="Enter A Location"
                platform={Platform.OS}
                underlineColorAndroid="black"
                value={text}
                style={{ ...props.style }}
            />
            <AutoComplete places={places} />
        </View>
    );
}

const getDebouncedPlaces = debounce((text, setPlaces) => {
    getPlaceDescriptions(text).then(places => setPlaces(places));
}, 500);

const onChangeText = (setText, setPlaces, text) => {
    setText(text);
    getDebouncedPlaces(text, setPlaces);
};

const styles = StyleSheet.create({
    searchBar: {
        borderStyle: 'solid',
    },
});

export default LocationSection;
