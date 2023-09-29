const btn = document.getElementById('modal-open');
const modal = document.querySelector('.modal');
const btn_modal = document.getElementById('modal-close');

console.log(modal);

const openModal = () => {
    modal.style.display = 'block';
}

const closeModal = () => {
    modal.style.display = 'none';
}

btn.addEventListener('click', openModal);
btn_modal.addEventListener('click', closeModal);

window.onclick = (e) => {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}