const checkAir = function (samples, threshold) {
  let c = 0;
  let d = 0;
  for (i = 0; i < samples.length; i++) {
    if (samples[i] === 'clean') {
      c += 1;
    } else if (samples[i] === 'dirty') {
      d += 1;
    }
  }
  let pLvl = d / (c + d); 
  if (pLvl < threshold) {
    return 'Clean';
  } else {
    return 'Polluted'
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))