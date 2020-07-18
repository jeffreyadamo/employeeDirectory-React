import employeeList from "../utils/employeeList.json";

export default {

  search: (query) => {
    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const firstNameA = a.name.first.toUpperCase();
      const firstNameB = b.name.first.toUpperCase();
    
      let comparison = 0;
      if (firstNameA > firstNameB) {
        comparison = 1;
      } else if (firstNameA < firstNameB) {
        comparison = -1;
      }
      return comparison;
    }
    
    query.sort(compare);


  }
  

  
  /* returns [
    { name: 'Steven Tyler', band: 'Aerosmith',  born: 1948 },
    { name: 'Stevie Nicks', band: 'Fleetwood Mac', born: 1948 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 }
  ] */

  // function(query) {

  // function dynamicSort(query){
  //   var sortOrder = 1;

  //   if(query[0] === "-") {
  //       sortOrder = -1;
  //       query = query.substr(1);
  //   };

  //   return function (a,b) {
  //       if(sortOrder == -1){
  //           return b[query].localeCompare(a[query]);
  //       }else{
  //           return a[query].localeCompare(b[query]);
  //       }        
  //   };
  // };
  // query.sort(dynamicSort("firstName"));
  // }
}

