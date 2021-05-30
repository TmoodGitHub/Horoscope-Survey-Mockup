document.addEventListener('change', (e) => {
  // console.log(e.target.name);

  if (e.target.name === 'birth') {
    const birthDate = new Date(e.target.value);
    const month = birthDate.getUTCMonth();
    const day = birthDate.getUTCDate();

    const ageBox = document.querySelector('#number');
    ageBox.value = determineAge(birthDate);

    const zodaicBox = document.querySelector('#zodaic');
    zodaicBox.innerHTML = determineZodaic(month, day);
    console.log(determineZodaic(month, day));
  }

  if (e.target.name === 'dropdown') {
    filterOptions(e.target.value);
  } else if (e.target.name === 'planets') {
    const selection = document.querySelectorAll("[name='planets']:checked");
    const selectionArr = convertNodeToArr(selection);
    filterTheList(selectionArr);
  } else if (e.target.name === 'elements') {
    const elementList = document.querySelectorAll("input[name='elements']:checked");
    const elementArr = convertNodeToArr(elementList);
    filterTheList(elementArr);
  } else if (e.target.name === 'chinese') {
    const chineseList = document.querySelectorAll("input[name='chinese']:checked");
    const chineseArr = convertNodeToArr(chineseList);
    filterTheList(chineseArr);
  }

  if (e.target.value === 'select one') {
    const zodaicList = document.querySelectorAll('#zodaicSigns div');
    for (let item of zodaicList) {
      item.classList.remove('hide');
    }
  }
});

const convertNodeToArr = (nodeList) => {
  const newArr = [];

  for (let i = 0; i < nodeList.length; i++) {
    newArr.push(nodeList[i].value);
  }

  return newArr;
};

const filterTheList = (selectionArr) => {
  const zodaicList = document.querySelectorAll('#zodaicSigns div');

  for (let item of zodaicList) {
    item.classList.add('hide');
  }

  for (let item of zodaicList) {
    let classArr = [...item.classList];

    selectionArr.map((match) => {
      if (classArr.includes(match)) {
        item.classList.remove('hide');
      }
    });
  }

  if (selectionArr.length === 0) {
    for (let item of zodaicList) {
      item.classList.remove('hide');
    }
  }
};

const filterOptions = (target) => {
  const planet = document.querySelector('#planets');
  const elements = document.querySelector('#elements');
  const chinese = document.querySelector('#chinese');

  if (target === 'planet') {
    planet.style.display = 'block';
    elements.style.display = 'none';
    chinese.style.display = 'none';
  } else if (target === 'elements') {
    elements.style.display = 'block';
    planet.style.display = 'none';
    chinese.style.display = 'none';
  } else if (target === 'chinese') {
    chinese.style.display = 'block';
    planet.style.display = 'none';
    elements.style.display = 'none';
  } else {
    planet.style.display = 'none';
    elements.style.display = 'none';
    chinese.style.display = 'none';
  }
};

const determineZodaic = (month, day) => {
  let zodaic = '';

  if (month === 11) {
    if (day < 22) {
      zodaic = 'Sagittarius';
    } else {
      zodaic = 'Capricorn';
    }
  } else if (month === 0) {
    if (day < 20) {
      zodaic = 'Capricorn';
    } else {
      zodaic = 'Aquarius';
    }
  } else if (month === 1) {
    if (day < 19) {
      zodaic = 'Aquarius';
    } else {
      zodaic = 'Pisces';
    }
  } else if (month === 2) {
    if (day < 21) {
      zodaic = 'Pisces';
    } else {
      zodaic = 'Aries';
    }
  } else if (month === 3) {
    if (day < 20) {
      zodaic = 'Aries';
    } else {
      zodaic = 'Tarus';
    }
  } else if (month === 4) {
    if (day < 21) {
      zodaic = 'Tarus';
    } else {
      zodaic = 'Gemini';
    }
  } else if (month === 5) {
    if (day < 21) {
      zodaic = 'Gemini';
    } else {
      zodaic = 'Cancer';
    }
  } else if (month === 6) {
    if (day < 23) {
      zodaic = 'Cancer';
    } else {
      zodaic = 'Leo';
    }
  } else if (month === 7) {
    if (day < 23) {
      zodaic = 'Leo';
    } else {
      zodaic = 'Virgo';
    }
  } else if (month === 8) {
    if (day < 23) {
      zodaic = 'Virgo';
    } else {
      zodaic = 'Libra';
    }
  } else if (month === 9) {
    if (day < 23) {
      zodaic = 'Libra';
    } else {
      zodaic = 'Scorpio';
    }
  } else if (month === 10) {
    if (day < 22) {
      zodaic = 'Scorpio';
    } else {
      zodaic = 'Sagittarius';
    }
  }

  return zodaic;
};

const determineAge = (date) => {
  const currDate = new Date();
  const birthDate = new Date(date);
  let age = currDate.getFullYear() - birthDate.getFullYear();
  const month = currDate.getUTCMonth() - birthDate.getUTCMonth();

  if (month < 0 || (month === 0 && currDate.getUTCDate() < birthDate.getUTCDate())) {
    age--;
  }

  return age;
};
