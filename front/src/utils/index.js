import { List, Map } from 'immutable';

export function getRandomList(nLoop = 1) {
    let balls = List();

    for(let i=0; i<nLoop; i++) {
        balls = balls.push(getRandom());
    }

     balls = balls.push({count: nLoop});
    //console.log('getRandomList - balls: '+ JSON.stringify(balls));
    return balls;
}

export function getRandom() {
    let bEven = false;
    let bCon = false;
    let bHigh = false;
    let balls = List();
    
    do {
        balls = getList();
        bEven = checkEven(balls);
        bCon = checkCon(balls);
        bHigh = checkHL(balls);
        //console.log('bEven: ', bEven, 'bCon: ', bCon, 'bHigh: ', bHigh);
        //console.log('balls: ' + JSON.stringify(balls));
    }
    while (bEven === true || bCon === true || bHigh === true);

    //console.log('testBalls: ' + JSON.stringify(testBalls.get(0)));
    return balls;
}

function getList() {
    let balls = List();
    for(let i=0; i < 6; i++) {
        //console.log('ran: ' + i + " " + getRandomNum());
        let num = getRandomNum();
        //console.log('ball: ' + JSON.stringify(ball));

        let result = balls.find( (obj) => obj.get('number') === num);
        //console.log('comp: ' + i + " " + num + " " +result);

        if ( result !== undefined) i--;
        else balls = balls.push(
            Map({
                color: getColor(num),
                number: num
            })
        );
    }

    balls = balls.sort(
        (a, b) => {
            let nRet = 0;
            if (a.get('number') < b.get('number')) { nRet = -1; }
            if (a.get('number') > b.get('number')) { nRet = 1; }
            if (a.get('number') === b.get('number')) { nRet = 0; }

            return nRet;
        }
    );

    return balls;
}

function getRandomNum() {
    return Math.floor(Math.random() * 45) + 1;
}

function getColor(num) {
    //console.log('zzzzz: ' + Math.floor(num / 10));
    const colors = [
        'orange',
        '#0080FF',
        'red',
        '#404040',
        '#009900'
    ];

    return colors[Math.floor((num-1) / 10)];
}

// 짝수 비율을 검사
function checkEven(balls) {
    let nEven = 0;
    balls.forEach(function(element) {
        //console.log(element.get('number'));
        if ( element.get('number') % 2 === 0 ) nEven++;
    }, this);

    return nEven < 2 || nEven > 4;
}

// 연속인 숫자 검사
function checkCon(balls) {
    let nCon = 0;
    let preNum = -1;
    balls.forEach(function(element) {
        //console.log(element.get('number'));
        let num = element.get('number');
        if(preNum === -1) preNum = num;
        else {
            if(num-preNum === 1) nCon++;        
        }
        //console.log("==", preNum, num);
        preNum=num;
    }, this);

    return nCon > 1;
}

// 고저 검사
function checkHL(balls) {
    let nHigh = 0;
    balls.forEach(function(element) {
        let num = element.get('number');
        if(num > 22 ) nHigh++;
    }, this);

    return nHigh < 2 || nHigh > 4;
}