
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
console.log(transactionsCont);

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
}

displayTransactions(account1.transactions);
