const { Builder, By, Key } = require("selenium-webdriver");
//var should = require("chai").should();

//describe test
describe("Test Suite 1", function() {

    //it test
    it("It successfully test the Test Suite 1", async function() {
    //launch browser
    let driver = await new Builder().forBrowser("MicrosoftEdge").build();

    //navigate to the website
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    //todo
    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);
    
    //assert
    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value) {
        return value
    });

    //assert using chai
    import('chai').then(chai => {
        todoText.should.equal("Learn Selenium");
    });

    //close driver
    await driver.quit();

    });
});