let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        numeroChamada: 1225
    },
]

exibirAlunos(chamadaDeAlunos)
console.log("\n");
exibirAlunosAprovados(chamadaDeAlunos)
console.log("\n");
exibirAlunosReprovados(chamadaDeAlunos)
console.log("\n");
maiorNota(chamadaDeAlunos)
console.log("\n");
menorNota(chamadaDeAlunos)


function exibirAlunos(alunos) {

    console.log("> Exibe alunos");

    alunos.forEach(aluno => {
        console.log(`>> Aluno: ${aluno.nome}`);

        aluno.materias.forEach(materia => {
            console.log(`>>> Materia: ${materia.nome} ; nota: ${materia.nota}`);
        })
    });
}


function exibirAlunosAprovados(listaDeAlunos) {


    console.log("> Exibe as materias que o aluno foi aprovado");


    listaDeAlunos.forEach(aluno => {


        const materiasQueOAlunoPassou = aluno.materias.map(materia => {
            return alunoEstaAprovadoNaMateria(materia)
        })


        if (materiasQueOAlunoPassou.some((passouNaMateria) => { return passouNaMateria })) {

            console.log(">> Aluno: ", aluno.nome);

            aluno.materias.forEach(materia => {
                if (alunoEstaAprovadoNaMateria(materia)) {
                    console.log(`>>> Materia: ${materia.nome} ; aprovado: ${alunoEstaAprovadoNaMateria(materia)}`);
                }
            })
        }

    })
}


function exibirAlunosReprovados(listaDeAlunos) {

    console.log("> Exibe as materias que o aluno foi reprovado");


    listaDeAlunos.forEach(aluno => {
        const materiasQueOAlunoPassou = aluno.materias.map(materia => {
            return alunoEstaAprovadoNaMateria(materia)
        })

        if (materiasQueOAlunoPassou.some((passouNaMateria) => { return !passouNaMateria })) {

            console.log(">> Aluno: ", aluno.nome);

            aluno.materias.forEach(materia => {
                if (!alunoEstaAprovadoNaMateria(materia)) {
                    console.log(`>>> Materia: ${materia.nome} ; aprovado: ${alunoEstaAprovadoNaMateria(materia)}`);
                }
            })
        }

    })
}

function alunoEstaAprovadoNaMateria(materia) {
    if (materia.nota >= 6 && materia.presenca >= 75) {
        return true
    }

    return false
}

function maiorNota(listaDeAlunos) {

    console.log("> Alunos com maiores notas");

    const alunosESuasMaioresNotas = listaDeAlunos.map(aluno => {
        const notasDoAluno = aluno.materias.map(materia => materia.nota)
        const maiorNotaDoAluno = Math.max(...notasDoAluno)

        return {
            nome: aluno.nome,
            maiorNota: maiorNotaDoAluno
        }
    })

    const alunosESuasMaioresNotasOrdenado = alunosESuasMaioresNotas.sort(function (a, b) {
        return b.maiorNota - a.maiorNota;
    });

    let qtdAlunosMostrados = 0

    alunosESuasMaioresNotasOrdenado.forEach(aluno => {

        if (qtdAlunosMostrados >= 3) {
            return
        }

        console.log(`>> Aluno: ${aluno.nome} ; MaiorNota: ${aluno.maiorNota}`);
        qtdAlunosMostrados++


    })


}

function menorNota(listaDeAlunos) {

    console.log("> Alunos com menores notas");

    const alunosESuasMenoresNotas = listaDeAlunos.map(aluno => {
        const notasDoAluno = aluno.materias.map(materia => materia.nota)
        const menorNotaDoAluno = Math.min(...notasDoAluno)

        return {
            nome: aluno.nome,
            menorNota: menorNotaDoAluno
        }
    })



    const alunosESuasMenoresNotasOrdenado = alunosESuasMenoresNotas.sort(function (a, b) {
        return a.menorNota - b.menorNota;
    });

    let qtdAlunosMostrados = 0

    alunosESuasMenoresNotasOrdenado.forEach(aluno => {

        if (qtdAlunosMostrados >= 3) {
            return
        }

        console.log(`>> Aluno: ${aluno.nome} ; MenorNota: ${aluno.menorNota}`);
        qtdAlunosMostrados++


    })


}
