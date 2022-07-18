function Stories(props){
    return (
        <div>
            <div className="story">
                <div className="imagem">
                    <img src={`assets/img/${props.username}.svg`} alt={props.username} />
                </div>
                <div className="usuario"> {props.username} </div>
            </div>

            <div className="setinha"> <ion-icon name="chevron-forward-circle"></ion-icon> </div>
        </div>
    )
}

export default Stories