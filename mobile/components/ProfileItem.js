import * as React from 'react';
import {
    View,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import ProfilData from '../profilData/ProfilData';

const ProfilItem = (props) => {
    return (
        <View>
            <FlatList
                data={ProfilData}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            // keyExtractor={item => item.id}
            />
        </View>
    );
};

export default ProfilItem;