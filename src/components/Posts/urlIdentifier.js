const httpRegex =
  /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/g;

export function isUrl(str) {
  return str.match(httpRegex) ? true : false;
}

export function splitString(string) {
  const corrected = string.replaceAll(httpRegex, "<url*>$1<url*>");
  const stringArr = corrected.split("<url*>");
  return stringArr;
}
