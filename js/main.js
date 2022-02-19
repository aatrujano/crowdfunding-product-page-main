// CHECK IF THERE ARE ITEMS OUT OF STOCK
const checkForOutOfStockItems = () => {
  const rewardContainers = document.querySelectorAll(
    '.main__about-rewardContainer'
  );
  const rewards = document.querySelectorAll('.rewardInfoAndCta');

  rewards.forEach((reward, index) => {
    if (reward.children[0].children[0].innerHTML === '0') {
      reward.children[1].disabled = true;
      reward.children[1].innerHTML = 'Out of stock';
      rewardContainers[index].classList.add('outOfStock');
    }
  });
};

checkForOutOfStockItems();

// BOOKMARK BUTTON
let bookmarked = false;
const bookmark = document.getElementById('bookmarkContainer');

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

// BACK THIS PROJECT BUTTON
const backProjectButton = document.getElementById('backProject');
const backProjectModal = document.getElementById('backThisProject');
const overlay = document.getElementById('overlay');

const showBackThisProjectModal = () => {
  backProjectModal.classList.remove('removed');
  backProjectModal.classList.add('showModal');
  overlay.classList.remove('hidden');
  overlay.classList.add('shown');
  console.log('backThisButton clicked')
}

backProjectButton.addEventListener('click', showBackThisProjectModal);

//CLOSE MODAL
const closeModalIcon = document.getElementById('closeModalIcon');
 const closeBackThisProjectModal = () => {
  backProjectModal.classList.remove('showModal');
  backProjectModal.classList.add('removed');
  overlay.classList.remove('shown');
  overlay.classList.add('hidden');
 }

closeModalIcon.addEventListener('click', closeBackThisProjectModal);