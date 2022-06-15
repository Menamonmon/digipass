export const identifyEmailType = (
    email: string
): "student" | "teacher" | "neither" => {
    if (email.endsWith("jcpsnj.org")) return "student";
    else if (email.endsWith("jcpsnj.org")) return "teacher";
    else return "neither";
};
