let repeat = 100;
while (repeat <= 200) {

  if (repeat % 3 === 0 && repeat % 4 !== 0) {
    console.log('Loopy')
  } else if (repeat % 4 === 0 && repeat % 3 !== 0) {
    console.log('Lighthouse')
  } else if (repeat % 4 === 0 && repeat % 3 === 0) {
    console.log('LoopyLighthouse')
  } else {
    console.log(repeat);
  }
  
  

  repeat++
}