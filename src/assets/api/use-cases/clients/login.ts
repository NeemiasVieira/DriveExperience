import api from "../../config"

export const executeLogin = async (email: string, password: string, setIsLogin: any, setError: any) => {
    await api.post("/login", { email, password })
        .then((response) => {
            sessionStorage.setItem("token", response.data.token);
            setIsLogin(true);
        }).catch((error) => {
            setError(error)
        });
}