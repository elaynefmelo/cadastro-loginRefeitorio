import Menu from "./Menu";

function Configuracoes() {
    return (
        <>
        <div className="container">
            <section className="postarCardapio">
                <h1>Configurações</h1>
                <form id="cardapio">
                Nome <br />
                <textarea name="cafeManha" defaultValue={""} />
                <br />
                E-mail <br />
                <textarea name="almoco" defaultValue={""} />
                <br />
                Senha <br />
                <textarea name="cafeManha" defaultValue={""} />
                <br />
                Confirmar Senha <br />
                <textarea name="cafeManha" defaultValue={""} />
                <br />
                <button className="bnt_postar" type="submit" name="sub">
                    Confirmar alterações
                </button>
                </form>
            </section>
        </div>
        <div>
        < Menu /> 
        </div>
         
        </>
    );
}

export default Configuracoes;