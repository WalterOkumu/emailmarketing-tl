export default function About() {
    return(
        <section className="mt-32 flex flex-col justify-center items-center mx-auto gap-16 md:w-3/4 w-full">
            <h3 className="text-5xl font-bold text-center md:w-[56%] px-8">
                O que o email marketing faz pela sua empresa?</h3>

            <div className="text-center md:w-1/2 w-full px-8">
                <h4 className="font-bold text-[1.5rem]">Objetivos Gerais</h4>
                <p className="mx-auto">Informar; Atrai; Envolver; Guiar; Estimular; Converter.</p>
            </div>

            <div className="text-center md:w-1/2 w-full px-8">
                <h4 className="font-bold text-[1.5rem]">O que oferecemos?</h4>
                <p className="mx-auto">
                    Um banco de dados exclusivo; Um serviço dedicado que gera relatórios: Um produtor de conteúdo; Um designer.
                </p>
            </div>
        </section>
    );
}