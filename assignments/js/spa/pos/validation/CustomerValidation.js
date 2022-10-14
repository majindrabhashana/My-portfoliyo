$("#txtCustomerID").focus();

const cusIDRegEx = /^(C00-)[0-9]{1,3}$/;


let customerValidations = [];
customerValidations.push({reg: cusIDRegEx, field: $('#txtCustomerID'),error:'Customer ID Pattern is Wrong : C00-001'});
