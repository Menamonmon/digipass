export const identifyEmailType = (
  email: string
): "student" | "teacher" | "neither" => {
  if (email.endsWith("jcpsnj.org")) return "student";
  else if (email.endsWith("gmail.com")) return "teacher";
  else return "neither";
};

export const generateRandomString = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};
