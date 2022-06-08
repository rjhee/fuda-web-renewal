let setLoading = null;


module.exports = {

    initialize: function(callback) {
        setLoading = callback;
    },

    start: function () {
        if (typeof setLoading === 'function')
            setLoading(true);
    },

    end: function () {
        setLoading(false);
    }

}
