/*function displayMessageCall() {
	var bankId = $("#ddlPreferBank").val();
	$.ajax({
		type: "POST",
		url: "/Services/PaymentService.asmx/GetMemberSavedAccount",
		data: "{'id':'" + bankId + "'}",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: onSuccessCall
	})
}*/
function resetWithdrawal(pageload) {
	var preferbank = $("#txtPreferBank").val();
	$("#ddlPreferBank").find("option").length < 1 ? $("#ckNewAcc").click() : ($("#ckPreferAcc").click(), $("#ddlPreferBank").val(preferbank), displayMessageCall()), $("#ddlBankName option:first-child").attr("selected", "selected"), defaultBankCode(), $(".rowotherbank").css("display", "none"), pageload != !0 && ($("#MainForm").clearForm(), $(".error,.amountError,#divMsg").html(""))
}
function resetDivBank() {
	$(".divVietBankAcc").find("label.error").text(""), $(".divBankAcc").find("label.error").text(""), $(".divBankAllOther").find("label.error").text(""), $(".divBankForIcbc").find("label.error").text(""), $(".rowotherbank").find("label.error").text("")
}
function setDisable() {
	$("#txtUsedName").attr("disabled", "disabled"), $("#txtUsedBank").attr("disabled", "disabled"), $("#txtUsedAcc").attr("disabled", "disabled"), $("#txtUsedProvince").attr("disabled", "disabled"), $("#txtUsedCity").attr("disabled", "disabled"), $("#txtUsedBranch").attr("disabled", "disabled")
}
function defaultBankCode() {
	var bankCode = $("#ddlBankName").val();
	resetDivBank(), bankCode == "VietinBank" ? ($(".divBankAcc").css("display", "none"), $(".divVietBankAcc").css("display", "block")) : ($(".divBankAcc").css("display", "block"), $(".divVietBankAcc").css("display", "none")), bankCode == "Industrial and Commercial Bank(ICBC)" || bankCode == "工商银行" ? ($(".divBankAllOther").css("display", "none"), $(".divBankForIcbc").css("display", "block"), $(".isHid").css("display", "none")) : ($(".divBankAllOther").css("display", "block"), $(".divBankForIcbc").css("display", "none"), $(".isHid").css("display", "inline")), bankCode == "0" ? $(".rowotherbank").css("display", "") : $(".rowotherbank").css("display", "none")
}
/*$(document).ready(function() {
	$.fn.clearForm = function() {
		return this.each(function() {
			var type = this.type,
				tag = this.tagName.toLowerCase();
			if (tag == "form") return $(":input", this).clearForm();
			type == "text" && this.id != "txtDepDateFrm" && this.id != "txtDepDateTo" || type == "password" || tag == "textarea" ? this.value = "" : type == "checkbox" && (this.checked = !1)
		})
	}, 
	$("#ckNewAcc").click(function() {
		$("#ckPreferAcc").prop("checked", !1), $("#ckNewAcc").prop("checked", !0), $("#ckRmbBank").prop("checked", !0), $("#divRmb").css("display", "block"), $("#ddlPreferBank").attr("disabled", "disabled"), $("#divUsedAcc").css("display", "none"), $("#divNewAcc").css("display", "block")
	}),
	 $("#ckPreferAcc").click(function() {
		$("#ckNewAcc").prop("checked", !1), $("#ckPreferAcc").prop("checked", !0), $("#ckRmbBank").prop("checked", !1), $("#ddlPreferBank").removeAttr("disabled"), $("#divRmb").css("display", "none"), $("#divUsedAcc").css("display", "block"), $("#divNewAcc").css("display", "none")
	}), 
	$("#ddlPreferBank").change(function() {
		displayMessageCall()
	}), 
	$("#ddlBankName").change(function() {
		defaultBankCode(), $(".error,.amountError,#divMsg").html("")
	}), 
	resetWithdrawal(!0), setDisable(), defaultBankCode(), $("#txtAmount").keypress(function(e) {}), $("#txtAmount").keyup(function() {}), $("#BtnSubmit").click(function() {
		var isValid = $("#MainForm").valid();
		return isValid == !0 && getLoading(), $("#MainForm").valid()
	}),
	 $("#BtnCancel").click(function() {
		resetWithdrawal(!1)
	})
})*/