import employeeList from "../utils/employeeList.json";

function sortByAlphabet(query){
  function compareToAlphabetizeFirstName(a, b) {
    const firstNameA = a.name.first.toLowerCase();
    const firstNameB = b.name.first.toLowerCase();
  
    let comparison = 0;
    if (firstNameA > firstNameB) {
      comparison = 1;
    } else if (firstNameA < firstNameB) {
      comparison = -1;
    }
    return comparison;
  }
  query.sort(compareToAlphabetizeFirstName);
}

function getFilter(query) { new Promise(function(resolve) {
  setTimeout(() => {
    resolve({
      results : employeeList.filter((obj)=>{
        return Object.keys(obj).reduce((acc, curr)=>{
              return acc || obj[curr].toLowerCase().includes(query);
        }, false);
    })
    });
  }, 1000);
})}

export default {

//   getFilter: (query) => { new Promise(function(resolve) {
//     resolve({
//       const results = employeeList.filter((obj)=>{
//           return Object.keys(obj).reduce((acc, curr)=>{
//                 return acc || obj[curr].toLowerCase().includes(query);
//           }, false);
//       })
//     }
//     )
   
// ;
//   })},


  



  filterItems : (query) => {
    const results = employeeList.filter((obj)=>{
      return Object.keys(obj).reduce((acc, curr)=>{
            return acc || obj[curr].toLowerCase().includes(query);
      }, false);
  }); 
  sortByAlphabet(results);

    
  },

  sortByAlphabet: (query) => {
    function compareToAlphabetizeFirstName(a, b) {
      const firstNameA = a.name.first.toLowerCase();
      const firstNameB = b.name.first.toLowerCase();
    
      let comparison = 0;
      if (firstNameA > firstNameB) {
        comparison = 1;
      } else if (firstNameA < firstNameB) {
        comparison = -1;
      }
      return comparison;
    }
    const sorted =  query.sort(compareToAlphabetizeFirstName);
    // console.log(sorted);
    return sorted;
  },
}

 