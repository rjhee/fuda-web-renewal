import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Color} from "../../Assets/Color/color";
import {Font} from "../../Assets/Font/Font";

const AnalyticsTableOneCell = (props) => {
    return (
        <View style={style.cell}>
            <Text style={[style.text, props.weeks === 6 ? style.redText : '']}>{props?.data}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    cell: {
        flexGrow: 0,
        flexShrink:1,
        width: 11,
        height: 11,
        borderBottomWidth: 1,
        borderBottomColor: Color.LIGHT_GREY_6,
        borderRightWidth: 1,
        borderRightColor: Color.LIGHT_GREY_6,

    },
    text :{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: Font.SANS_BOLD,
        fontSize: 8,
        lineHeight: 11,
        color: Color.BLACK,
    },
    redText :{
        color: Color.MAIN_RED,
    }
});

export default AnalyticsTableOneCell;