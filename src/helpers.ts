const arrayOfTweets = (string: string) => {
  const array: string[] = [];
  let part;
  let pos;
  let betterPart;
  let diff;

  while (string.length > 280) {
    part = string.substr(0,280);
    pos = part.lastIndexOf(" ");
    diff = 280 - pos;
    if(diff <= 2) {
      part = string.substr(0,277);
      pos = part.lastIndexOf(" ");
    }
    betterPart = string.substr(0, pos) + ' +';
    string = string.slice(pos + 1, string.length);
    array.push(betterPart);
  }
  array.push(string);
  return array;
}

export default arrayOfTweets;