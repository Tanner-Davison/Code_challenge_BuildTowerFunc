function towerBuilder(n) {
  var tower = [];
  for (var i = 0; i < n; i++) {
    var spaces = ' '.repeat(n -i- 1);
    var blocks = '*'.repeat(2 * i + 1);
    var floor = spaces + blocks + spaces;
    tower.push(floor);
  }
  return tower;
}

console.log(towerBuilder(20))