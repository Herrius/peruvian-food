import Header from "./../components/header"

function AboutUs() {
  return (
    <main>
        <Header/>
        <h2>Bienvenido al generador desayunos</h2>
        <p>Aqui encontraras combinanciones para tus desayunos o buscar recetas para aprender hacer esa bebida o aperitivo que tanto buscabas</p>
        <div>
            <h2>Seleccione un tipo de desayuno</h2>
            <div>
                <section>
                    <p>Desayuno ligero</p>
                    <img src="#"></img>
                </section>
                <section>
                    <p>Desayuno contundente</p>
                    <img src="#"></img>
                </section>
                <div>
                    <button>Generar un desayuno</button>
                </div>
            </div>
        </div>
    </main>
  );
}

export default AboutUs;