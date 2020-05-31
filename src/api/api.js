import { user } from '../constant';
export function login(info){
    let retval = false
    user.map(users => {
        if(users.username === info.email && users.password === info.password) 
        {
            localStorage.setItem('login',JSON.stringify(users))
            retval = true
        }
    })
    return retval
}
