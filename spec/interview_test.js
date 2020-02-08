Feature('Interview Tests');

Scenario('Singapore', (I) => {
    I.amOnPage('https://stage.my.osome.club/companies/152612');
    I.click('Singapore');
    I.click('English');
    I.click('Incorporation');
    I.click("I'm a foreigner");
    I.click("I'm the only shareholder");
    I.click("Yes");
    I.waitForText('To register a company, you need a Nominee Director.');
    I.waitForText('To work for your own company');
    I.waitForText('What exactly is included?');
    I.waitForText('Essential Accounting');
    I.waitForText('Compare Packages');
    I.click('Compare Packages');
    I.switchToNextTab();
    I.waitForText('See Osome in action');
    I.see('See Osome in action');
});
