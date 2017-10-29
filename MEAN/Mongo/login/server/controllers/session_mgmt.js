"use strict";
let self = module.exports = {
    init_session: function(req, res, next){
        if(req.session.logged_in === undefined){
            self.reset_session(req);
        }
        next();
    },
    reset_session: function(req){
        console.log("resetting session...");
        req.session.logged_in = false;
        req.session.email = "";
        req.session.first_name = "";
        req.session.last_name = "";
        req.session.birthday = "1900-01-01";
        req.session.registration_errors = {errors: {}};
        req.session.login_errors = {errors: {}};
    }
}