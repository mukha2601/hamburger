const box = document.querySelector('.box')

getRandom()
function getRandom() {
   let arr = ['', '🍔', '', '', '🍔', '🍔', '🍔', '', '']
   let ranArr = [];
   let usedIndexes = [];

   let i = 0;
   while (i < arr.length) {
      let randomNumber = Math.floor(Math.random() * arr.length)
      if (!usedIndexes.includes(randomNumber)) {
         ranArr.push(arr[randomNumber]);
         usedIndexes.push(randomNumber)
         i++
      }
   }
   start(ranArr)
}


function start(ranArr) {
   box.innerHTML = ''
   ranArr.map(item => {
      const boxItemEl = document.createElement('div')
      const boxItem = document.createElement('div')
      boxItem.classList.add('box-item')
      boxItemEl.classList.add('box-item-el')
      boxItemEl.innerText = `${item}`
      boxItem.appendChild(boxItemEl)
      box.appendChild(boxItem)
   })

   const boxItemElement = document.querySelectorAll('.box-item-el')
   box.classList.add('selectNone')
   boxItemElement.forEach(item => {
      item.classList.add('opacity1')
   })
   setTimeout(() => {
      box.classList.remove('selectNone')
      boxItemElement.forEach(item => {
         item.classList.remove('opacity1')
      })

   }, 3000)

   btnClick()
}

function btnClick() {
   let clickCount = 0
   const boxItem = document.querySelectorAll('.box-item')
   boxItem.forEach(item => {
      item.addEventListener('click', () => {
         if (item.firstChild.innerText == '🍔') {
            item.firstChild.classList.add('opacity1')
            item.classList.add('selectNone')
            item.classList.add('yellow')
            clickCount++
            if (clickCount == 4) {
               box.classList.add('selectNone')
               setTimeout(() => {
                  getRandom()
               }, 3000)
            }
         }
         else {
            item.classList.add('red')
            box.classList.add('selectNone')
            setTimeout(() => {
               box.classList.remove('selectNone')
               getRandom()
            }, 3000)
         }

      })
   })
}
