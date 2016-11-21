  waitThreeSeconds();

  function waitThreeSeconds() {
    window.addEventListener("load",setTimeout(modalFunction,3000,"myModal"));
  }  
  
  function modalFunction(varModal) {
    displayModal(varModal);
    //I thought in class we had used a .elements method but I could 
    //not find this anywhere. Also ElementsByClassName does not seem to work 
    //with childNodes.
    var modalContent = document.getElementById('first-modal').childNodes;
    modalContent[3].addEventListener('click',function(){
      closeModal(varModal)
    });
    modalContent[5].addEventListener('click',function(){
      (openFormModal("formModal")
    });
  }

  function displayModal(varModal) {
    var modal = document.getElementById(varModal);
    modal.style.visibility = "visible";
  }

  function closeModal(varModal) {
  	var modal = document.getElementById(varModal);
  	modal.style.visibility = "hidden";
  }

  function openFormModal(varModal) {
    closeModal("myModal");
    displayModal(varModal);
    document.getElementsByClassName('subm-button')[0].
    addEventListener('click',function() {closeModal(varModal)});
  }