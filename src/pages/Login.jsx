import Link from "next/link";

function Login() {
  return (
    <>
      <section class="area-login">
        <div class="login">
          <div>
            <img src="./imagens/logo_refeitorio.png" alt="" />
            <br />
          </div>
          <form>
            <label>Email</label>{" "}
            <input type="text" name="email" required="true" />
            <br />
            <label>Senha</label>{" "}
            <input type="password" name="senha" required="true" />
            <Link href="/RecuperarSenha">Esqueceu a senha?</Link>
            <br />
            <br />
            <button class="bnt_submit" type="submit">
              Entrar
            </button>
          </form>
          <br />
          <p>
            Não possui conta?<Link href="/CadastroUsuario">Cadastre-se</Link>
          </p>
        </div>
      </section>
      <footer>
        <div class="footerContainer">
          <p>© 2023 - Todos os direitos reservados</p>
        </div>
      </footer>
    </>
  );
}

export default Login;
