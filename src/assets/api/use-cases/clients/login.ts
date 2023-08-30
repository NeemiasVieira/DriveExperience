import api from "../../config"

export const executeLogin = async (email: string, password: string, setIsLogin: any, setError: any) => {
    sessionStorage.setItem("isLoading", "true");
    await api.post("/login", { email, password })
    .then((response) => {
        console.log(response.data.token)
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("isLoading", "false");
        setIsLogin(true);
    }).catch((error) => {
        sessionStorage.setItem("isLoading", "false");
        setError(error)
    });
}