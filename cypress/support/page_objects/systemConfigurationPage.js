export class systemConfigurationPage{

    selectTopButton(btnnavigation){
        cy.get('div.btn-group-sm').find('a').contains(btnnavigation,{matchCase :false}).click({force: true})
    }

    selectDropdownOptions(option){
        cy.get('div#grid select').eq(0).select(option)
        cy.get('div#grid select').find('[selected="selected"]').should('contain', option)
    }

    selectModalidad(modalidad){
        cy.get('tbody').contains('tr', "Modalidad de Venta en Isla ").then(tableRow =>{
            cy.wrap(tableRow).find('[id="62f6460a0ff43379793b2a73"]').select(modalidad)
            cy.wrap(tableRow).should('contain', modalidad)
        })
        cy.contains('Guardar').eq(0).click({force: true})
    }
    selectSystemFullServicesOptions(){
        cy.get('tbody').find('[title="store.fuelController.additionalSaleStatusesToShow"]').then(tableRow=>{
            cy.wrap(tableRow).find('[id="626708ca7594d8e610864c58"]').clear()
        })
        cy.get('tbody').find('[title="store.fuelController.additionalSaleStatusesToAutoInvoice"]').then(tableRow=>{
            cy.wrap(tableRow).find('[id="635ac75764cd14a0490a3383"]').clear()
        })
        cy.get('tbody').find('[title="store.fuelController.close.performCloseValidations"]').then(tableRow=>{
            cy.wrap(tableRow).find('[id="64831d635f512719f10e4aa7"]').clear().type('true')
            cy.wrap(tableRow).find('[id="64831d635f512719f10e4aa7"]').invoke('prop','value').should('contain', 'true')
        })
        cy.get('tbody').find('[title="store.fuelController.additionalSaleStatusesToShowOnStatus"]').then(tableRow=>{
            cy.wrap(tableRow).find('[id="62f645970ff43379793b2a6f"]').clear().type('over_invoiced_not_conciliated, under_invoiced_not_conciliated')
            cy.wrap(tableRow).find('[id="62f645970ff43379793b2a6f"]').invoke('prop','value').should('contain','over_invoiced_not_conciliated, under_invoiced_not_conciliated')
        })
        cy.get('tbody').find('[title="store.fuelController.allowMorePumpItems"]').then(tableRow=>{
            cy.wrap(tableRow).find('[id="5ea556545604c8593c60293b"]').select('NO')
            cy.wrap(tableRow).find('[id="5ea556545604c8593c60293b"]').invoke('prop','value').should('contain', 'false')
        })
        cy.contains('Guardar').eq(0).click({force: true})

    }

    selectSystemCasetaOptions(){
        cy.get('tbody').find('[title="store.fuelController.additionalSaleStatusesToShow"]').then(tableRow=>{
            cy.wrap(tableRow).find('[id="626708ca7594d8e610864c58"]').clear().type('invoiced, invoiced_conciliated, fleet')
            cy.wrap(tableRow).find('[id="626708ca7594d8e610864c58"]').invoke('prop','value').should('contain','invoiced, invoiced_conciliated, fleet')
        })
        cy.get('tbody').find('[title="store.fuelController.additionalSaleStatusesToInvoice"]').then(tableRow=>{
            cy.wrap(tableRow).find('[id="626832f87594d8e610864c5a"]').clear().type('fleet')
            cy.wrap(tableRow).find('[id="626832f87594d8e610864c5a"]').invoke('prop','value').should('contain', 'fleet')
        })
        cy.get('tbody').find('[title="store.fuelController.additionalSaleStatusesToShowOnStatus"]').then(tableRow=>{
            cy.wrap(tableRow).find('[id="62f645970ff43379793b2a6f"]').clear().type('over_invoiced_not_conciliated, under_invoiced_not_conciliated, fleet')
            cy.wrap(tableRow).find('[id="62f645970ff43379793b2a6f"]').invoke('prop','value').should('contain','over_invoiced_not_conciliated, under_invoiced_not_conciliated, fleet')
        })
        cy.get('tbody').find('[title="store.fuelController.additionalSaleStatusesToAutoInvoice"]').then(tableRow=>{
            cy.wrap(tableRow).find('[id="635ac75764cd14a0490a3383"]').clear().type('over_invoiced_not_conciliated, under_invoiced_not_conciliated')
            cy.wrap(tableRow).find('[id="635ac75764cd14a0490a3383"]').invoke('prop','value').should('contain', 'over_invoiced_not_conciliated, under_invoiced_not_conciliated')
        })
        cy.get('tbody').find('[title="store.fuelController.allowMorePumpItems"]').then(tableRow=>{
            cy.wrap(tableRow).find('[id="5ea556545604c8593c60293b"]').select('SI')
            cy.wrap(tableRow).find('[id="5ea556545604c8593c60293b"]').invoke('prop','value').should('contain', 'true')
        })
        cy.get('tbody').find('[title="store.fuelController.lengthFieldSize"]').then(tableRow=>{
            cy.wrap(tableRow).find('[id="60ec42c8c2475494a5146e14"]').clear().type('5')
            cy.wrap(tableRow).find('[id="60ec42c8c2475494a5146e14"]').invoke('prop','value').should('contain', '5')
        })
        cy.get('tbody').find('[title="store.fuelController.close.performCloseValidations"]').then(tableRow=>{
            cy.wrap(tableRow).find('[id="64831d635f512719f10e4aa7"]').clear().type('true')
            cy.wrap(tableRow).find('[id="64831d635f512719f10e4aa7"]').invoke('prop','value').should('contain', 'true')
        })
       
        cy.contains('Guardar').eq(0).click({force: true})
    }
}

export const onSystemConfigurationPage = new systemConfigurationPage()