  waitThreeSeconds();

  function waitThreeSeconds() {
    window.addEventListener("load",setTimeout(displayModal,3000));
  }  
  
  function displayModal() {
    var modal = document.getElementById('myModal');
    modal.style.visibility = "visible";
    document.getElementsByClassName('modal-content')[0].addEventListener("click",closeModal);
    document.getElementsByClassName('modal-content')[0].addEventListener("click",openFormModal);
  }
  
  function closeModal() {
  	var modal = document.getElementById('myModal');
  	modal.style.visibility = "hidden";
  }

  function openFormModal() {
    closeModal();
    var modal = document.getElementsByClassName('form-modal')[0];
    modal.style.visibility = "visible";
  }