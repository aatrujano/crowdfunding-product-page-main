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
  let pledgeContainers = document.querySelectorAll('.main__backThisProject-pledgeContainer');  
  pledgeContainers.forEach((container, index)=> {
    if (index === 0){
      return
    }else if(container.children[0].children[3].children[0].innerHTML === '0'){
      container.classList.add('pledgeOutOfStock');
    }
  })
  document.documentElement.scrollTop = 100;
  backProjectModal.classList.remove('removed');
  backProjectModal.classList.add('showModal');
  overlay.classList.remove('hidden');
  overlay.classList.add('shown');
};

backProjectButton.addEventListener('click', showBackThisProjectModal);

// SELECT REWARD BUTTONS
const selectRewardbuttons = document.querySelectorAll('.rewardButton');
selectRewardbuttons.forEach((button) =>
  button.addEventListener('click', showBackThisProjectModal)
);

//CLOSE MODAL
const closeModalIcon = document.getElementById('closeModalIcon');
const closeBackThisProjectModal = () => {
  backProjectModal.classList.remove('showModal');
  backProjectModal.classList.add('removed');  
};

const closeOverlay = () => {
  overlay.classList.remove('shown');
  overlay.classList.add('hidden');
}

closeModalIcon.addEventListener('click', closeBackThisProjectModal);
closeModalIcon.addEventListener('click', closeOverlay);

// CHOOSE PLEDGE
const pledgeContainers = document.querySelectorAll(
  '.main__backThisProject-pledgeContainer'
);


const showEnterPledge = (cont) => {
    pledgeContainers.forEach((container) => {
      if (container.classList.contains('showEnterPledge')) {
        container.classList.remove('showEnterPledge');
      }
      cont.classList.add('showEnterPledge');
    });
  };

pledgeContainers.forEach((container) => {
  container.addEventListener('click', () => {
    showEnterPledge(container);
  });
});

//CONFIRM PLEDGE
const updateTotalBackers = () => {
  const totalBackers = document.getElementById('totalBackers');
  let count = parseFloat(totalBackers.innerHTML.replace(/,/g, ''));
  let newCount = count + 1;
  totalBackers.innerHTML = new Intl.NumberFormat().format(newCount);
};

const updateMoneyRaised = (cont) => {
  let input = cont.children[1].children[1].children[1].value;
  let currentInput = parseFloat(input);
  const moneyRaised = document.getElementById('totalMoney');
  let currentMoney = parseFloat(moneyRaised.innerHTML.replace(/,/g, ''));
  let newMoney = currentMoney + currentInput;
  moneyRaised.innerHTML = new Intl.NumberFormat().format(newMoney);
};

const updateItemsInStock = (cont, index) => {
  let items = cont.children[0].children[3].children[0];
  let currentItems = parseFloat(items.innerHTML.replace(/,/g, ''));
  let newItems = currentItems - 1;
  let itemsInAboutModal = document.querySelectorAll('.itemsLeft')
  let itemInAboutModalToUpdate = itemsInAboutModal[index - 1].children[0];
  items.innerHTML = newItems;
  itemInAboutModalToUpdate.innerHTML = newItems;
};

const updateProgressBar = () => {
  let progressBar = document.getElementById('progressBar');
  console.log(progressBar);
  let currentMoneyRaised = parseFloat(document.getElementById('totalMoney').innerHTML.replace(/,/g, ''));

  console.log(currentMoneyRaised);
  if(currentMoneyRaised < 100000) {
    progressBar.style.width = `calc(1% * (${currentMoneyRaised} / 1000))`;
  } else {
    progressBar.style.width = '100%';
  }
}

// pledge with no reward
const confirmPledgeNoReward = () => {
  updateTotalBackers();
  closeBackThisProjectModal();
};

// pledge with reward

const initialPledgeAmounts = ['25', '75', '200'];

const confirmPledge = (cont, index) => {
  let inputAmount = cont.children[1].children[1].children[1];
  if (parseFloat(inputAmount.value) >= parseFloat(initialPledgeAmounts[index - 1])){
    updateTotalBackers();
    updateMoneyRaised(cont);
    updateItemsInStock(cont, index);
    closeBackThisProjectModal();
    updateProgressBar();
    checkForOutOfStockItems();    
    inputAmount.value = initialPledgeAmounts[index - 1];
  }
};

pledgeContainers.forEach((container, index) => {
  if (index === 0) {
    let continueButton = container.children[1].children[0].children[0];
    continueButton.addEventListener('click', () => {
      confirmPledgeNoReward();
    });
  } else {
    let continueButton = container.children[1].children[1].children[2];
    continueButton.addEventListener('click', () => {
      confirmPledge(container, index);
    });
  }
});

let inputs = document.querySelectorAll('.inputCta');

/*setTimeout(() => {
  console.log(inputs[1].value);  
}, 10000);*/
