const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal");
let isOpenBtn = false;

openModalBtn.addEventListener("click", () =>{
  if(!isOpenBtn){
    openModal();
  }else{
    closeModal();
  }
});
closeModalBtn.addEventListener("click", closeModal);


function openModal() {
  console.log("apro modal");
  modal.classList.remove("hidden");
  openModalBtn.innerText="Chiudi Modal";
  isOpenBtn = true;
}
function closeModal() {
  console.log("chiudo modal");
  modal.classList.add("hidden");
  openModalBtn.innerText="Apri Modal";
  isOpenBtn = false;
}