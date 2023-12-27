import { HomePage, onHomePage } from "../support/page_objects/homePage"
import { onLoginPage } from "../support/page_objects/loginPage"
import { onSystemConfigurationPage } from "../support/page_objects/systemConfigurationPage.js"

describe('Se cambia a la modalidad Fullservices desde Configuración - Sistema',()=>{

    beforeEach('Open Sao Pablo Home Page with an User', ()=>{
        cy.openSaoPabloPage()
        onLoginPage.logIn('suser', 'suser123456')
      })

      it('Seleccionar Modalidad FullService y luego rellenar los campos de FullService', ()=>{

        //reportes = 0
        //inventario = 1
        //operaciones = 2
        //administracion = 3
        //configuracion = 4  ----> En este TC se utiliza esta opción
        //seguridad= 5
        //alarmas = 6
        //presupuestos = 7
      

        //1- Vamos al menú configuración
          onHomePage.goToMenu(4)
        //2- Vamos al menú Configuración -> Sistema
          onHomePage.goToSubmenu('sistema')
        //3- Seleccionamos en los botones superiores el botón "Terminal"
          onSystemConfigurationPage.selectTopButton('terminal')
        //4- En el desplegable elegimos la opción "Misceláneas"
          onSystemConfigurationPage.selectDropdownOptions('Misceláneas')
        //5- Seleccionamos en el dropdown "Modalidad de Venta en Isla" la opción "Full Service" y guardamos
          onSystemConfigurationPage.selectModalidad('Full Service')
        //6- Seleccionamos en los botones superiores el botón "Sistema"
          onSystemConfigurationPage.selectTopButton('sistema')
        //7- Completamos todos los campos para pasar a Modalidad Fullservices y guardamos
          onSystemConfigurationPage.selectSystemFullServicesOptions()
      
        })

})

