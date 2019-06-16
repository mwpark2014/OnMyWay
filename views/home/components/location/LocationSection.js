import React, { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

function LocationSection(props) {
    const [text, setText] = useState('');

    return (
        <View style={styles.searchBar}>
            <SearchBar 
                autoCapitalize="words"
                onChangeText={(text) => setText(text)}
                placeholder="Select Location"
                platform={Platform.OS}
                underlineColorAndroid="black"
                value={text}
                style={{...props.style}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        borderStyle: 'solid',
    }
});

export default LocationSection;