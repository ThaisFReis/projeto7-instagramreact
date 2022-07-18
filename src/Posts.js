function Post(props){
    return(
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imgUsername} alt={props.username} />
                    {props.username}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
            <img src={props.img} alt={props.username} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                <img src={`assets/img/${props.like}.svg`} alt={props.like} />
                    <div className="texto"> Curtido por <strong>{props.like}</strong> e <strong> {props.text} </strong> </div>
                </div>
            </div>
        </div>
    )
}

export default Post