const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: false,
        userDataDir: "./tmp"
    });
    const page = await browser.newPage();
    await page.goto('https://www.amazon.com/s?rh=n%3A16225007011&fs=true&ref=1p_16225007011_sar');

    const productHandles = await page.$$('div.s-main-slot.s-result-list.s-search-results.sg-row > .s-result-item');

    let items = [];

    // loop through all products
    for (const producthandle of productHandles) {

        let title = "Null";
        let price = "Null";
        let img = "Null";

        try {
            // pass the single handle below
             title = await page.evaluate((el) => el.querySelector("h2 > a > span").textContent, producthandle)

        } catch (error) {

        }

        try {

             price = await page.evaluate((el) => el.querySelector(".a-price > .a-offscreen").textContent, producthandle)

        } catch (error) {

        }

        try {

             img = await page.evaluate((el) => el.querySelector(".s-image").getAttribute('src'), producthandle)

        } catch (error) {

        }
        

        items.push(title, price, img);
    }

    console.log(items.length)


    // await browser.close();
})();