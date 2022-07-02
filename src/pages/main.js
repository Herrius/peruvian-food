import Header from "./../components/header"
import light_food from "./../resource/light-food.png"
import heavy_food from "./../resource/heavy-food.png"
import React from "react"

function Main() {
    const [foodLight, setFoodLight] = React.useState(``);
    const [foodHeavy, setFoodHeavy] = React.useState(``);
    const [foodGenerator, setfoodGenerator] = React.useState(`hidden`);
    const [boxFood, setBoxFood] = React.useState(``);
    const [activate, setActivate] = React.useState(true);
    const [food, setFood] = React.useState(true);
    React.useEffect(() => {
        setFoodLight(`${activate ? "up" : ""}`);
        setFoodHeavy(`${activate ? "" : "up"}`);
    }, [activate])
    React.useEffect(() => {
        if (food) {
            
        }else{
            setfoodGenerator('')
            setBoxFood('hidden')
        }
    }, [food])
    return (
        <main className="body">
            <Header />
            <div className={boxFood}>
                <h2>Bienvenido al generador desayunos</h2>
                <p className="p">Aqui encontraras combinanciones para tus desayunos o buscar recetas para aprender hacer esa bebida o aperitivo que tanto buscabas</p>
                <div className="">
                    <h2>Seleccione un tipo de desayuno</h2>
                    <div className="food-options">
                        <section className={foodLight} onClick={() => setActivate(activate => !activate)}>
                            <img src={light_food}></img>
                            <p className="p subtitle-2 box">Desayuno ligero</p>
                        </section>
                        <section className={foodHeavy} onClick={() => setActivate(activate => !activate)}>
                            <img src={heavy_food}></img>
                            <p className="p subtitle-2 box">Desayuno contundente</p>
                        </section>
                    </div>
                </div>
                <div className="btn-generate">
                    <button onClick={() => setFood(food => false)}>Generar un desayuno</button>
                </div>
            </div>
            <div className={foodGenerator}>
                <h2>Resultados</h2>
                <table>
                    <tbody>
                        <tr>
                            <th className="subtitle-3 left">
                                <a href="#">Maca</a>
                            </th>
                            <th></th>
                        </tr>
                        <tr>
                            <th className="left  p-r">
                                <img src={light_food} className="img-result"></img>
                            </th>
                            <th className="btn-generate">
                                <button>
                                    <i className="bi bi-arrow-counterclockwise title"></i>
                                </button>
                            </th>
                        </tr>
                        <tr>
                            <th className="subtitle-3 left ">
                                <a href="#">Pan con chicharron</a>
                            </th>
                            <th></th>
                        </tr>
                        <tr>
                            <th className="left p-r">
                                <img src={light_food} className="img-result"></img>
                            </th>
                            <th className="btn-generate">
                                <button >
                                    <i className="bi bi-arrow-counterclockwise title"></i>
                                </button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default Main;
