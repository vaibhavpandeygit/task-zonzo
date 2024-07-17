export const isAuthenticated=()=>{
    const auth = JSON.parse(localStorage.getItem('user'))
    if(auth){
        if(auth.token){
            return true
        }
    }
    if(!auth || !auth.token){
        return false
    }
}