



export const convertToChineseYear = (date) => {
    let krDay = new Date(date);
    let krDay2 = krDay.toISOString().split("T")[0];
    let krDay3 = krDay2.split('-');
    krDay3[0] = krDay3[0] - 1911;
    let CnDay = krDay3.join('.');
    return CnDay;
}