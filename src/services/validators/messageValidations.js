export class commentValidador {
  constructor(comment) {
    this.currentField = null;
    this.isValid =
      this.keyValidation(comment) &&
      this.isText(comment.text) &&
      this.isText(comment.postedBy) &&
      this.isDate(comment.timestamp) &&
      this.isText(comment.commenterUid) &&
      this.isText(comment.commenterProfilePic, true) &&
      true;
  }

  keyValidation(data) {
    this.currentField = data;
    return (
      "text" in data &&
      "postedBy" in data &&
      "timestamp" in data &&
      "commenterUid" in data &&
      "commenterProfilePic" in data &&
      true
    );
  }

  isDate(field) {
    this.currentField = field;
    return typeof field === "object";
  }

  isText(field, acceptNull) {
    this.currentField = field;
    if (acceptNull) {
      return typeof field === "string" || field === null;
    }
    return typeof field === "string";
  }
}
