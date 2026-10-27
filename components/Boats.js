import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome6';

const Boat = ({ name, description, picture }) => {
    return (
        <View>

            <Text style = {{ fontSize: 20, fontWeight: 'bold', color: 'gray'}}>
                <Icon name={'sailboat'} size={20} /> {name}
                </Text>

            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'gray'  }}>{description}</Text>

            <Image source={picture} />

        </View>
    );
};

export default Boat;