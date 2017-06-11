// https://www.freecodecamp.com/challenges/truncate-a-string

function truncateString(str, num) {

  const dots = '...';

  if (num < str.length) {

    return str.slice(0, num > 3 ? num - dots.length : num) + dots;

  } else {

      return str;

  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);