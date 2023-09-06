npm i 
npm start

replace mongoose link in app.js 

http://localhost:3000/user/register
    - in body
        - username
        - password
http://localhost:3000/user/login
    - in body
        - username
        - password
    - in response
        -token
http://localhost:3000/user/dashboard
    - in header
        - token in authorization header
http://localhost:3000/user/addProperty
    -in header
        - token in authorization header
    - in body(example) 
        "propertyName": "Shilp enclave",
        "propertyDescription": "flats",
        "propertySummary": "3bhk flats",
        "propertyType": "Flats",
        "propertyAddress": "Shastrinagar",
        "ownerName": "Nihar",
        "propertyDate": "2023-09-05T12:40:35.054Z",
        "createdAt": "2023-09-05T12:40:35.054Z",
        "propertyImages" : []
http://localhost:3000/user/property