// check the array horizontally.
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word))
        {
        return true;
        };
    };
// making anew array by make the colums to be rows.
    const newArray = [];
    for (let i=0; i < letters.length; i++){
        newArray[i]=[];
        for( let j=0; j< letters[i].length; j++){
           newArray[i][j]= letters[j][i];
        };
    };
// check the new array horizontally to be as checking our main array vertically.
    const verticalJoin = newArray.map(ls => ls.join(''))
    for (let ele of verticalJoin ){
        if(ele.includes(word)){
    return true;
        };
    };
    return false;
};


module.exports = wordSearch













