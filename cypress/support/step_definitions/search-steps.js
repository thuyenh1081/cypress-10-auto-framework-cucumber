import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Home from '../pageObjects/Home'
import SearchResultInDetail from '../pageObjects/SearchResultInDetail'

const homePage = new Home();
const searchResultInDetailPAge = new SearchResultInDetail();


Given('Detail result area is opened', () => {
  searchResultInDetailPAge.visitSearchResultInDetailPage();
})
// When('I enter a search key \"(.*)\"', (searchKey) =>{
When('I enter a search key {string}', (searchKey) => {
  searchResultInDetailPAge.inputSearchKey(searchKey);
})

And('I click on search button', () => {
  searchResultInDetailPAge.clickSearchBtn();
})

And('I click on the first result', () => {
  searchResultInDetailPAge.clickOnTheFirstResult();
})

Then('the dropdown will show {int} suggested result', (number) => {
  expect(searchResultInDetailPAge.getListResult().should('have.length', number));
})

Then('the result is shown in detail', () => {
  expect(searchResultInDetailPAge.getCurrentTime().should('not.be.empty'));
  expect(searchResultInDetailPAge.getLocation().should('not.be.empty'));
  expect(searchResultInDetailPAge.getTemperature().should('not.be.empty'));
  expect(searchResultInDetailPAge.getSummary().should('not.be.empty'));
})

When('Mock data for request information of weather in {string}', () => {
  cy.fixture('searchResult').then((data) => {
    cy.log(data);

  var urlLink = "https://openweathermap.org/data/2.5/onecall?lat=21.0245&lon=105.8412&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02"
  cy.intercept({
    method: "GET",
    // url: "**/data/2.5/onecall/*" },
    url: urlLink
  },
    data).as("getComment");
  })
  //   cy.request(urlLink)
  searchResultInDetailPAge.makeASearch('ha noi, vn')

  cy.wait("@getComment").its("response.statusCode").should("eq", 200);


})

Then('{string} and {string} {string} are shown',
  (notfoundMessage, notificationMgs, searchKey) => {
    expect(searchResultInDetailPAge.getNotFoundMessage().should('have.text', notfoundMessage));
    expect(searchResultInDetailPAge.getNotificationWidget().should('have.text', notificationMgs + searchKey));
  })

Then('the result is shown with current time is {string}, location is {string}, temperature is {string} and summary is {string}',
  (currentTime, location, temperature, summary) => {
    expect(searchResultInDetailPAge.getCurrentTime().should('have.text', currentTime));
    expect(searchResultInDetailPAge.getLocation().should('have.text', location));
    expect(searchResultInDetailPAge.getTemperature().should('have.text', temperature));
    expect(searchResultInDetailPAge.getSummary().contains(summary));
  })
