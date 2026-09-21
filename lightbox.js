// Native <dialog> lightbox. Without JS the links still open the full image.
const dialog = document.createElement('dialog');
dialog.className = 'lightbox';
dialog.innerHTML = '<img alt="">';
document.body.append(dialog);

const full = dialog.querySelector('img');

for (const link of document.querySelectorAll('figure a')) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    full.src = link.href;
    full.alt = link.querySelector('img').alt;
    dialog.showModal();
  });
}

// Backdrop clicks land on the dialog itself; clicks on the image do not.
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close();
});
