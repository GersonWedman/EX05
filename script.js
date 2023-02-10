//Altere as duas funções abaixo usando async-await para retorno e tratamento de promises:

function obterClienteNoBancoDeDados(idCliente) {
  return new Promise((resolve, reject) => {
    const cliente = { nome: 'bruce wayne', id: idCliente };
    resolve(cliente);
  });
}

async function processar() {
  try {
    await obterClienteNoBancoDeDados(7).then((cliente) => console.log(cliente));
  } catch (err) {
    console.log(err.msg);
  }
}
processar();
