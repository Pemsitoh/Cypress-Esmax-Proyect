import { onClientsAdmPage } from "../support/page_objects/clientsAdmPage.js"
import { onClientsPage } from "../support/page_objects/clientsPage.js"
import { HomePage, onHomePage } from "../support/page_objects/homePage.js"
import { onLoginPage } from "../support/page_objects/loginPage.js"
const {generarRUT} = require('../support/GeneradorRUT.js')

describe('Casos Clientes', () => {

  beforeEach('Open Sao Pablo Home Page with an User', ()=>{
    cy.openSaoPabloPage()
    onLoginPage.logIn('suser', 'suser123456')
  })

  it('Create a new Client', () => {

    onHomePage.goToClient()
    onClientsPage.goToClientsAdm()
    onClientsAdmPage.clickOnCreateNewclient()
    onClientsAdmPage.newClientForm('Primera Prueba automatizada',generarRUT(),'BANCARIAS')
 

  })



})
