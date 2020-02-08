Feature('Interview Tests');

// Scenario('test something', (I) => {
//     I.amOnPage('https://google.com');
//     I.see('Google');
// });

Scenario('Singapore', (I) => {
    I.amOnPage('https://stage.my.osome.club/companies/152612');
    I.click('Singapore');
    I.click('English');
    I.click('Incorporation');
    I.click("I'm a foreigner");
    I.click("I'm the only shareholder");
    I.click("Yes");
    // pause();
    I.waitForText('To register a company, you need a Nominee Director.', 5);
    I.waitForText('To work for your own company, you need an Employment Pass (EP) issued by your very company.', 5);
    I.waitForText('What exactly is included?', 5);
    I.waitForText('Essential Accounting', 5);
    I.waitForText('Compare Packages', 5);
    I.click('Compare Packages');
    I.waitForText('See Osome in action', 5);
});
