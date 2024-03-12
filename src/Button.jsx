function Clickhandler({value, children}){
    console.log(children);
    return(
            <button className="buttons" onClick={() => {
                alert(`Welcome ${value}`);
            }}>
                {children}
            </button>   
    )
}


export default function Button(){
    return(
        <div>
            <Clickhandler value="Guru">
                Guru
            </Clickhandler>
            <Clickhandler value="Samu">
                Samu
            </Clickhandler>
        </div>
    )
}