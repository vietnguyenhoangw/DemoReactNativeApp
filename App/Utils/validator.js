export const isValidEmail = (email) =>
  /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/.test(email);

export const isValidPassword = (password) => /(?=.{8,})/.test(password);
