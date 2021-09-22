const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word))
        {
        return true;
        }
    }
    const newArray = [];
    for (let i=0; i < letters.length; i++){
        newArray[i]=[];
        for( let j=0; j< letters[i].length; j++){
           newArray[i][j]= letters[j][i];
        }
    }
    const verticalJoin = newArray.map(ls => ls.join(''))
    for (let ele of verticalJoin ){
        if(ele.includes(word)){
    return true;
        }
    }
    return false;
}
module.exports = wordSearch













