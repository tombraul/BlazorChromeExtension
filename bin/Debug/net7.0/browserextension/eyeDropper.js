window.getColor = function (element) {
    
    return new Promise((resolve, reject) => {
        const eyeDropper = new EyeDropper();
        eyeDropper.open().then(result => {
            if (result.sRGBHex) {
                resolve(result.sRGBHex);
            } else {
                reject("Could not open EyeDropper: " + error);
            }
        });
    });
};