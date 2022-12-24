sequenceDiagram
participant browser
participant server

browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
Note right of server: Update the file <br/>data.json
server-->>browser: HTML-code
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>browser: main.css
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->>browser: main.js
Note over browser: browser starts executing js-code that requests JSON data from server 
browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
Note right of server: Fetch the updated file
server-->>browser: data.json [{ content: "This is from postman", date: "2022-12-24" }, ...]
Note over browser: browser executes the event handler that renders notes to display