const user = {
    id:null,
    name:"",
    email:"",
    addres:{
        street:"",
        streetNumber:"",
        zipCode:"",
        country:""
    },
    registerNumber: "",
    balance:{
        currentBalance:0,
        balanceHistory:[
            {
            date:"",
            amount:null,
            type: ""
        }
    ]
    }
 };
class User {
constructor(
    idUser = user.id, 
    nameUser = user.name,
    emailUser = user.email,
    registerNumberUser = user.registerNumber,
    streetUser = user.addres.street,
    streetNumberUser = user.addres.streetNumber,
    zipCodeUser = user.addres.zipCode,
    countryUser = user.addres.country
    ) {
        this.idUser = idUser,
        this.nameUser = nameUser,
        this.emailUser = emailUser,
        this.registerNumberUser = registerNumberUser,
        this.streetUser = streetUser,
        this.streetNumberUser = streetNumberUser,
        this.zipCodeUser = zipCodeUser,
        this.countryUser = countryUser
        
    }


        /***MENUS***/ 
    menuSystem() {
        const choise = prompt("**** Welcome to the GA banking system ****\n 1. Manager \n 2. Customer ","");
        switch(choise) {
            case "1":
                this.menuManager();
               break;
            case "2":
               this.dataUser();
                break;
            default:
                alert("Invalid option");
                break;
        }
      return;
    }


    menuManager() {
        const optionsMenuManager = prompt(" 1. List of all Users\n 2. Create User\n 3. Edit User\n 4. Delete User\n 5. Come back","");
        switch(optionsMenuManager) {
            case "1":
               this.listAllUser();
                break;
            case "2":
                this.getDataUser();
                break;
            case "3":
                this.editUser();
                break;
            case "4":
                this.deletUserMenu();
                break;
            case "5":
                this.menuSystem();
                break;
            default:
                alert("Invalid option");
                break;
        }
    }

    getDataUser() {
        this.nameUser = prompt("Insira o nome do Usuário: ","");
        if(this.nameUser.length) {
            this.emailUser = prompt("Insira o email do Usuário: ","");
            if(this.emailUser.length) {
                this.zipCodeUser = prompt("Insira o seu código postal","");
                if(this.zipCodeUser.length) {
                    this.streetUser = prompt("Insira a rua do usuário: ","");
                    if(this.streetUser.length) {
                        this.streetNumberUser = prompt("Insira o número da rua: ","");
                        if(this.streetNumberUser.length) {
                            this.countryUser = prompt("Insira o seu país: ","");
                            if(this.countryUser.length) {
                                this.registerNumber = prompt("Insira o seu cpj/cnpj","");
                                if(this.registerNumber.length) {
                                    this.idUser = this.uuidv4();
                                    console.log(this.idUser);
                                    this.registeredUserAlert();
                                    
                                    
                                }else {
                                     this.error();
                               }
                            }else {
                                this.error();
                            }
                        }else { 
                            this.error();
                        }
                    }else {
                        this.error();
                    }
                }else {
                    this.error();
                }
            }else {
                this.error();
            }
        }else {
            this.error();
        }
        return;
    }

    dataUser() {
        
        if(this.idUser?.length) {
            const menuUser = prompt("Choose the desired option:\n 1. Total balance\n 2. Withdraw a value\n 3. Deposit an amount\n 4. Come back","");
            switch(menuUser) {
                case "1":
                    this.showTotalBalance();
                    break;
                case "2":
                    this.withDrawValue();
                    break;
                case "3":
                    this.depositValue();
                    break;
                case "4":
                    this.menuSystem();
                    break;
                default:
                    alert("****Invalid Option****");
                     }
                 } else {
                    this.errorUserNotRegistred();
                 }
            }
        /****FUNCTIONS****/
    getDateOperation() {
        const data = new Date();
        const getHours = new Date().toLocaleTimeString();
        const day = String(data.getDate()).padStart(2, "0");
        const month = String(data.getMonth() + 1).padStart(2, "0");
        const year = data.getFullYear();
        const currentDate = day + "/" + month + "/" + year + " " + getHours;
        return currentDate;
    }   
    
    uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }


    registeredUserAlert(){
        const result2 = prompt("****Successfully registered user!****\n ****Choose the desired option**** \n 1. Back to main menu \n 2. Back to manager menu \n 3. Log out","");
        switch(result2) {
            case "1":
                this.menuSystem();
                break;
            case "2":
                this.menuManager();
                break;
            case "3":
                this.exitSystem();
                break;
            default:
                alert("Invalid option");
                break;
        }
    }

    editedUserAlert() {
        const result5 = prompt("****User successfully edited!****\n ****Choose the desired option**** \n 1. Back to main menu \n 2. Back to manager menu \n 3. Log out","");
        switch(result5) {
            case "1":
                this.menuSystem();
                break;
            case "2":
                this.menuManager();
                break;
            case "3":
                this.exitSystem();
                break;
            default:
                alert("Invalid Option");
            break;

        }
    }

    showTotalBalance() {
        const balance = prompt("You balance is: " + this.currentBalanceUser + "\n Choose the desired option:\n 1. Back to main menu\n 2. Come back\n 3. Log out");
        this.balanceHistoryDateUser = this.getDateOperation();
        switch(balance) {
            case "1":
                this.menuSystem();
                break;
            case "2":
                this.dataUser();
                break;
            case "3":
                this.exitSystem();
                break;
            default:
                alert("Invalid Option");
                break;
        }
    }
    
    withDrawValue() {
        const getValue = prompt("How much do you want to withdraw?","");
        const formatValue2 = parseFloat(getValue);
        if(this.currentBalanceUser >= formatValue2 && formatValue2 >= 1) {
            this.balanceHistoryDateUser = this.getDateOperation();
            this.balanceHistoryTypeUser = "withDraw";
            this.currentBalanceUser = this.currentBalanceUser - formatValue2 ;
            this.balanceHistoryAmountUser = getValue;
            const showNewBalance = prompt("Your current balance is: " + this.currentBalanceUser + "\n Choose the desired option:\n 1. Back to main menu\n 2. Come back\n 3. Log Out","");
            switch(showNewBalance) {
                case "1":
                    this.menuSystem();
                    break;
                case "2":
                    this.dataUser();
                    break;
                case "3":
                    this.exitSystem();
                    break;
                default:
                    alert("Invalid Option");
                    break;
            }  
        }else {
            this.negativeBalance();
        }
    }
    depositValue() {
        const depositValue = prompt("How much do you want to deposit?","");
        if(depositValue >= 1) {
            this.balanceHistoryDateUser = this.getDateOperation();
            this.balanceHistoryTypeUser = "deposit";
            this.balanceHistoryAmountUser = depositValue;
            const formatValue = parseFloat(depositValue);
            this.currentBalanceUser = this.currentBalanceUser + formatValue ;
            const showNewBalanceAdd = prompt("Your current balance is: " + this.currentBalanceUser + "\n Choose the desired option:\n 1. Back to main menu\n 2. Come back\n 3. Log Out","");
            switch(showNewBalanceAdd) {
                case "1":
                    this.menuSystem();
                    break;
                case "2":
                    this.dataUser();
                    break;
                case "3":
                    this.exitSystem();
                    break;
                default:
                    alert("Invalid Option");
                    break;
            }  
        }else {
            this.errorDataUser();
        }
    }

    editUser() {
        if(this.idUser?.length) {
           this.nameUser = prompt("Insira o nome do Usuário: ","");
        if(this.nameUser.length) {
            this.emailUser = prompt("Insira o email do Usuário: ","");
            if(this.emailUser.length) {
                this.zipCodeUser = prompt("Insira o seu código postal","");
                if(this.zipCodeUser.length) {
                    this.streetUser = prompt("Insira a rua do usuário: ","");
                    if(this.streetUser.length) {
                        this.streetNumberUser = prompt("Insira o número da rua: ","");
                        if(this.streetNumberUser.length) {
                            this.countryUser = prompt("Insira o seu país: ","");
                            if(this.countryUser.length) {
                                this.registerNumberUser = prompt("Insira o seu cpf/cnpj","");
                                if(this.registerNumberUser.length) {
                                    
                                    this.editedUserAlert();
                                    
                                    
                                }else {
                                     this.error();
                               }
                            }else {
                                this.error();
                            }
                        }else { 
                            this.error();
                        }
                    }else {
                        this.error();
                    }
                }else {
                    this.error();
                }
            }else {
                this.error();
            }
        }else {
            this.error();
        }
        
        } else {
            this.errorUserNotRegistred();
        }
    }

    listAllUser(){
     if(this.idUser?.length) {
          for (const key in user) {
               if (user.hasOwnProperty(key)) {
                   console.log(`${key}: ${user[key]}`);
                
                     }
                 }
    } else {
        this.errorUserNotRegistred();
    }
          }
  
        
  deletUser() {
        this.idUser = "";
        this.nameUser = "";
        this.emailUser = "";
        this.registerNumberUser = "";
        this.streetUser = "";
        this.zipCodeUser = "";
        this.streetNumberUser = "";
        this.countryUser = "";
        this.currentBalanceUser = "";
        this.balanceHistoryDateUser = "";
        this.balanceHistoryAmountUser = "";
        this.balanceHistoryTypeUser = "";
        const alertUserDeleted = prompt("**** User deleted successfully ****\n 1. Back to main menu\n 2. Back to menu manager\n 3.Log out");
        switch(alertUserDeleted) {
            case "1":
                this.menuSystem();
                break;
            case "2":
                this.menuManager();
                break;
            case "3":
                this.exitSystem();
                break;
            default:
                alert("Invalid option");
                break;
        }
        
    }
    deletUserMenu(){
        if(this.idUser?.length) {
        const result6 = prompt("Do you want to delete a user? \n1. Yes\n2. Not\n 3. Back to main menu\n 4. Back to menu manager\n 5. Log Out");
        switch(result6) {
            case "1":
                this.deletUser();
                break;
            case "2":
                this.menuManager();
                break;
            case "3":
                this.menuSystem();
                break;
            case "4":
                this.menuManager();
                break;
            case "5":
                this.exitSystem();
                break;
            default:
                alert("Invalid Option")
                
        }
        }else {
            this.errorUserNotRegistred();
        }
    }

    exitSystem() {
        alert("Thank you for using GA bank\n see you later (;");
    }
    /***ERROR HANDLING***/
    error(){
        const result = prompt("*****Invalid data*****\n Choose the desired option:\n 1.Back to main menu \n 2.Log out.","");
        switch(result){
            case "1":
                this.menuSystem();
                break;
            case "2":
                this.exitSystem();
                break;
            default:
                alert("Invalid option");
                break;
        }

    }
    negativeBalance() {
        const result7 = prompt("***** Negative Balance *****\n Choose the desired option:\n 1.Back to main menu \n 2.Come Back \n 3.Log out.","");
        switch(result7){
            case "1":
                this.menuSystem();
                break;
            case "2":
                this.dataUser();
                break;
            case "3":
                this.exitSystem();
            default:
                alert("Invalid option");
                break;
        }
    }
    errorDataUser(){
        const result4 = prompt("*****Invalid data*****\n Choose the desired option:\n 1.Back to main menu \n 2.Come Back \n 3.Log out.","");
        switch(result4){
            case "1":
                this.menuSystem();
                break;
            case "2":
                this.dataUser();
                break;
            case "3":
                this.exitSystem();
            default:
                alert("Invalid option");
                break;
        }

    }
         
    errorUserNotRegistred() {
        const result3 = prompt("***** Unregistered user *****\n Register the user and try again\n 1. Back to main menu \n 2. Back to manager menu \n 3. Log out","");
        switch(result3) {
            case "1":
                this.menuSystem();
                break;
            case "2":
                this.menuManager();
                break;
            case "3":
                this.exitSystem();
                break;
            default:
                alert("Invalid Option");
                break;
        }
    }   
} 

class Bank extends User {
    constructor(
    currentBalanceUser = user.balance.currentBalance,
    balanceHistoryDateUser = user.balance.balanceHistory.date,
    balanceHistoryAmountUser = user.balance.balanceHistory.amount,
    balanceHistoryTypeUser = user.balance.balanceHistory.type
    ){
        super();
        this.currentBalanceUser = currentBalanceUser,
        this.balanceHistoryDateUser = balanceHistoryDateUser,
        this.balanceHistoryAmountUser = balanceHistoryAmountUser,
        this.balanceHistoryTypeUser = balanceHistoryTypeUser
    }
}
const getUser = new User();
getUser.menuSystem();



