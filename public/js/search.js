function search_workId() {
  let input = document.getElementById('searchbar').value
  let x = document.getElementsByClassName('animals');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}