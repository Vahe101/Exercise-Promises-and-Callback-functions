function delayedUpperCase(str) {
    return promise = new Promise((resolve, reject) => {
        if (typeof str === 'string') {
            setTimeout(() => resolve((str).toUpperCase()), 500);
        } 
        else {
            setTimeout(() => reject(str), 500);
        }
    });
};

let input = 'true';
let button = document.getElementById('_button');

button.addEventListener('click', function() {
    let prom = delayedUpperCase(input);
    
    if(typeof input === 'string') {
        prom = prom.then(result => alert(result));
    }
    else {
        prom = prom.catch(result => alert(result));
    }
});
