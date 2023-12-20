export class ClientsPage{

    goToClientsAdm(){
        cy.get('[class="row margin20"]').find('a').eq(0).click()
    }

}

export const onClientsPage = new ClientsPage()