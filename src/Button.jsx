
function Button(){

    let num = Math.round(Math.random()*100);

    return (
    <div className="bg-yellow-500 mt-2">
        <h1>num is {num}</h1>
    </div>
        )
}

export default Button;