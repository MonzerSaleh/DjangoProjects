import Form from "../components/basicForm"

function Login() {
    return <Form route="/api/token/" method="login" />
}

export default Login