import { List, Map } from 'immutable';

export function getRandom() {
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
    
    //console.log('balls: ' + JSON.stringify(balls));
    balls = balls.sort(
        (a, b) => {
            let nRet = 0;
            if (a.get('number') < b.get('number')) { nRet = -1; }
            if (a.get('number') > b.get('number')) { nRet = 1; }
            if (a.get('number') === b.get('number')) { nRet = 0; }

            return nRet;
        }
    );
    //console.log('sort balls: ' + JSON.stringify(balls));
    return balls;
}

function getRandomNum() {
    return Math.floor(Math.random() * 46) + 1;
}

function getColor(num) {
    //console.log('zzzzz: ' + Math.floor(num / 10));
    const colors = [
        'orange',
        '#0080FF',
        'red',
        '#A0A0A0',
        '#009900'
    ];

    return colors[Math.floor(num / 10)];
}