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

    loadAllCustomers();

});

function loadAllCustomers() {
    $("#tblCustomer").empty();

    for (var customer of customers){
        var cusData = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.contact}</td><td>${customer.salary}</td></tr>`;

    }


}

function searchCustomer(cusID) {
    for (let customer of customers) {
        if (customer.id == cusID) {
            return customer;
        }
    }
}