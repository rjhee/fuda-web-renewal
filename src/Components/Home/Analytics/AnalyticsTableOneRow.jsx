import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from "react-native";
import {Color} from "../../Assets/Color/color";
import AnalyticsTableOneCell from "./AnalyticsTableOneCell";

const AnalyticsTableOneRow = (props) => {
    const [currentDate, setCurrentDate] = useState();
    const [currentWeeks, setCurrentWeeks] = useState();


    function setWeekText(weeks){
        switch (weeks) {
            case 1 :
                return '⼀';
            case 2 :
                return '⼆';
            case 3 :
                return '㆔';
            case 4 :
                return '㆕'
            case 5 :
                return '五';
            case 6 :
                return '六';
        }
    }




    function setDayText(day){
        if(day) {
            return new Date(day).getDate();
        }else {
            return  '';
        }
    }




    useEffect(()=>{
        setCurrentDate(props.data.draw_date);
        setCurrentWeeks(new Date(props.data.draw_date).getDay());

    },[])

    useEffect(()=>{

    },[])

    return (
        <View style={style.rowCover}>
                <AnalyticsTableOneCell data={props.month}/>
                <AnalyticsTableOneCell data={setDayText(currentDate)}/>
                <AnalyticsTableOneCell data={setWeekText(currentWeeks)} weeks={currentWeeks}/>
                <AnalyticsTableOneCell data={props.data.b1}/>
                <AnalyticsTableOneCell data={props.data.b2}/>
                <AnalyticsTableOneCell data={props.data.b3}/>
                <AnalyticsTableOneCell data={props.data.b4}/>
                <AnalyticsTableOneCell data={props.data.b5}/>
        </View>
    );
};

const style = StyleSheet.create({
    rowCover: {
        flexDirection: 'row',
        flexGrow: 0,
        flexShrink:1,
        width: 89,
        borderRightColor: Color.BLACK,
        borderRightWidth: 1,
    },
});

export default AnalyticsTableOneRow;