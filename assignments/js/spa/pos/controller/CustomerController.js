$("#saveCustomer").click(function () {
    let customerID = $("#txtCustomerID").val();
    let customerName = $("#txtCustomerName").val();
    let customerAddress = $("#txtCustomerAddress").val();
    let customerContact = $("#txtCustomerContact").val();
    let customerSalary = $("#txtCustomerSalary").val();
// object
    var customerObject = {
        id: customerID,
        name: customerName,
        address: customerAddress,
        contact: customerContact,
        salary: customerSalary
    }

    customer.push(customerObject)






})