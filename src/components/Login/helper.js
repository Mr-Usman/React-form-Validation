
function validateForm(check ,  data , field , errors) {

 const { 
     name,
     pass
 } = data;

    var err = errors ? errors : {
        hasError: false,
        errorsObj: {}
    }

 let Validation = {
     name : {
          Validate : [
              {
                condition : name.length < 3,
                message : 'Please Specify your full Name.'
              },
              {
                  condition: /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/.test(name),
                  message : 'Name can not contain any number or any special characters.'
              }
          ],
          elem : "name"
     },
     pass: {
         Validate: [
             {
                 condition: pass.length < 6,
                 message: 'Password can not be less than 6 characters.'
             },
             {
                 condition: name === pass,
                 message: 'Your name can not contain your password.'
             }
         ],
         elem: "pass"
     }
 }

//  // errorsObj = {
//     name : {
//         message : ["",""]
//     },
//     pass : {
//         message : ["",""]
//     }
//  }

    if (check === "all") {
        for (var i in Validation) {
            var conArray = Validation[i].Validate;
            err.errorsObj[Validation[i].elem] = { message: [] }

            for (var j = 0; j < conArray.length; j++) {
                if (conArray[j].condition) {
                    err.hasError = true;
                    err.errorsObj[Validation[i].elem].message.push(conArray[j].message)
                }
            }

            if (!err.errorsObj[Validation[i].elem].message.length) {
                delete err.errorsObj[Validation[i].elem]
            }
        }
        return err;
    }

    if (check === "each") {
            var conArray = Validation[field].Validate;
            err.errorsObj[Validation[field].elem] = { message: [] }
            for (var j = 0; j < conArray.length; j++) {
                if (conArray[j].condition) {
                    err.hasError = true;
                    err.errorsObj[Validation[field].elem].message.push(conArray[j].message)
                }
            }
            if (!err.errorsObj[Validation[field].elem].message.length) {
                delete err.errorsObj[Validation[field].elem]
            }
        return err;
    }

}
export default validateForm;