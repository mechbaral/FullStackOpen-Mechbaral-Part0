```mermaid
sequenceDiagram
    participant browser
    participant server

    Note left of browser: users input new value and click sumbit
    loop Display
        browser->>browser: Apped Child element li
    end
    browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
```