import Header from "./../components/header"
import light_food from "./../resource/light-food.png"
import heavy_food from "./../resource/heavy-food.png"
function Main() {
  return (
    <main className="body">
        <Header/>
        <h2>Bienvenido al generador desayunos</h2>
        <p className="p">Aqui encontraras combinanciones para tus desayunos o buscar recetas para aprender hacer esa bebida o aperitivo que tanto buscabas</p>
        <div >
            <h2>Seleccione un tipo de desayuno</h2>
            <div className="food-options">
                <section>
                    <img src={light_food}></img>
                    <p className="p subtitle-2">Desayuno ligero</p>
                </section>
                <section>
                    <img src={heavy_food}></img>
                    <p className="p subtitle-2">Desayuno contundente</p>
                </section>
                
            </div>
            <div className="btn-generate">
                <button>Generar un desayuno</button>
            </div>
        </div>
    </main>
  );
}

export default Main;
