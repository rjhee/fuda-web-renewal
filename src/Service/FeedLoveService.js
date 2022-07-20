let loveData = new Map();
let cntData = new Map();

module.exports = {
    set: (key, value) => {
        loveData.set(key, value);
    },

    get: (key) => {
        let result = loveData.get(key);
        //console.log('getLove: key: ',key,' cnt: ',result);
        if (result !== true) {
            return false;
        }
        return true;
    },

    setCnt: (key, value) => {
        //console.log('save: key: ',key,' cnt: ',value);
        cntData.set(key, value);
    },

    getCnt: (key) => {
        let result = cntData.get(key);
        //console.log('get: key: ',key,' cnt: ',result);
        if (result === undefined) {
            return 0;
        }
        return result;
    },
}
