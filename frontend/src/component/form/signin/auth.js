import jwtDecode from "jwt-decode"

export default function Auth(req,res,next) {

    const token = localStorage.getItem("auth-token")
    if(!token){
        console.log("No auth token found")
    }
    const data = jwtDecode(token)

    if(!(data.Email)){
        console.log("not a valid token")
    }

    if(data.StandardClaims.exp > Date.now()){
        console.log("token expired")
        localStorage.removeItem("auth-token")
    }
    return next

}
