async function main() {
    async function waitForSelector(elementCSS) {
        return new Promise(function(resolve, reject) {
            let currentInterval;
            currentInterval = setInterval(function() {
                let selector = document.querySelector(elementCSS);
                if (selector !== null) {
                    resolve(selector);
                    clearInterval(currentInterval);
                }
            }, 1);
        });
    }
    function calculateBirthday() {
        var date = new Date();
        var year = date.getUTCFullYear();
        var month = date.getUTCMonth();
        var day = date.getUTCDay();
        var age = year-2009;

        if (month >= 7) {
            if (month == 7) {
                if (day >= 14) {
                    return age;
                } else {
                    return age-1;
                }
            }
            return age;
        } else {
            return age-1;
        }
    }

    var age = await waitForSelector(".age");
    age.textContent = calculateBirthday();
}
main();