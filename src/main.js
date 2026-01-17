// main.js
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'loaders.css/loaders.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const formEl = document.querySelector('.form');

if (formEl) {
  formEl.addEventListener('submit', onSearch);
} else {
  console.warn('Form element not found: .form');
}

function onSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const input = form.elements['search-text'];
  const query = input.value.trim();

  if (query === '') {
    iziToast.error({ message: 'Please enter a search query!' });
    return;
  }

  form.reset();
  clearGallery();

  const MIN_LOADER_TIME = 500; // мс
  const start = Date.now();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      const hits = data && data.hits ? data.hits : [];
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        // додатково сховаємо лоадер перед поверненням
        hideLoader();
        return;
      }
      createGallery(hits);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
      });
    })
    .finally(() => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, MIN_LOADER_TIME - elapsed);
      setTimeout(() => hideLoader(), wait);
    });
}
