class Chat extends React.Component {
    constructor() {
        super();
        var u = JSON.parse(localStorage.getItem('usuario'));
        this.state = {
            msj: [],
            user: u,
            i: 1
        }
    }
    componentDidMount() {
        this.setState({ msj: JSON.parse(sessionStorage.getItem('mensajes')) });
    }

    updateChat(state){
        this.setState({msj: state});
    }

    componentDidUpdate() {
        var objDiv = document.getElementById("mensajes");
        objDiv.scrollTop = objDiv.scrollHeight;
    }
    componentWillUnmount() {
        //clearInterval(this.interval);
    }

    send() {

    }

    render() {
        return (
            this.state.msj.map((m, i) => {
                if (m.id == this.state.user.id) {
                    return (
                        <div className="amigo">
                            <div className="titulo">{m.nombres}</div>
                            <div className="flecha-izquierda"></div>
                            <div className="contenido">{m.contenido}</div>
                            <div className="fecha">{m.fecha}</div>
                        </div>
                    )
                } else {
                    return (
                        <div className="autor">
                            <div className="titulo">{m.nombres}</div>
                            <div className="flecha-izquierda"></div>
                            <div className="contenido">{m.contenido}</div>
                            <div className="fecha">{m.fecha}</div>
                        </div>
                    )
                }
            })
        );
    }
}

ReactDOM.render(<Chat />, document.getElementById('mensajes'));