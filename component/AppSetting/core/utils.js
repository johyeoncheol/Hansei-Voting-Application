export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return "아이디를 입력해주세요. ";
  if (!re.test(email)) return "이메일 형식으로 입력해주세요.";

  return "";
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return "패스워드를 입력하지 않았습니다.";

  return "";
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return "이름을 입력하지 않았습니다.";

  return "";
};
