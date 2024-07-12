export const TelaLogin = () =>{
    return(
        <div>
            <h2>Tela de login</h2>

            <label htmlFor="EmailInput">Email:</label>
            <input id="EmailInput" type="Email"/>
            <br />
            <label htmlFor="SenhaInput">Senha:</label>
            <input type="password" id="SenhaInput" />
            <br />
            <button>Entrar</button>
        </div>
    )
}