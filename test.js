function redistributeWealth(wealth) {
    void wealth;
    var average = 0;
    var i = 0;
    while (i < wealth.length) {
        average += wealth[i];
        i++;
    }

    average = average / i
    //Array to store average wealth
    //reDis = []
    i = 0;
    while (i < wealth.length) {
        wealth[i] = average
        i++
    }
    return
}