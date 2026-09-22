function checkAttempt(passwords, correctPassword = '1234') {
  const attempts = Array.isArray(passwords) ? passwords : [passwords];
  let count = 0;

  for (const password of attempts) {
    count++;

    if (password === correctPassword) {
      console.log('The password is correct');
      return count;
    }

    console.log('The password is wrong:');
  }

  console.log('The password was not found in the provided attempts.');
  return count;
}

const result = checkAttempt(['abcd']);
console.log('No of attempts needed is ', result);

