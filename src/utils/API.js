export default {
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
    const sorted = query.sort(compareToAlphabetizeFirstName);
    return sorted;
  },
};
