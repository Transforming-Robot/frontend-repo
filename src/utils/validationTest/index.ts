export function validationTest(id: string, value: string, password?: string) {
  let currentRegExp = new RegExp(``);
  switch (id) {
    case 'email':
      currentRegExp =
        /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
      break;

    case 'password':
      currentRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
      break;

    case 'passwordCheck':
      currentRegExp = new RegExp(`^${password}$` || '');
      break;

    case 'nickName':
      currentRegExp = /^.{2,5}$/;
      break;
  }

  return currentRegExp.test(value) ? true : false;
}
