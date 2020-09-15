const puppeter = require('puppeteer');

(async () => {
    //code
    console.log('lanzamos navegador')
    // const broswer = await puppeter.launch()
    const broswer = await puppeter.launch({ headless: false })

    const page = await broswer.newPage()
    await page.goto('https://es.wikipedia.org/wiki/node.js')

    var titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    });

    console.log(titulo1);

    console.log('cerramos navegador')
    broswer.close()
    console.log('navegador cerrado')
})()