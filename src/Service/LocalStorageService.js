
let asyncStorageObj = {}

const keyArray = [
    // 최근 공지, 사용자가 마지막으로 본 공지 uid.
    'noticeCurrentUid',
    'noticeNewUid',

    // modal [오늘하루안봄] 클릭한 ms 저장.
    'noLookEndModal',

    // 이미지팝업 [오늘하루안봄] 클릭한 ms 저장.
    'noLookImgPopup',

    // QR 생성한 데이터, QR code 리스트
    'qrHistoryListDaily',
    'qrHistoryListBig',
    'qrHistoryListSuper',

]

module.exports = {
    initialize : function() {
        for(let i = 0; i < keyArray.length; i++){
            asyncStorageObj[keyArray[i]] =  localStorage.getItem(keyArray[i]);
        }
    },

    get: function (key) {
        if(keyArray.indexOf(key) !== -1){
            return  asyncStorageObj[key];
        }else {
            return null;
        }
    },
    set: function (key, value) {
        if(keyArray.indexOf(key) !== -1){
            asyncStorageObj[key] = value;
        }else {
            return alert('key is nothing error!');
        }
        localStorage.setItem(key, value);
    }
}
