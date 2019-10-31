
const email = (value: string) =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? `가입기록이 없는\n이메일 주소입니다.`
  : undefined;

const minLength = (min: number) => (value: string) =>
value && value.length < min ? `Must be ${min} characters or more` : undefined

export const minLength2 = minLength(2);

const validations = {
  email,
  minLength,
  minLength2,
};

export default validations;