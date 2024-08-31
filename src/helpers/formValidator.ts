export default function formValidator() {
  const isEmailValid = (address: string) => {
    const exp = /([\w]{1,64})@([\w]{3,}).([\w]+)/g;

    return exp.test(address);
  }

  const isPasswordValid = (password: string) => {
    const exp = /[\w!@#$%¨&*()_+=/*-]{8,16}$/g;

    return exp.test(password);
  }

  return {
    isEmailValid,
    isPasswordValid,
  };
}