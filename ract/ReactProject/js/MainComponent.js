/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    ToastAndroid
} from 'react-native';

render()
{
    return (
        <View>
            <Button onPress={() => {
                Platform.select({
                    android: ToastAndroid.show('Notif', ToastAndroid.SHORT)

                })
            }}
                    title="Press Me"/>
            <Text>{instructions}</Text>
        </View>
    )
}