import {isJwtExpired} from "jwt-check-expiration";

export function jwtValid(token){
    try {
        return isJwtExpired(token);
    } catch (error) {
        return true;        
    }
}