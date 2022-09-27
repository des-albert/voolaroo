<template>
  <div class="projects text-center">
    <h1>Projects</h1>
    <div class="container">
      <div class="row">
        <div  class="col-4" align="center">
          <p><router-link to="/javelin">
            <img src="../img/javelin.png" height="150" width="200" class="grow"></router-link></p>
          "Javelin"
          <p>Drag and Drop configuration</p>
          <p>Java & JavaFX</p>
        </div>
        <div  class="col-4" align="center">
          <p><router-link to="/tokens">
          <img src="../img/token.png" height="150" width="150" class="grow"></router-link></p>
          "Tokens"
          <p>Team Task Management</p>
          <p>Ruby on Rails</p>
          <p>NodeJS + Vue</p>
        </div>

        <div  class="col-4" align="center">
          <p><router-link to="/soap">
          <img src="../img/soap.png" height="100" width="200" class="grow"></router-link></p>
          "SOAP"
          <p>SOAP interaction with Salesforce and Oracle Agile PLM</p>
          <p>Java + JavaFX</p>
          <p>NodeJS + Vue</p>
          <p>NodeJS + Amgualar</p>
        </div>
      </div>
    </div>
  </div>
  </template>

  <style scoped>
  .grow:hover {
    transform: scale(1.2);
  }
  </style>
  