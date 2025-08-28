async function verificador(matricula) {

  const apiUrl = "http://localhost:8080/usuarios/listar";
  const username = 'pedro';
  const password = 1234;

  const matrix = parseInt(matricula?.toString().trim(), 10);

  const headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

  try {
    const response = await fetch(apiUrl, { method: 'GET', headers: headers });
    if (!response.ok) throw new Error("Erro na requisição");

    const data = await response.json();

    const verificarMatriz = data.some(dados => {

      return parseInt(dados.matriz) === matrix;
    });

    return verificarMatriz;
  } catch (error) {
    console.log("erro ao buscar usuarios: " + error);
  }
}
