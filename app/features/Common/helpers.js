class Helper {
    ParseRequestValue(RequestValue) {
        let retval = {};
        const req_values = RequestValue.split(";");
        req_values.forEach( req_value => {
            req_value = req_value.trim();
            if (req_value != '') {
                const values = req_value.split(":");

                const key =values[0].charAt(0).toUpperCase() + values[0].slice(1) 
                retval[key] = values[1];
            }
        });

        return retval;
    }
}

module.exports = new Helper();