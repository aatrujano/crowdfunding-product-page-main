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
