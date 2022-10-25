@regression
Feature: WebdriverUniversity Login Page
    Background: Detail result area is opened
        Given Detail result area is opened

    Scenario Outline: Verify number of the search result
        When I enter a search key "<searchKey>"
        And I click on search button
        Then the dropdown will show <numberOfResult> suggested result
        Examples:
            | searchKey  | numberOfResult |
            | ha noi, vn | 1              |
            | ancbd, vn | 0              |
            | , vn | 5              |

    Scenario Outline: Verify when there is no result
        When I enter a search key "<searchKey>"
        And I click on search button
        Then "<notFoundMessage>" and "<notificationMessage>" " <searchKey>" are shown
        Examples:
        |searchKey    | notFoundMessage | notificationMessage |
        |abcdef    | Not found. To make search more precise put the city's name, comma, 2-letter country code (ISO3166).   | No results for |

    Scenario: Detail of result is shown when click on a suggested result
        When I enter a search key "ha noi, vn"
        And I click on search button
        And I click on the first result
        Then the result is shown in detail

    Scenario Outline: Check the correct of the result
        Given Mock data for request information of weather in "<location>"
        When I enter a search key "<location>"
        And I click on search button
        And I click on the first result
        Then the result is shown with current time is "<currentTime>", location is "<location>", temperature is "<temperature>" and summary is "<summary>"
        Examples:
            | currentTime | location | temperature | summary|
            | Oct 21, 10:30pm | Ha Noi, VN | 21°C | Feels like 22°C. Broken clouds. Light breeze |
        