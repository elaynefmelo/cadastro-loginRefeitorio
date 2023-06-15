import MenuAluno from "./MenuAluno";

function ConfiguracoesAluno() {
    return (
        <>
        <div className="container">
            <section className="postarCardapio">
                <h1>Configurações</h1>
                <form id="cardapio">
                Nome <br />
                <textarea name="cafeManha" defaultValue={""} />
                <br />
                Contato de Emergência <br />
                <textarea name="almoco" defaultValue={""} />
                <br />
                <button className="bnt_postar" type="submit" name="sub">
                    Confirmar alterações
                </button>
                </form>
            </section>
        </div>
        <div>
        < MenuAluno /> 
        </div>
         
        </>
    );
}

export default ConfiguracoesAluno;