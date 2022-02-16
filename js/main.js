// BOOKMARK BUTTON
let bookmarked = false;
const bookmark = document.getElementById('bookmarkContainer');

console.log(bookmark.innerHTML);
console.log(svg);

const toggleBookmark = () => {
  bookmarked = !bookmarked;
  bookmark.classList.toggle('bookmarked');
  if (bookmarked) {
    bookmarkButton.innerHTML = 'Bookmarked';
  } else {
    bookmarkButton.innerHTML = 'Bookmark';
  }
};

bookmark.addEventListener('click', toggleBookmark);
