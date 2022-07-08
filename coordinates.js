const direction = "LEFT_TO_RIGHT"; // 'RIGHT_TO_LEFT'

const data = [
  [[0], [620], [300], [800]],
  [[0], [0], [500], [400]],
  [[320], [420], [400], [800]],
  [[420], [420], [500], [800]],
  [[0], [420], [300], [600]],
];

const area = {};

//1. data structure
// x1, y1, x2, y2
const test = data.map((cut, index) => {
  const x1 = cut.at(0).at(0);
  const y1 = cut.at(1).at(0);
  const x2 = cut.at(2).at(0);
  const y2 = cut.at(3).at(0);

  return {
    id: index,
    x1,
    y1,
    x2,
    y2,
  };
});

// 2. 대상 컷들의 묶음이 하나의 그리드 y값의 범주로 만든다.
const gridYSet = new Set();

test.forEach((cut) => {
  const y = cut.y1;
  if (gridYSet.has(y)) {
    area[y].list.push(cut);
    area[y].minY = y;
    area[y].maxY = area[y].maxY < cut.y2 ? cut.y2 : area[y].maxY;
  } else {
    gridYSet.add(y);
    area[y] = {};
    area[y].list = [cut];
    area[y].minY = y;
    area[y].maxY = cut.y2;
  }
});

Object.values(area).forEach((currentArea, _, originalArea) => {
  const targetArea = originalArea.find(
    (area) => currentArea.minY > area.minY && currentArea.maxY <= area.maxY
  );
  if (targetArea) {
    targetArea.list.push(...currentArea.list);
    delete area[currentArea.minY];
  }
});

// 3. sorting

console.log(area);

console.log("end");
