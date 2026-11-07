import { chromium, webkit } from '@playwright/test';
async function browserLaunch() {
    // Edge - RedBus
    const edge = await chromium.launch({
        channel: 'msedge',
        headless: false
    });
    const edgePage = await edge.newPage();
    await edgePage.goto('https://www.redbus.in');
    console.log("RedBus Title:", await edgePage.title());
    console.log("RedBus URL:", edgePage.url());
    // WebKit - Flipkart
    const webkitBrowser = await webkit.launch({
        headless: false
    });
    const webkitPage = await webkitBrowser.newPage();
    await webkitPage.goto('https://www.flipkart.com');
    console.log("Flipkart Title:", await webkitPage.title());
    console.log("Flipkart URL:", webkitPage.url());
    await edge.close();
    await webkitBrowser.close();
}
browserLaunch().catch(console.error);
