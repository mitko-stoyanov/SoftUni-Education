function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let table = document.querySelectorAll('tbody tr');
      let search = document.getElementById('searchField').value;

      [...table].map(r => r.classList.remove('select'));

      for (const row of table) {
         if(row.textContent.match(search)){
            row.className = 'select';
         }
      }

      search.textContent = '';
   }
   
}