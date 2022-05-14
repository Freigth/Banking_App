const input = document.querySelector('#submitBtn')
const envelopeFont = document.querySelector('.email-form i')
const lockFont = document.querySelector('.password-form i')
const formContainer = document.querySelector('.form-container')
const email = document.querySelector('#email')
let newPerson
var userStorage = []

// CLASS
class Bank {
  constructor(user) {
    this.user = user
    this.balance = 0
    this.expenses = []
  }
  deposit(money) {
    this.balance = this.balance + money
  }
  withdraw(withdraw) {
    if (this.balance < withdraw) {
    } else {
      this.balance = this.balance - withdraw
    }
  }
  transfer(money) {
    if (this.balance < money) {
    } else {
      this.balance = this.balance - money
    }
  }
}

class Expense extends Bank {
  addExpense(name, value) {
    this.balance = this.balance - value
    this.expenses.push([name, value])
  }

  removeExpense(index) {
    if (index < 0) {
      index = 0
    }
    let deduct = this.expenses.splice(index, 1)
    this.balance = this.balance + deduct[0][1]

    if (expenseItems.children.length > 0) {
      for (let children of expenseItems.children) {
        children.setAttribute('id', parseInt(children.id) - 1)
      }
    }
  }
}
// CLASS END

// FORM
input.addEventListener('click', checkValid)

function checkValid(form) {
  form.preventDefault()
  if (!email.checkValidity()) {
    alert('Please, fill out the email')
    envelopeFont.classList.remove('sucess')
    envelopeFont.classList.add('invalid')
  } else if (email.checkValidity()) {
    envelopeFont.classList.remove('invalid')
    envelopeFont.classList.add('sucess')
  }
  if (!password.checkValidity()) {
    alert('Please, fill out the password')
    lockFont.classList.remove('sucess')
    lockFont.classList.add('invalid')
  } else if (password.checkValidity()) {
    lockFont.classList.remove('invalid')
    lockFont.classList.add('sucess')
  }
  if (email.checkValidity() && password.checkValidity()) {
    addUser()
    envelopeFont.classList.remove('sucess', 'invalid')
    lockFont.classList.remove('sucess', 'invalid')
  }
}

// FORM END

/////////////USERS/////////////////////////////////
const greeting_container = document.querySelector('.greetings-container')
const back = document.querySelector('#back')
const users = document.querySelector('.user-input input')
const addPerson = document.querySelector('#addPerson')
const mainContainer = document.querySelector('.main-container')
const cards = document.querySelectorAll('.card-details p span')
const date = document.querySelectorAll('.card-details p')[1]
const userLogin = document.querySelector('.main-container .logo h2')

function person() {
  userLogin.textContent = newPerson.user
  mainContainer.classList.remove('hide')
  for (let card of cards) {
    let math1 = Math.floor(Math.random() * 8) + 1
    let math2 = Math.floor(Math.random() * 8) + 1
    let math3 = Math.floor(Math.random() * 8) + 1
    let math4 = Math.floor(Math.random() * 8) + 1
    card.textContent = `${math1}${math2}${math3}${math4}`
  }
  let d = new Date()
  let month = d.getMonth() + 1
  let day = d.getDate()

  if (day < 10) {
    day = `0${day}`
  }
  date.textContent = `0${month}/${day}`
}

// LOGOUT BTN
const logout = document.querySelector('#logout')

function logoutfunc() {
  formContainer.classList.remove('hide')
  mainContainer.classList.add('hide')
}

logout.addEventListener('click', logoutfunc)
// LOGOUT BTN END

//////////////////////////////////////////////////////////////// LOCALSTORAGE PLEASE IGNORE
// function addUser() {
//   localStorage.setItem('data', JSON.stringify(userStorage))
//   let users = JSON.parse(localStorage.getItem('data'))
//   let userList = users.find((e) => {
//     return e.user === email.value
//   })
//   if (userList) {
//     newPerson = userList
//   } else {
//     newPerson = new Expense(email.value)
//     userStorage.push(newPerson)
//     let div = document.createElement('DIV')
//     let spanEmail = document.createElement('SPAN')
//     let spanBalance = document.createElement('SPAN')
//     spanBalance.setAttribute('class', 'spanBalancetoUpdate')
//     spanEmail.setAttribute('class', 'spanEmails')
//     spanBalance.textContent = `balance: ${newPerson.balance}`
//     spanEmail.textContent = newPerson.user
//     div.append(spanEmail)
//     div.append(spanBalance)
//     // localStorage.setItem('data', JSON.stringify(userStorage))
//     friendsContainer.append(div)
//     for (let children of expenseItems.children) {
//       children.remove()
//     }
//   }
//   accountBalance.textContent = newPerson.balance
//   formContainer.classList.add('hide')
//   email.value = ''
//   password.value = ''
//   person()
// }
///////////////////////////////////////////////////////////////////////////////////////////////

function addUser() {
  let findUser = userStorage.find((e) => e.user === email.value)
  if (findUser) {
    newPerson = findUser

    //NEED TO ADD STORAGE EXPENSES  *****FIX ME******
  } else {
    newPerson = new Expense(email.value)
    userStorage.push(newPerson)
    console.log(`New Person Added!`)
    console.log(userStorage)
    let div = document.createElement('DIV')
    let spanEmail = document.createElement('SPAN')
    let spanBalance = document.createElement('SPAN')
    spanBalance.setAttribute('class', 'spanBalancetoUpdate')
    spanEmail.setAttribute('class', 'spanEmails')
    div.append(spanEmail)
    div.append(spanBalance)
    friendsContainer.append(div)
    for (let children of expenseItems.children) {
      children.remove()
    }
    let transactions = document.querySelectorAll('.userTransactions')
    for (let transaction of transactions) {
      transaction.remove()
    }
    for (let friends of userChecked.children) {
      friends.remove()
    }
    let send = document.querySelector('.checkName')
    send.textContent = ''
  }

  console.log(`Local Storage`)
  console.log(userStorage)
  accountBalance.textContent = newPerson.balance
  formContainer.classList.add('hide')
  email.value = ''
  password.value = ''
  person()
}

// DEPOSIT
const container = document.querySelector('.containers')
const depositContainer = document.querySelector('#deposit-container')
const depositContainerh2 = document.querySelector('#deposit-container h2')
const deposit = document.querySelector('.deposit-container')
const depositClose = document.querySelector('#x-mark')

function closeD() {
  container.classList.add('hide')
  depositContainer.classList.add('hide')
  depositContainerh2.textContent = ''
}

function openD() {
  container.classList.remove('hide')
  depositContainer.classList.remove('hide')
  depositContainerh2.textContent = ''
}

deposit.addEventListener('click', openD)
depositClose.addEventListener('click', closeD)

// WITHDRAW
const withdrawContainer = document.querySelector('#withdraw-container')
const withdrawContainerh2 = document.querySelector('#withdraw-container h2')
const withdraw = document.querySelector('.withdrawal-container')
const withdrawClose = document.querySelector('#withdraw-container .fa-x')

function openW() {
  container.classList.remove('hide')
  withdrawContainer.classList.remove('hide')
  depositContainerh2.textContent = ''
}

function closeW() {
  container.classList.add('hide')
  withdrawContainer.classList.add('hide')
  depositContainerh2.textContent = ''
}

withdraw.addEventListener('click', openW)
withdrawClose.addEventListener('click', closeW)

// MAIN
const accountBalance = document.querySelector('.balance-container h1 span')
const addMoneyInput = document.querySelector('#deposit-container input')
const withdrawMoneyInput = document.querySelector('#withdraw-container input')

// DEPOSIT MONEY
function depositMoney(e) {
  if (e.code === 'Enter') {
    if (!addMoneyInput.value) {
      alert('Please input a value')
    } else {
      newPerson.deposit(parseInt(addMoneyInput.value))
      accountBalance.textContent = newPerson.balance

      //  SAVE TO LOCAL STORAGE
      console.log(`Deposit`)
      console.log(userStorage)

      addMoneyInput.value = ''
      depositContainerh2.classList.add('sucess')
      depositContainerh2.textContent = 'Success'
      setTimeout(() => {
        depositContainerh2.classList.remove('sucess')
        depositContainerh2.textContent = ''
      }, 1000)
    }
  }
}

// WITHDRAW MONEY
function withdrawMoney(e) {
  if (e.code === 'Enter') {
    if (!withdrawMoneyInput.value) {
      alert('Please input a value')
    } else {
      if (newPerson.balance < parseInt(withdrawMoneyInput.value)) {
        withdrawContainerh2.classList.add('invalid')
        withdrawContainerh2.textContent = 'Invalid'
        setTimeout(() => {
          withdrawContainerh2.classList.remove('invalid')
          withdrawContainerh2.textContent = ''
        }, 1000)
      } else {
        withdrawContainerh2.classList.add('sucess')
        withdrawContainerh2.textContent = 'Success'
        setTimeout(() => {
          withdrawContainerh2.classList.remove('sucess')
          withdrawContainerh2.textContent = ''
        }, 1000)
      }
      newPerson.withdraw(parseInt(withdrawMoneyInput.value))

      localStorage.setItem('data', JSON.stringify(userStorage))

      // SAVE TO LOCALSTORAGE
      console.log(`Withdraw`)
      console.log(userStorage)

      accountBalance.textContent = newPerson.balance
      withdrawMoneyInput.value = ''
    }
  }
}

// TRANSFER MONEY
const userChecked = document.querySelector('.allusers')
const addName = document.querySelector('.checkName')
const addUsertoTransfer = document.querySelector('#addUsertoTrack')
const usersOnDiv = document.querySelectorAll('.printUser')
const transferMoney = document.querySelector('#transferInput')
const transferh2 = document.querySelector('.makeTransfer h2')
const transferContainer = document.querySelector('#transfer-container')
const x = document.querySelector('#transfer-container .fa-x')
const viewTransfer = document.querySelector('.transfer-container')
const trackContainer = document.querySelector('.tracker')

addName.textContent = null

function addUserToTransfer(e) {
  if (e.code === 'Enter') {
    let first = addUsertoTransfer.value[0].toUpperCase()
    let rest = addUsertoTransfer.value.slice(1).toLowerCase()
    let div = document.createElement('DIV')
    let span = document.createElement('SPAN')
    span.setAttribute('class', 'printUser')
    span.textContent = first + rest
    div.append(span)
    userChecked.append(div)
    addUsertoTransfer.value = ''
  }
  for (let i = 0; i < userChecked.children.length; i++) {
    userChecked.children[i].addEventListener('click', () => {
      addName.textContent = ''
      addName.textContent = userChecked.children[i].textContent
    })
  }
}

function transfer1(e) {
  if (e.code === 'Enter') {
    if (addName.textContent === '' || !transferMoney.value) {
      alert('Please choose a recipient and value')
      return
    } else {
      if (newPerson.balance < parseInt(transferMoney.value)) {
        transferh2.classList.add('invalid')
        transferh2.textContent = 'Invalid'
        setTimeout(() => {
          transferh2.classList.remove('invalid')
          transferh2.textContent = ''
        }, 1000)
      } else {
        addtoTrack()
        transferh2.classList.add('sucess')
        transferh2.textContent = 'Success'
        setTimeout(() => {
          transferh2.classList.remove('sucess')
          transferh2.textContent = ''
        }, 1000)
      }
    }
    newPerson.transfer(parseInt(transferMoney.value))

    // // SAVE TO LOCALSTORAGE
    console.log(`Tranfer`)
    console.log(userStorage)

    accountBalance.textContent = newPerson.balance
    transferMoney.value = ''
  }
}

function addtoTrack() {
  let li = document.createElement('LI')
  li.setAttribute('class', 'userTransactions')
  li.textContent = `You've sent $${parseInt(transferMoney.value)} to ${
    addName.textContent
  }`
  trackContainer.append(li)
}

function closeT() {
  transferContainer.classList.add('hide')
  container.classList.add('hide')
  transferh2.textContent = ''
}

function openT() {
  container.classList.remove('hide')
  transferContainer.classList.remove('hide')
  transferh2.textContent = ''
}

// EXPENSE
const expenseContainer = document.querySelector('#addExpenseContainer')
const expenseNameInput = document.querySelector('#expenseName')
const expenseValueInput = document.querySelector('#expenseValue')
const closeExpense = document.querySelector('#addExpenseContainer .fa-x')
const openExpense = document.querySelector('#addExpense')
const expenseh4 = document.querySelector('#addExpenseContainer h4')
const expenseItems = document.querySelector('.expense-items')

function closeE() {
  expenseContainer.classList.add('hide')
  container.classList.add('hide')
}

function openE() {
  expenseContainer.classList.remove('hide')
  container.classList.remove('hide')
  if (expenseItems.children.length === 0) {
    i = 0
  }
}

let i = 0

function expense(e) {
  if (e.code === 'Enter') {
    if (expenseNameInput.value && expenseValueInput.value) {
      newPerson.addExpense(
        expenseNameInput.value,
        parseInt(expenseValueInput.value)
      )
      // SAVE TO LOCAL STORAGE
      console.log(`Expense Added!`)
      console.log(userStorage)

      let div = document.createElement('DIV')
      div.setAttribute('class', 'userExpenses')
      let span1 = document.createElement('SPAN')
      let span2 = document.createElement('SPAN')
      let button = document.createElement('BUTTON')
      span1.setAttribute('class', 'expenseName')
      span1.textContent = expenseNameInput.value
      span2.setAttribute('class', 'expenseCost')
      span2.textContent = parseInt(expenseValueInput.value)
      div.setAttribute('id', i)
      button.textContent = 'x'
      i++
      div.append(span1)
      div.append(span2)

      button.addEventListener('click', () => {
        button.parentElement.remove()
        newPerson.removeExpense(parseInt(div.id))
        // SAVE TO LOCAL STORAGE
        console.log(`Expense Remove!`)
        console.log(userStorage)
        accountBalance.textContent = newPerson.balance
      })

      div.append(button)
      expenseItems.append(div)
      expenseNameInput.value = ''
      expenseValueInput.value = ''
      expenseh4.classList.add('sucess')
      expenseh4.textContent = 'Added!'
      setTimeout(() => {
        expenseh4.classList.remove('success')
        expenseh4.textContent = ''
      }, 2000)
      accountBalance.textContent = newPerson.balance
    }
  }
}

// ALLUSERS/FRIENDS
const allusersContainer = document.querySelector('#allUsers-container')
const allusersCloseBtn = document.querySelector('#allUsers-container .fa-x')
const friends = document.querySelector('.view-users')
const friendsContainer = document.querySelector('#allUsers-container')

function closeF() {
  allusersContainer.classList.add('hide')
  container.classList.add('hide')
}

function openF() {
  allusersContainer.classList.remove('hide')
  container.classList.remove('hide')
  let friendsBalance = document.querySelectorAll('.spanBalancetoUpdate')
  let friendsEmail = document.querySelectorAll('.spanEmails')

  for (let i = 0; i < friendsBalance.length; i++) {
    friendsBalance[i].textContent = `balance: ${userStorage[i].balance}`
  }

  for (let i = 0; i < friendsEmail.length; i++) {
    friendsEmail[i].textContent = `user: ${userStorage[i].user}`
  }
}

// EVENT LISTENERS
friends.addEventListener('click', openF)
allusersCloseBtn.addEventListener('click', closeF)
expenseContainer.addEventListener('keypress', expense)
openExpense.addEventListener('click', openE)
closeExpense.addEventListener('click', closeE)
viewTransfer.addEventListener('click', openT)
x.addEventListener('click', closeT)
transferMoney.addEventListener('keypress', transfer1)
addUsertoTransfer.addEventListener('keypress', addUserToTransfer)
withdrawMoneyInput.addEventListener('keypress', withdrawMoney)
addMoneyInput.addEventListener('keypress', depositMoney)
