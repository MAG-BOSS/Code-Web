import {Strategy as JWTStrategy} from 'passport-jwt';
import {ExtractJwt as ExtractJWT} from 'passport-jwt';
import mongoose from 'mongoose';

const User = mongoose.model('users');
const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

export const passport = ()=> {
    passport.use(new JWTStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
            .then(user => {
                if(user) {
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err => console.error(err));
    }));
}