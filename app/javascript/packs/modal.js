import tingle from 'tingle.js'
import 'tingle.js/src/tingle.css';
import { Bootstrap } from './application'

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos elementos que tem data-modal-id
    document.querySelectorAll("[data-modal-id]").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const modal = new tingle.modal({
                closeMethods: ['overlay', 'escape'],
                cssClass: ['instragram-modal']
            });

            const modalContent = document.querySelector(`#${button.dataset.modalId}`).innerHTML
            modal.setContent(modalContent);
            modal.open();
        })
    })
})
//
// document.addEventListener('DOMContentLoaded', () => {
//
// })