const initTime = new Date().getTime();

import fetch from "node-fetch";

const cepList = [
  "50830390",
  "50830391",
  "50830392",
  "50830393",
  "54515250",
  "50830396",
  "50830397",
  "50830398",
  "50830399",
  "50830400",
  "50830401",
  "50830402",
  "50830403",
  "50830404",
  "50830405",
];

function showCep(cep) {
  console.log(cep);
}

async function showInfoCeps(cepList) {
  for (let i = 0; i < cepList.length; i++) {
    let cep = cepList[i];
    const cepInfo = await getCepInfo(cep);
    showCep(cepInfo);
  }
}

async function getCepInfo(cep) {
  let url = `https://viacep.com.br/ws/${cep}/json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`ATENÇÃO, ALGO DEU ERRADO! ${error}`);
  }
}

showInfoCeps(cepList);

const totalTime = new Date().getTime() - initTime;
console.log("Foi executado em: ", totalTime);
