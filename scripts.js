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

//

