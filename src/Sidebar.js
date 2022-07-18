const user = {
    username: "catanacomics",
    name: "Catana"
}

const content = [
    {
        nickname: "bad.vibes.memes",
        text: "Segue você"
    },
    {
        nickname: "chibirdart",
        text: "Segue você<"
    },
    {
        nickname: "razoesparaacreditar",
        text: "Novo no Instagram"
    },
    {
        nickname: "adorable_animals",
        text: "Segue você"
    },
    {
        nickname: "smallcutecats",
        text: "Segue você"
    }
]


function Sidebar(){
    return(
        <div className="usuarios">
            <div className="usuario">
                <img src={`assets/img/${user.username}.svg`} alt={user.username} />
                <div className="texto">
                    <strong>{user.username}</strong> 
                    <p>{user.name}</p>
                </div>
            </div>


            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {content.map((content) => (
                    <div className="sugestao">
                        <div className="usuario">
                        <img src={`assets/img/${content.nickname}.svg`} alt={content.nickname} />
                            <div className="texto">
                                <div className="nome">{content.nickname}</div>
                                <div className="razao">{content.text}</div>
                            </div>
                        </div>

                        <div className="seguir">Seguir</div>
                    </div>
                ))}

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
            </div>
        </div>
    )
}

export default Sidebar