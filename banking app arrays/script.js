
// generating random dates because why not 
function generateRandomDate() {
  const start = new Date(2020, 0, 1); // Start date (January 1, 2020)
  const end = new Date(); // Current date and time

  const randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  const randomDate = new Date(randomTimestamp);

  return randomDate.toISOString(); // Convert to ISO format
}

const account1 = {
  owner: "Anna Smith",
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
  dates: Array.from({ length: 8 }, generateRandomDate),
  locale: "he-IL"
};

const account2 = {
  owner: "John Doe",
  transactions: [1000, -500, 300, -250, -100, 800, -350],
  interestRate: 1.5,
  pin: 2222,
  dates: Array.from({ length: 7 }, generateRandomDate),
  locale: "en-US"
};

const account3 = {
  owner: "Emily Johnson",
  transactions: [300, -200, 50, 400, -300, 600, -100, 200],
  interestRate: 1.0,
  pin: 3333,
  dates: Array.from({ length: 8 }, generateRandomDate),
  locale: "hi-IN"
};

const account4 = {
  owner: "Michael Brown",
  transactions: [-200, 100, -300, 500, -150, 1200, -700],
  interestRate: 1.8,
  pin: 4444,
  dates: Array.from({ length: 7 }, generateRandomDate),
  locale: "en-ZA"
};

const account5 = {
  owner: "Michael Green",
  transactions: [-200, 100, -300, 500, -150, 1200, -700],
  interestRate: 1.8,
  pin: 5555,
  dates: Array.from({ length: 7 }, generateRandomDate),
  locale: "en-US"
};

const accounts = [account1,  account2, account3, account4, account5];
let currentAccount;

const transactionsCont = document.querySelector(".transitions");

// ADDING TRANSITIONS TO THE HTML:
const displayTransactions = function (transactions, sort = false) {

  transactionsCont.innerHTML = '';

  const trns = sort 
    ? transactions.slice().sort((a,b) => a - b) 
    : transactions;

  trns.forEach((tr, index) => {

    const type = tr > 0 ? 'deposit' : "withdrawal";

    const trDate = new Date(currentAccount.dates[index]);

    const day = `${trDate.getDay() + 1}`.padStart(2,0);
    const month = `${trDate.getMonth() + 1}`.padStart(2,0);
    const year = trDate.getFullYear();

    console.log(trDate, day, month, year);
    
    const htmlElem = `
    <div class="transition">
      <div class="transition-type ${type}"> ${index + 1} ${type} </div>
      <div class="transition-date"> ${day}/${month}/${year} </div>
      <div class="transition-sum"> ${tr} $ </div>  
    </div>
    `;

    transactionsCont.insertAdjacentHTML("afterbegin", htmlElem)

  });
};

// experimenting with Intl API for internationalizing dates
const dateFormatter = (date, locale = navigator.language, calcDays = false) => {
  const calcDaysPassed = (date1, date2) => {
    return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  };

  // checking if the locale elem is valid 
  if (!isValidLocale(locale)) {
    console.error(`Invalid locale: ${locale}`);
    return "";
  }

  // adding options
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };

  if (calcDays) {
    const daysPassed = calcDaysPassed(new Date(), date);
    console.log(daysPassed);
    if (daysPassed === 0) {
      return "Today";
    } else if (daysPassed === 1) {
      return "Yesterday";
    } else if (daysPassed <= 7) {
      return `${daysPassed} days ago`;
    } else {
      return new Intl.DateTimeFormat(locale, options).format(date);
    }
  } else {
    return new Intl.DateTimeFormat(locale, options).format(date);
  }
};

const isValidLocale = (locale) => {
  try {
    new Intl.DateTimeFormat(locale);
    return true;
  } catch (error) {
    return false;
  }
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
      clearInputs();

      document.querySelector(".date").textContent = dateFormatter(currentAccount?.date);

      setInterval(() => {
        document.querySelector(".date").textContent = dateFormatter(currentAccount.date);
      }, 100);

    } else {
        clearInputs();
        toggleErrMessage("pin");
    }
  } else {
    clearInputs();
    toggleErrMessage("username");
  }

});

// TRANSFER
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

    currentAccount.dates.push(new Date());
    recepientAccount.dates.push(new Date());

    document.querySelector(".transfer-form").children[0].querySelector("input").value = "";
    document.querySelector(".transfer-form").children[1].querySelector("input").value = "";
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

// REQUEST
document.querySelector(".loan-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const loanAmount = +document.querySelector(".request-form").children[0].querySelector("input").value;

  if (loanAmount > 0) {
    const tenPercentDeposit = currentAccount.transactions.some((tr) => tr > loanAmount / 100 * 10);
    
    if (tenPercentDeposit) {
      currentAccount.transactions.push(loanAmount);
      currentAccount.dates.push(new Date());
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

// LOGOUT COUNTDOWN
function startCountdown() {
  const duration = 10 * 60; // 10 minutes in seconds
  let seconds = duration;

  function updateCountdown() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = `${seconds % 60}`.padStart(2,0);

    document.querySelector(".countdown-timer").textContent = `${minutes}:${remainingSeconds}`;

    console.log(`${minutes}:${remainingSeconds}`);

    if (seconds > 0) {
      seconds--;
    } else {
      console.log("Countdown completed!");
      clearInterval(countdownInterval);

      document.querySelector(".main").classList.add("hidden");
      currentAccount = "";
      document.querySelector(".welcome").textContent = "Log in to get started";
    }
  }

  // Initial call to display the initial time
  updateCountdown();

  // Set up an interval to update the countdown every second
  const countdownInterval = setInterval(updateCountdown, 500);
}

// Start the countdown
startCountdown();








