const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: false,
        userDataDir: "./tmp"
    });
    const page = await browser.newPage();
    await page.goto('https://www.amazon.com/b?node=13585437011&pf_rd_r=CAFWTS1RYB1VZR1TN6ME&pf_rd_p=9e08f9e6-3c06-4e1a-9285-f6e9e1b21612&pd_rd_r=2e1bcd57-bb49-4b65-abad-230cc88000ee&pd_rd_w=6y8D4&pd_rd_wg=RGg8v&ref_=pd_gw_unk');

    const tweetHandles = await page.$$('.Grid-module__gridDisplayGrid_2X7cDTY7pjoTwwvSRQbt9Y');
    

    // await browser.close();
})();