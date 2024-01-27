export const GetUserApi=async()=>{
    const user = await getData("@user");
    return fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${user?.token??""}`, 
        }, 
      })
    .then(res => res.json())
    .catch(()=>{
        return null
    })
}