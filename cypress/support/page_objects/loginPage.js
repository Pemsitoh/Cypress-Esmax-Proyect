export class LoginPage{
    logIn(email,password){
    cy.get('form [placeholder="Usuario"]').type(email)
    cy.get('form [placeholder="Contraseña"]').type(password)
    cy.get('button').click()
        
    }

}

export const onLoginPage = new LoginPage()