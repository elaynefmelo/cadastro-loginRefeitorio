import Link from "next/link";

function RecuperarSenha() {
    return (
        <>
            <section class="area-recuperar-senha">
        <div class="recuperar-senha">
            <div>
                <img src="./imagens/logo_refeitorio.png" alt="" /><br />
            </div>
           
            <form>
            <label >E-mail: </label>
            <input type="text" name="email" required="true" /><br /><br />
            <button class="bnt_submit" type="submit" name="enviar">Enviar</button>
            </form>
            <br/>
            <Link href="/Login"><button class="bnt_voltar">Voltar</button></Link>
            
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

export default RecuperarSenha;