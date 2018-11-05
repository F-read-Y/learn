class User {
	fullName: string;
	birthDate: number;
	constructor(public firstName: string,
				public lastName: string,
				public age: number)
	{
		this.fullName = firstName + ' ' + lastName;
		this.birthDate = new Date().getFullYear() - age;
	}
}

var user = new User('Freddy', 'Midas', 25);

document.querySelector('h1').innerHTML = user.fullName + ' was burn in ' + String(user.birthDate);