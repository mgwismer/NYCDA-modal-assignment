  window.addEventListener("load",setTimeout(displayModal,3000));  
  document.getElementsByClassName('close-button')[0].addEventListener("click",closeModal);
  function displayModal() {
    var modal = document.getElementById('myModal');
    modal.style.visibility = "visible";
  }
  
  function closeModal() {
  	var modal = document.getElementById('myModal');
  	modal.style.visibility = "hidden";
  }