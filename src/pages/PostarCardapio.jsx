import Menu from "./Menu";

function PostarCardapio() {
    return (
        <>
         <div className="container">
            <section className="postarCardapio">
                <h1>Postar cardápio do dia</h1>
                <form id="cardapio">
                Café da manhã <br />
                <textarea name="cafeManha" defaultValue={""} />
                <br />
                Almoço <br />
                <textarea name="almoco" defaultValue={""} />
                <br />
                Jantar <br />
                <textarea name="jantar" defaultValue={""} />
                <br />
                <button className="bnt_postar" type="submit" name="sub">
                    Postar
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

export default PostarCardapio;