const list = document.querySelector('#list');
const newBtn = document.querySelector('#New');
const booklists = document.querySelector('.l_books');
const addNew = document.querySelector('.add_new');
const hbook = document.querySelector('.h_add_new');
const hlist = document.querySelector('.h_books');
const contact = document.querySelector('#cont');
const contactSC = document.querySelector('.contact');
const anchors = document.querySelectorAll('ul li a');

window.addEventListener('load', () => {
  /* eslint-disable-next-line no-undef */

  const today = new Date();
  const day = today.getDay();
  const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday ', 'Thursday', 'Friday', 'Saturday'];
  console.log(`Today is : ${daylist[day]}.`);
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  let prepand = (hour >= 12) ? ' PM ' : ' AM ';
  hour = (hour >= 12) ? hour - 12 : hour;
  if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = ' Noon';
    } else {
      hour = 12;
      prepand = ' PM';
    }
  }
  if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepand = ' Midnight';
    } else {
      hour = 12;
      prepand = ' AM';
    }
  }
  const tooday = new Date();

  const date = `${today.getFullYear()}-${tooday.getMonth() + 1}-${today.getDate()}`;
  console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);
  document.getElementById('date').innerHTML = `${date} ${daylist[day]} ${hour} : ${minute} : ${second}${prepand}`;
  // list.style = 'background-color :green';
});

list.addEventListener('click', () => {
  addNew.classList.add('hide');
  hbook.classList.add('hide');
  booklists.classList.add('show');
  hlist.classList.add('show');
  list.classList.add('ctive');
  anchors.forEach((elementNode) => {
    elementNode.classList.remove('activate');
  });
  list.classList.add('activate');

  // list.style = 'background-color :green';
  // newBtn.style = 'background-color :none';
  // contact.style = 'background-color :none';

  addNew.classList.remove('show');

  contactSC.classList.remove('show');
  contactSC.classList.add('hide');
});
newBtn.addEventListener('click', () => {
  booklists.classList.add('hide');
  booklists.classList.remove('show');
  hbook.classList.add('show');
  hbook.classList.remove('hide');

  hlist.classList.add('hide');
  hlist.classList.remove('show');

  addNew.classList.remove('hide');
  contactSC.classList.remove('show');
  contactSC.classList.add('hide');

  addNew.classList.add('show');
  anchors.forEach((elementNode) => {
    elementNode.classList.remove('activate');
  });
  newBtn.classList.add('activate');

  /* newBtn.style = 'background-color :green';
  list.style = 'background-color :none';
  contact.style = 'background-color :none'; */
});

contact.addEventListener('click', () => {
  booklists.classList.add('hide');
  booklists.classList.remove('show');
  hlist.classList.add('hide');
  hlist.classList.remove('show');
  addNew.classList.add('hide');
  addNew.classList.remove('show');
  contactSC.classList.add('show');
  anchors.forEach((elementNode) => {
    elementNode.classList.remove('activate');
  });
  contact.classList.add('activate');

  /* contact.style = 'background-color :green';
  newBtn.style = 'background-color :none';
  list.style = 'background-color :none'; */
});