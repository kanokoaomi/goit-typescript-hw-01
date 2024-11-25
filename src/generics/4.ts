type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>): User {
    return {
    name: initialValues.name || "Default Name",
    surname: initialValues.surname || "Default Surname",
    email: initialValues.email || "Default Email",
    password: initialValues.password || "Default Password",
  };
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});