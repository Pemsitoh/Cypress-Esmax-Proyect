
export class HomePage{

    goToClient(){
        cy.get('ul.headmenu li.odd').eq(3).find('span.head-icon').click()
        cy.get('li.odd.open ul a').eq(1).click()

    }

    goToMenu(page){
     
    
        cy.get('ul.nav').find('li.dropdown').eq(page).click()

    }

    goToSubmenu(submenu){
        
        cy.get('ul').find('[style="display: block;"]').contains(submenu,{matchCase :false}).click({force : true})

    }

}

export const onHomePage = new HomePage()