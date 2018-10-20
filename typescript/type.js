var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.fullName = firstName + ' ' + lastName;
        this.birthDate = new Date().getFullYear() - age;
    }
    return User;
}());
var user = new User('Freddy', 'Midas', 25);
document.querySelector('h1').innerHTML = user.fullName + ' was burn in ' + String(user.birthDate);
