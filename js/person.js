const personDataLog = ({
    firstname = "John",
    lastname = "Doe",
    age = 33
} = {
    firstname,
    lastname,
    age
}) => {
   return `My name is ${firstname} ${lastname}. I'm ${age} years old.`;
};