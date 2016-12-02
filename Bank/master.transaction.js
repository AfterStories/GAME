// add comma for every thousand
function removeRougeChar(convertString) {
	if (convertString.substring(0, 1) == ",") {
		return convertString.substring(1, convertString.length);
	}
	return convertString;
}

function checkBBIN() {
	return ($("#ddlAccTo").val() == 'BOY2' || $("#ddlAccFrom").val() == 'BOY2');
}

function checkIPSB() {
	return ($("#ddlAccTo").val() == 'IPSB' || $("#ddlAccFrom").val() == 'IPSB');
}

function checkAG() {
	return ($("#ddlAccTo").val() == 'AG' || $("#ddlAccFrom").val() == 'AG');
}
function checkSP() {
	return ($("#ddlAccTo").val() == 'SP' || $("#ddlAccFrom").val() == 'SP');
}

function checkAB() {
    return ($("#ddlAccTo").val() == 'AB' || $("#ddlAccFrom").val() == 'AB');
}

function convertWithComma(value) {
    var $this = $(value);
    var num = $this.val().replace(/[^0-9\.]+/g, '').replace(/,/gi, "").split("").reverse().join("");
    var num2 = removeRougeChar(num.replace(/(([0-9]{2,}\.)?(\d{3}))/g, "$1,").split("").reverse().join(""));
    $this.val(num2);
}

$(document).ready(function() {
	$('#txtAmount').on("focus", function(e) {
		var $this = $(this);
		var num = $this.val().replace(/,/g, "");
		$this.val(num);

	}).on("blur", function(e) {
	    var $this = $(this);
	    var num = $this.val().replace(/[^0-9\.]+/g, '').replace(/,/gi, "").split("").reverse().join("");
	    var num2 = removeRougeChar(num.replace(/(([0-9]{2,}\.)?(\d{3}))/g, "$1,").split("").reverse().join(""));
	    $this.val(num2);
	});
	
	$.validator.addMethod("DigitRegex", function (value, element, regexp) {
	    var re = new RegExp(regexp);
		return this.optional(element) || re.test(value.replace(/,/g, ""));
	}, "");

	$.validator.addMethod("regex", function (value, element, regexp) {
		var re = new RegExp(regexp);
		return this.optional(element) || re.test(value);
	}, "");

	$.validator.addMethod("boydigit", function (value, element, param) {
		var intRegex = /^\d+$/;
		if (checkBBIN()) {
		    return this.optional(element) || intRegex.test(value.replace(/,/g, ""));
		}
		return true;
	}, "");

	$.validator.addMethod("AGdecimal", function (value, element, param) {
		var intRegex = /^\d+(\.[0]{1,2})?$/;
		if ($("#ddlAccFrom").val() == 'AG') {
		    return this.optional(element) || intRegex.test(value.replace(/,/g, ""));
		}
		return true;
	}, "");
});