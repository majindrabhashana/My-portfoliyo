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
        var all= `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.contact}</td><td>${customer.salary}</td><td><button class="btn btn-warning btn-mini" data-bs-target="#editCustomers"
                        data-bs-toggle="modal" id="btn-edit"><i class="fa-solid fa-pen-to-square"></i> Edit
                        </button>
                        <button class="btn btn-danger btn-mini delete"><i class="fa-solid fa-trash"></i> Delete</button>
                        </td>
                    </tr>`;
        $("#tblCustomer").append(all);

    }

}
function searchCustomer(cusID) {
    for (let customer of customers) {
        if (customer.id == cusID) {
            return customer;
        }
    }
}












function clearData() {
    $("#txtCustomerID").val("");
    $("#txtCustomerName").val("");
    $("#txtCustomerAddress").val("");
    $("#txtCustomerContact").val("");
    $("#txtCustomerSalary").val("");
}
