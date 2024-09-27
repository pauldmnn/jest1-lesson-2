/**
 * @jest-environment jsdom
 */

const { describe } = require("yargs");


// Loads the index.html into the jest mock DOM. 
// The below code is the same for every file 
// you want to load into the DOM jest need to change the file name
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe(" game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
});