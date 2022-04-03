class HttpEexceptions extends Error {
    constructor(status, massage, errors) {
        super();
        this.status = status;
        this.massage = massage;
        this.errors = errors;
    };
};

module.exports = HttpEexceptions;