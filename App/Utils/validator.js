export const isValidEmail = (email) =>
  /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/.test(email);

export const isValidPassword = (password) => /(?=.{8,})/.test(password);

export const isValidTextWithLength = (text, limitChars, maxChars) =>
  {return true}
  // (text.length < limitChars) || Boolean(text) || (text.length > maxChars )? true : false;
