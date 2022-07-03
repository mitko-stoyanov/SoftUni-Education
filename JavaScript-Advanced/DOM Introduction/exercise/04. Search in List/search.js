function search() {
   let townsList = document.querySelectorAll('ul#towns li');
   const result = document.getElementById('result');
   const searchText = document.getElementById('searchText').value;
   let totalMatches = 0;

   [...townsList].map(el => {
      el.style.fontWeight = '';
      el.style.textDecoration = ''
   })

   for (let element of townsList) {
      let text = element.textContent;
      if(text.match(searchText)) {
         totalMatches++;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
      }
   }


   result.textContent = `${totalMatches} matches found`;
}
