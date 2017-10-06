"use strict";
let self = module.exports = {
    init_session: function(req, res, next){
        if(req.session.name === undefined){
            self.reset_session(req);
        }
        next();
    },
    reset_session: function(req){
        req.session.name = "";
        req.session.weight = 0;
        req.session.errors = undefined;
    }
}