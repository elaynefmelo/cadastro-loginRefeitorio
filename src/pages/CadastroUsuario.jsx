import Link from "next/link";

function Cadastro() {
    return (
     <>
        <section class="area-cad">
            <div class="cad">
                <div>
                    <img src="./imagens/logo_refeitorio.png" alt="" /><br />
                </div>
                <form>
                    <label >Nome: </label>
                    <input type="text" name="nome" required="true" /><br />
                    <label >E-mail: </label>
                    <input type="text" name="email" required="true" /><br />
                    <label >Contato de Emergência: </label>
                    <input type="text" name="telefone" required="true" /><br />
                    <label>Senha: </label>
                    <input type="password" name="senha" required="true" /><br />
                    <label>Confirmar Senha: </label>
                    <input type="password" name="confirmarsenha" required="true" /><br />
                    <button class="bnt_submit" type="submit" name="cadastar">Cadastrar</button>
                </form>
                <br />
                <p>Já tem cadastro?<Link href="/Login">Entrar</Link></p>   
            </div>
        </section>
        <footer>
        <div class="footerContainer">
          <p>© 2023 - Todos os direitos reservados</p>
        </div>
      </footer>
     </> 
    );
};
export default Cadastro;

  

