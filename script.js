const Modal = {
    modalbox:document.querySelector(".modal-overlay"),
    open(){
        Modal.modalbox.classList.add("active")
    },
    close(){
        Modal.modalbox.classList.remove("active")
    }
}

