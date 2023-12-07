Architecture

    Throughout the project, I used Express, HandleBars and Angular. Express provided the html delivery while handlebars allowed the JavaScript to interact with the HTML and inject data from database queries easily. It makes 
    the whole page easier to maintain. Using the NoSQL databasae with the MEAN stack wasn't absoutely necessary, but since MongoDB uses JavaScript Notation for its objects, it is the most sensible database to use. The flexibility 
    makes it easy to use and the schema free nature makes data storage more efficient, allowing only the data you need to be stored and avoiding empty fields. The MongoDB database is lightweight and reliable and supports JavaScript.

Functionality

    JSON is a way to notate and object. An object is just an array with members and methods that allow you to retrieve and store data and access methods associated specifically to that object. JavaSript is the language that makes websites itneractive.
    They tie together by allowing the use of objects to be stored as objects into a Database or to be parsed out so that each individual members of an object can be displayed in a format on the front end. Those same object members can also be used by forms to populate 
    edit forms for quicker editing. Essentially, the JSON is a convenient way to pack up variables that have multiple properties and store them in the database or parse them into a nice looking view for the user.

    In one instance, we started with placing the trips into a card in the listing component, then moved the card funcionality to its own compnenent and left the trip listings to focus on just retrieving the trip lists. By reusing this code, I was able to show the 
    trip in a card on the delete page wtihout having to actually make a view for the trip to be delted. This reuse of a trip made it fast to make the delete trip functionality as well as consistent for the user.

Testing

    Testing was not throghouly covered in this project in a sense that no unit testing took place to make sure each component worked, but the API End Point was tested to ensure the authroization methods allowed editing and adding trips for those who
    were logged in and removed the functionality for those who were not logged in.  Using Postman for this basically allows you to havea  rudimentary and basic front end to test the addition of a trip. Other testing involved running a compenent, such as edit-trip and 
    displaying the front page to ensure the trip updated accordingly.

    In a full stack application, and end point is code that allows you to show data or to store it, display and change it. It's an interface to the functionality provided by the database and langauge to move and view data. The methods used are Create, Update, Read,
    and Delete (CRUD) and with secruity in place for an application like this, you can allow only authorized users to have the ability to run operations on the end points.

Reflection

    I have found that Angular is a bit tricky, but as I am looking to do work in the web application sector, I was pleased to learn that I would get to learn Angular. I have used NodeJS and Express before, making a back end and front end with these and EJS template engine. 
    The opportunity to use Handlebars along with Angular will certainly help in my career. I also got more practive with NodeJS and feel I learned more about it and gained a better understanding of how it works.

    Troubleshooting skills were defintely increased. There were some updates and some of the material didn't cover the changes. Having to find why certain errors occured was challenging. In some ways, I would love to have a course where the tech was up to date 
    and the problems were minimal. In a learning environment it is hard to really learn the material when you have to spend a long time debugging due to inconsistencies and deprecations. On the other hand, I have it on good authority that troubleshooting is 
    a constant process in programming, so the practice is definitely going to be a benefit in the real world. So, on this issue I am torn. I appreciate the value in it, but wish I could focus on the lesson. As a result, it really helped me in 
    identifiying how to get to the solutions quicker.
