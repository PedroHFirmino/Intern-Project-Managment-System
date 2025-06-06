//Usuários

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Formulario')
    .setTitle("Formulário de Projeto")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function salvarDados(dadosUser) {
  const planilha = SpreadsheetApp.openById("1FBx1Z2Zp7mBWNvN2tuHIJxpFx6laXC_bnO2Hf8sb_yQ");
  const aba = planilha.getSheetByName("Usuarios");
  aba.appendRow([
    dadosUser.nome, 
    dadosUser.email, 
    dadosUser.departamento, 
    dadosUser.funcao, 
    dadosUser.horas,  
    dadosUser.observacoes, 
    new Date()]);
  return "sucesso";
}

//Portfolio

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Portfolio')
    .setTitle("Formulário de Portfolio")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function salvarDadosPortfolio(dados) {
  const planilha = SpreadsheetApp.openById("1FBx1Z2Zp7mBWNvN2tuHIJxpFx6laXC_bnO2Hf8sb_yQ");
  const aba = planilha.getSheetByName("Portfolio");
  aba.appendRow([dados.portfolio, dados.startDate, dados.endDate, new Date()]);
  return "sucesso";
}

// Projetos

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Projetos')
    .setTitle("Formulário de Projetos")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function salvarDadosProjeto(dados) {
  const planilha = SpreadsheetApp.openById("1FBx1Z2Zp7mBWNvN2tuHIJxpFx6laXC_bnO2Hf8sb_yQ");
  const aba = planilha.getSheetByName("Projetos");

  aba.appendRow([
    dados.nome,
    dados.objetivo,
    dados.justificativa,
    dados.beneficio,
    dados.lider,
    dados.cliente,
    dados.dataInicio,
    dados.dataFim,
    dados.portfolio,
    new Date()
  ]);

  return "sucesso";
}

