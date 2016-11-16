  window.addEventListener("load",setTimeout(displayModal,3000));  
  document.getElementById('close-button').addEventListener("click",closeModal);
  function displayModal() {
    var modal = document.getElementById('myModal');
    modal.style.visibility = "visible";
  }
  
  function closeModal() {
  	var modal = document.getElementById('myModal');
  	modal.style.visibility = "hidden";
  }