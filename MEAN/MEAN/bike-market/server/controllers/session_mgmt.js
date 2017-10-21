"use strict";
let self = module.exports = {
    init_session: function(req, res, next){
        if(req.session.user_id === undefined){
            self.reset_session(req);
        }
        next();
    },
    reset_session: function(req){
        console.log("resetting session...");
        req.session.user_id = false;
    }
}