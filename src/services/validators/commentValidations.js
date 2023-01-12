export class commentValidador {
  constructor(comment) {
    this.currentField = null;
    this.isValid = // case one of the validations fail this will be false
      this.keyValidation(comment) &&
      this.isText(comment.text) &&
      this.isText(comment.postedBy) &&
      this.isDate(comment.timestamp) &&
      this.isText(comment.commenterUid) &&
      this.isText(comment.commenterProfilePic, true) &&
      true; // returned value case pass all validations
  }

  keyValidation(data) {
    // check if it have all the required fields;
    // The fields need to be changed if used in another validation;

    this.currentField = data;
    // Use this in each validation to keep track where the validation is (in case of validation error you can use this key to print out where it occurred)
    return (
      "text" in data &&
      "postedBy" in data &&
      "timestamp" in data &&
      "commenterUid" in data &&
      "commenterProfilePic" in data &&
      true // returned value case pass all validations
    );
  }

  isDate(field) {
    this.currentField = field;
    return typeof field === "object"; // javascript new Date() type attribute is object
  }

  isText(field, acceptNull) {
    // have an optional second parameter, case the field can be null (in this case the image can be null (check line 10))
    this.currentField = field;
    if (acceptNull) {
      return typeof field === "string" || field === null;
    }
    return typeof field === "string";
  }
}
