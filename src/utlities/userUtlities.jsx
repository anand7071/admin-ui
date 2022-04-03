export const userResponse = ()=>{
    return (
        users.map(user=>{
            user.select = false
            user.edit = false
            user.show = true
            return user
        })
    )
}