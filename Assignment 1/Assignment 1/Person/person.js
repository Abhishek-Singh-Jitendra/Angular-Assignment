//person.js

function display(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    return (firstname + " " + lastname)
}
module.exports = { display: display }