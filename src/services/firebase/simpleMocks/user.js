const userMock = {
  username: "Lorem Ipsum",
  id: 123,
  introduction: "hello there, this is a mocked bio",
  resources: [1.2, 1.3, 1.4],
};

export function getUserInfo(id) {
  return id !== userMock.id
    ? {
        error: {
          message: "user not found",
        },
        user: null,
      }
    : { error: false, user: { ...userMock } };
}
