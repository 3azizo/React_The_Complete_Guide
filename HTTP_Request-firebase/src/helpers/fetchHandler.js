export async function fetchHandler(url,movie,POST=false){
    try {
        let response;
        if(POST){
             response= await fetch(url,{
                method:"POST",
                body:JSON.stringify(movie),
                Headers:{
                  "Content-Type":"application/json"
                }
              });
            }else{
                 response = await fetch(url);
                 return await response.json();
            }
        
      } catch (error) {
        throw new error(error)
      }
}