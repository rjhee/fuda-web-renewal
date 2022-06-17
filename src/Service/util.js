export let dailyWinDefine = [
    {rate:'頭獎', match:'5個'},
    {rate:'貳獎', match:'4個'},
    {rate:'頭獎', match:'3個'},
    {rate:'參獎', match:'2個'},
];

export let bigWinDefine = [
    {rate:'頭獎', match:'6個'},
    {rate:'貳獎', match:'任5個 + 特別號'},
    {rate:'參獎', match:'任5個'},
    {rate:'肆獎', match:'任4個 + 特別號'},
    {rate:'伍獎', match:'任4個'},
    {rate:'陸獎', match:'任3個 + 特別號'},
    {rate:'柒獎', match:'任2個 + 特別號'},
    {rate:'普獎', match:'任3個'},
];

export let superWinDefine = [
    {rate:'頭獎', match:'第一區6個 + 第二區'},
    {rate:'貳獎', match:'第一區6個'},
    {rate:'參獎', match:'第一區5個 + 第二區'},
    {rate:'肆獎', match:'第一區5個'},
    {rate:'伍獎', match:'第一區4個 + 第二區'},
    {rate:'陸獎', match:'第一區4個'},
    {rate:'柒獎', match:'第一區3個 + 第二區'},
    {rate:'捌獎', match:'第一區2個 + 第二區'},
    {rate:'玖獎', match:'第一區3個'},
    {rate:'普獎', match:'第一區1個 + 第二區'},
];



export const convertToChineseYear = (date) => {
    let krDay = new Date(date);
    let krDay2 = krDay.toISOString().split("T")[0];
    let krDay3 = krDay2.split('-');
    krDay3[0] = krDay3[0] - 1911;
    let CnDay = krDay3.join('.');
    return CnDay;
}