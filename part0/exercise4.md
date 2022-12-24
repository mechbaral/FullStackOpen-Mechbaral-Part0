```mermaid
note over browser:
User Type the note content in the text field and hit Save button button
end note

browser-->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
server<-->data:Update the list with the newly added
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
data<-->server:Fetch the latest dataset
server-->browser: [{ content: "This is from postman", date: "2022-12-24" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
```