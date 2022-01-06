function insereOptions() {
  const estadosSelect = document.getElementById("estado");

  const estadosList = {
    acre: "Acre",
    alagoas: "Alagoas",
    amapa: "Amapá",
    amazonas: "Amazonas",
    bahia: "Bahia",
    ceara: "Ceara",
    distritoFederal: "Distrito Federal",
    espiritoSanto: "Espirito Santo",
    goias: "Goiás",
    maranhao: "Maranhão",
    matoGrosso: "Mato Grosso",
    matoGrossoDoSul: "Mato Grosso do Sul",
    minasGerais: "Minas Gerais",
    para: "Pará",
    paraiba: "Paraíba",
    parana: "Paraná",
    pernambuco: "Pernambuco",
    piaui: "Piauí",
    rioDeJaneiro: "Rio de Janeiro",
    rioGrandeDoNorte: "Rio Grande do Norte",
    rioGrandeDoSul: "Rio Grande do Sul",
    rondonia: "Rondônia",
    roraima: "Roraima",
    santaCatarina: "Santa Catarina",
    saoPaulo: "São Paulo",
    sergipe: "Sergipe"
  };

  for(estado in estadosList) {
    option = new Option(estadosList[estado], estado);
    estadosSelect.options[estadosSelect.options.length] = option;
  }
}

insereOptions();