
const account1 = {
  owner: "Anna Smith",
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111
};

const account2 = {
  owner: "John Doe",
  transactions: [1000, -500, 300, -250, -100, 800, -350],
  interestRate: 1.5,
  pin: 2222
};

const account3 = {
  owner: "Emily Johnson",
  transactions: [300, -200, 50, 400, -300, 600, -100, 200],
  interestRate: 1.0,
  pin: 3333
};

const account4 = {
  owner: "Michael Brown",
  transactions: [-200, 100, -300, 500, -150, 1200, -700],
  interestRate: 1.8,
  pin: 4444
};

const account5 = {
  owner: "Michael Green",
  transactions: [-200, 100, -300, 500, -150, 1200, -700],
  interestRate: 1.8,
  pin: 5555
};

const accounts = [account1,  account2, account3, account4, account5];

const transactionsCont = document.querySelector(".transitions");

// ADDING TRANSITIONS TO THE HTML:
const displayTransactions = function (transactions, sort = false) {

  transactionsCont.innerHTML = '';

  const trns = sort 
    ? transactions.slice().sort((a,b) => a - b) 
    : transactions;

  trns.forEach((tr, index) => {

    const type = tr > 0 ? 'deposit' : "withdrawal";
    
    const htmlElem = `
    <div class="transition">
      <div class="transition-type ${type}"> ${index + 1} ${type} </div>
      <div class="transition-date"> 0/0/0 </div>
      <div class="transition-sum"> ${tr} $ </div>  
    </div>
    `;

    transactionsCont.insertAdjacentHTML("afterbegin", htmlElem)

  });
};

// ADDING A NEW PROPERTY TO THE ACCOUNTS OBJECTS: 
const createUsernames = function(accounts) {
  accounts.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name, i) => name
      .split("")[0])
      .join("");
  });
}
createUsernames(accounts);

// FILTERING THE TRANSACTIONS:
const deposits = account1.transactions.filter(tr => tr > 0);
const withdrawals = account1.transactions.filter(tr => tr < 0);

// GETTING THE BALANCE:
function calcAndPrintBalance(account) {
  const balance = account.transactions.reduce((acc, elem) => acc + elem, 0); 
  currentAccount.balance = balance;
  document.querySelector(".balance-sum").innerHTML = `${balance} $`;
};
// calcAndPrintBalance(account1);

function calcAndPrintSummary(account) {
  const income = account.transactions.filter((tr) => tr > 0).reduce((acc, tr) => tr + acc);

  const outcome = account.transactions.filter((tr) => tr < 0).reduce((acc, tr) => tr + acc);

  const interest = account.transactions.filter((tr) => tr > 0).map((tr) => (tr * account.interestRate)/100).reduce((acc, tr) => tr + acc);

  document.querySelector(".income").innerHTML = `${income}$`;
  document.querySelector(".outcome").innerHTML = `${Math.abs(outcome)}$`;
  document.querySelector(".interest").innerHTML = `${Math.abs(Math.trunc(interest))}$`;
};
// calcAndPrintSummary(account1);

// rewrite later:
function toggleErrMessage(elem) {

  console.log(document.querySelector(`.${elem}`));
  document.querySelector(`.${elem}`).nextElementSibling.classList.remove("hidden");

  setTimeout(() => {
    document.querySelector(`.${elem}`).nextElementSibling.classList.add("hidden");
  }, 2000)  
}

function updateUI(account) {
  calcAndPrintBalance(account);
  calcAndPrintSummary(account);
  displayTransactions(account.transactions);
}

let currentAccount;

//  LOG IN + UI UPDATE
document.querySelector(".login-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const username = document.querySelector(".username");
  const pin = document.querySelector(".pin");

  function clearInputs() {
    username.value = "";
    pin.value = "";
  }

  const account = accounts.find((acc) => acc.username === username.value.toLowerCase());

  if (account) {
    if (account.pin === +pin.value) {
      currentAccount = account;
      document.querySelector(".main").classList.remove("hidden");
      document.querySelector(".welcome").textContent = `Welcome back, ${account.owner}!`;
      updateUI(account);
      clearInputs()
    } else {
        clearInputs();
        toggleErrMessage("pin");
    }
  } else {
    clearInputs();
    toggleErrMessage("username");
  }

});

const transferBtn = document.querySelector(".transfer-btn");
transferBtn.addEventListener("click", () => {

  const usernameInput = document.querySelector(".transfer-form").children[0].querySelector("input").value;

  const recepientAccount = accounts.find((acc) => acc.username === usernameInput ); 

  console.log(recepientAccount);

  const amount = +document.querySelector(".transfer-form").children[1].querySelector("input").value;

  if (amount > 0 && currentAccount.balance >= amount && currentAccount.username !== recepientAccount?.username) {
    console.log('transfer valid');
    currentAccount.transactions.push(-amount);
    recepientAccount.transactions.push(amount);
    updateUI(currentAccount);
  } else {
    console.log('transfer invalid');
  }
});

// CLOSE ACC
document.querySelector(".close-acc").addEventListener("click", (e) => {
  e.preventDefault();

  const userToClose = document.querySelector(".close-form").children[0].querySelector("input").value;
  const pinToClose = +document.querySelector(".close-form").children[1].querySelector("input").value;

  console.log(currentAccount);

  if (userToClose.toLowerCase() === currentAccount.username) {
    if (pinToClose === currentAccount.pin) {
      const index = accounts.findIndex(acc => acc.username === currentAccount.username);

      document.querySelector(".main").classList.add("hidden");
      accounts.splice(index, 1);
    }
  }

  document.querySelector(".close-form").children[0].querySelector("input").value = "";
  document.querySelector(".close-form").children[1].querySelector("input").value = "";
});

// LOAN
document.querySelector(".loan-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const loanAmount = +document.querySelector(".request-form").children[0].querySelector("input").value;

  if (loanAmount > 0) {
    const tenPercentDeposit = currentAccount.transactions.some((tr) => tr > loanAmount / 100 * 10);
    
    if (tenPercentDeposit) {
      currentAccount.transactions.push(loanAmount);
      updateUI(currentAccount);
    }
  }

  document.querySelector(".request-form").children[0].querySelector("input").value = "";
});

// SORT
let sorted = true;
document.querySelector(".sort").addEventListener("click", (e) => {
  e.preventDefault();

  // if (sorted) {
  //   sorted = !sorted;
  //   displayTransactions(currentAccount.transactions, true);
  // } else {
  //   sorted = !sorted;
  //   displayTransactions(currentAccount.transactions);
  // }

  displayTransactions(currentAccount.transactions, sorted);
  sorted = !sorted;
});






