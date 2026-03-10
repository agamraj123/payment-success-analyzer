function SearchBar({setSearch}){

 return(

  <div style={{marginBottom:"20px"}}>

   <input
    type="text"
    placeholder="Search transactions..."
    onChange={(e)=>setSearch(e.target.value)}
    style={{
      padding:"8px",
      width:"250px"
    }}
   />

  </div>

 )

}

export default SearchBar