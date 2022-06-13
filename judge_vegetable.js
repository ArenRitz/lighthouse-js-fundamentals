const judgeVegetable = function (vegetables, metric) {

  let arr = [];

  for (let i = 0; i < vegetables.length; i++) {
    arr.push(vegetables[i][metric])
  }
  let winner = Math.max(...arr);
  for (let j = 0; j < vegetables.length; j++) {
    if (winner === vegetables[j][metric]) {
      return vegetables[j].submitter;
    } 
  }

}







const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)

