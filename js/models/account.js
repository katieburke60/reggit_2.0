class Account {
  static signin(loginInfo) {
    Api.post('sessions', loginInfo)
  }
}
