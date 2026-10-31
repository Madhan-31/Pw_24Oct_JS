function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launching chrome");
    } else {
        console.log("Launching another browser");
    }
}
function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running smoke tests");
            break;

        case "sanity":
            console.log("Running sanity tests");
            break;

        case "regression":
            console.log("Running regression tests");
            break;

        default:
            console.log("Running smoke tests");
            break;
    }
}
launchBrowser("chrome");
runTests("regression");
