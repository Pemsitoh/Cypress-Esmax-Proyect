const {generarRUT} = require('../GeneradorRUT')
function ValidarRut()
{
    cy.get('body').then($body=>{
        if($body.text().includes('El RUT ingresado no es válido') || $body.text().includes('Ya existe una empresa con mismo RUT')){
            cy.get('input#identifier').type(generarRUT())
            cy.get('[type="checkbox"]').eq(0).click()
            ValidarRut()
        }else{
            cy.log('Rut valido')
        }
    })
}
    
export class ClientsAdmPage{

    clickOnCreateNewclient(){
        cy.get('div.div-button').find('a.color-3.puerto-btn-1').click()

    }

    newClientForm(razonSocial,RUT,giro){

       
        cy.get('input#name').type(razonSocial)
        cy.get('input#identifier').type(RUT)
        cy.get('div#partyActivity_chosen').click()
        cy.get('.active-result').contains(giro,{timeout:10000}).click()
        cy.get('.chosen-single').find('span').should('contain', giro)
        cy.get('#create').click()
        ValidarRut()

    }


}

export const onClientsAdmPage = new ClientsAdmPage()