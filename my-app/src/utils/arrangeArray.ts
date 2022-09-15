 const arrangeArray = (arr:any[]) =>{
    return(
        [...arr].sort(() => Math.random() - 0.5)   
    )
  }
  export {arrangeArray}