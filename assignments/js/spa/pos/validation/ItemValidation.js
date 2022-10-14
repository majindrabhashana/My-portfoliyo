$("#txtItemCode").focus();

const itemCodeRegEx = /^(I00-)[0-9]{1,3}$/;
const itemNameRegEx = /^[A-z ]{5,20}$/;
const itemQtyRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
const itemUnitPriceRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

let itemValidations = [];
itemValidations.push({reg: itemCodeRegEx, field: $('#txtItemCode'),error:'Item Code Pattern is Wrong : I00-001'});
itemValidations.push({reg: itemNameRegEx, field: $('#txtItemName'),error:'Item Name Pattern is Wrong : A-z 5-20'});
itemValidations.push({reg: itemQtyRegEx, field: $('#txtItemQty'),error:'Ite Qty Pattern is Wrong : 0-9 ,/'});
itemValidations.push({reg: itemUnitPriceRegEx, field: $('#txtItemUnitPrice'),error:'Item Unit Pattern is Wrong : 0-9 ,/'});

$("#txtItemCode,#txtItemName,#txtItemQty,#txtItemUnitPrice").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});
$("#txtItemCode,#txtItemName,#txtItemQty,#txtItemUnitPrice").on('keyup', function (event) {
    checkValidityItem();
});

$("#txtItemCode,#txtItemName,#txtItemQty,#txtItemUnitPrice").on('blur', function (event) {
    checkValidityItem();
});

function checkValidityItem() {
    let errorCount=0;
    for (let validation of itemValidations) {
        if (check(validation.reg,validation.field)) {
            textSuccess(validation.field,"");
        } else {
            errorCount=errorCount+1;
            setTextError(validation.field,validation.error);
        }
    }
    setItemButtonState(errorCount);
}
$("#txtItemCode").on('keydown', function (event) {
    if (event.key == "Enter" && check(itemCodeRegEx, $("#txtItemCode"))) {
        $("#txtItemName").focus();
    } else {
        focusText($("#txtItemCode"));
    }
});
$("#txtItemName").on('keydown', function (event) {
    if (event.key == "Enter" && check(itemNameRegEx, $("#txtItemName"))) {
        focusText($("#txtItemQty"));
    }
});
$("#txtItemQty").on('keydown', function (event) {
    if (event.key == "Enter" && check(itemQtyRegEx, $("#txtItemQty"))) {
        focusText($("#txtItemUnitPrice"));
    }
});

$("#txtItemUnitPrice").on('keydown', function (event) {
    if (event.key == "Enter" && check(itemUnitPriceRegEx, $("#txtItemUnitPrice"))) {
        let res = confirm("Do you want to add this item.?");
        if (res) {
            clearAllTexts();
        }
    }
});