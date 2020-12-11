export default function MakeColorCodeFromMag(mag, min, max){
    /*
        minからmaxの中で、magがどのくらい大きいのかを
        評価し、カラーコードを返す。
    */
    let relative_mag = (mag-min)/(max-min);
    let int_c = Math.floor(relative_mag * 255);
    let char_c = int_c.toString(16);

    char_c = ('00' + char_c).slice(-2)
    return char_c
}