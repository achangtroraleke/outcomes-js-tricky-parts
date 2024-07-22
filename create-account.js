function createAccount(pin, amount=0) {
 
    return {
        checkBalance(pinInput){
        if(pinInput === pin){
           
            return `$${amount}`;
        }else{
            return "Invalid PIN."
        }
        },
        deposit(pinInput, amt){
            
            if(pinInput === pin){
                amount += amt
                
                return(`Succesfully deposited $${amt}. Current balance: $${amount}.`)
            }
            else{
                return('Invalid PIN.')
            }
        },
    

        withdraw(pinInput, amt){
            if(pinInput === pin){
                if(amt > amount) return("Withdrawal amount exceeds account balance. Transaction cancelled.")
                else{
                    amount = amount - amt
                    return(`Succesfully withdrew $${amt}. Current balance: $${amount}.`);
                }
            }else{
                return('Invalid PIN.')
                }       
            },
        changePin(oldPin, newPin){
            if(oldPin === pin){
                pin = newPin
                return("PIN successfully changed!")
            }
        }
        
    }

}

module.exports = { createAccount };
