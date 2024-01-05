
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

const accounts = [account1,  account2, account3, account4];

const transactionsCont = document.querySelector(".transitions");

// ADDING TRANSITIONS TO THE HTML:
const displayTransactions = function (transactions) {
  transactions.forEach((tr, index) => {

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
// displayTransactions(account1.transactions);

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
  document.querySelector(".balance-sum").innerHTML = `${balance} $`;
};
// calcAndPrintBalance(account1);

function calcAndPrintSummary(account) {
  const income = account.transactions.filter((tr) => tr > 0).reduce((acc, tr) => tr + acc);

  const outcome = account.transactions.filter((tr) => tr < 0).reduce((acc, tr) => tr + acc);

  const interest = account.transactions.filter((tr) => tr > 0).map((tr) => (tr * account.interestRate)/100).reduce((acc, tr) => tr + acc);
  console.log(interest);

  document.querySelector(".income").innerHTML = `${income}$`;
  document.querySelector(".outcome").innerHTML = `${Math.abs(outcome)}$`;
  document.querySelector(".interest").innerHTML = `${Math.abs(Math.trunc(interest))}$`;
};
// calcAndPrintSummary(account1);

document.querySelector(".login-btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".main").classList.remove("hidden");

  const username = document.querySelector(".username").value.toLowerCase();
  const pin = document.querySelector(".pin").value;

  console.log(username);
  const account = accounts.find((acc) => acc.username === username);

  if (account.pin === pin) {
    calcAndPrintBalance(account);
    calcAndPrintSummary(account);
    displayTransactions(account.transactions);
  } else {
    pin.classList.toggle("hidden")
  }
  
});



