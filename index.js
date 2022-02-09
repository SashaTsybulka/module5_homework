let enterNumber = + prompt("Enter your number here");

if (enterNumber === enterNumber ){
    if (typeof enterNumber=="number"){
        if (enterNumber %2 == 0){
            console.log(enterNumber + 'чётное число')
        } else { console.log (enterNumber + 'нечётное число')}
    }
} else{ console.log ( "упс, вы ошиблись")}