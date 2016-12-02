function displayMessageCall() {
	var bankId = $("#ddlPreferBank").val();
	$.ajax({
		type: "POST",
		url: "/Services/PaymentService.asmx/GetMemberSavedAccount",
		data: "{'id':'" + bankId + "'}",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: onSuccessCall
	})
}
function showHide(id) {
	var el = document.getElementById(id);
	el.style.display == "none" ? (el.style.display = "block", document.getElementById("ShowHideMe").innerHTML = "[-]",parent.document.getElementById('tabContent').height = 1200): (el.style.display = "none", document.getElementById("ShowHideMe").innerHTML = "[+]",parent.document.getElementById('tabContent').height = 1000)

}
function showHide_Remark(id) {
	var el = document.getElementById(id);
	el.style.display == "none" ? (el.style.display = "block", document.getElementById("ShowHideRemark").innerHTML = "[-]") : (el.style.display = "none", document.getElementById("ShowHideRemark").innerHTML = "[+]")
}
function resetDeposit(pageload) {
	var preferbank = $("#txtPreferBank").val();
	$("#ddlPreferBank").find("option").length < 1 ? $("#ckNewAcc").click() : ($("#ckPreferAcc").click(), $("#ddlPreferBank").val(preferbank), displayMessageCall()), $("#ddlBankName option:first-child").attr("selected", "selected"), defaultBankCode(), $(".rowotherbank").css("display", "none"), pageload != !0 && ($("#MainForm").clearForm(), $(".error,.amountError,#divMsg").html(""))
}
function resetDivBank() {
	$(".divVietBankAcc").find("label.error").text(""), $(".divBankAcc").find("label.error").text(""), $(".rowotherbank").find("label.error").text("")
}
function setDisable() {
	$("#txtUsedName").attr("disabled", "disabled"), $("#txtUsedBank").attr("disabled", "disabled"), $("#txtUsedAcc").attr("disabled", "disabled")
}
function defaultBankCode() {
	var bankCode = $("#ddlBankName").val();
	resetDivBank(), bankCode == "VietinBank" ? ($(".divBankAcc").css("display", "none"), $(".divVietBankAcc").css("display", "block")) : ($(".divBankAcc").css("display", "block"), $(".divVietBankAcc").css("display", "none")), bankCode == "0" ? $(".rowotherbank").css("display", "") : $(".rowotherbank").css("display", "none")
}
$(document).ready(function() {
	$.fn.clearForm = function() {
		return this.each(function() {
			var type = this.type,
				tag = this.tagName.toLowerCase();
			if (tag == "form") return $(":input", this).clearForm();
			type == "text" && this.id != "txtTransactionDate" && this.id != "txtDepDateFrm" && this.id != "txtDepDateTo" || type == "password" || tag == "textarea" ? this.value = "" : type == "checkbox" ? this.checked = !1 : type == "radio" && this.value == "0" && this.click()
		})
	}, $("#ckNewAcc").click(function() {
		$("#ckPreferAcc").prop("checked", !1), $("#ckNewAcc").prop("checked", !0), $("#ckRmbBank").prop("checked", !0), $("#divRmb").css("display", "block"), $("#ddlPreferBank").attr("disabled", "disabled"), $("#divUsedAcc").css("display", "none"), $("#divNewAcc").css("display", "block")
	}), $("#ckPreferAcc").click(function() {
		$("#ckNewAcc").prop("checked", !1), $("#ckPreferAcc").prop("checked", !0), $("#ckRmbBank").prop("checked", !1), $("#ddlPreferBank").removeAttr("disabled"), $("#divRmb").css("display", "none"), $("#divUsedAcc").css("display", "block"), $("#divNewAcc").css("display", "none")
	}), $("#ddlPreferBank").change(function() {
		displayMessageCall()
	}), $("#ddlBankName").change(function() {
		defaultBankCode(), $(".error,.amountError,#divMsg").html("")
	}), resetDeposit(!0), setDisable(), defaultBankCode(), $("#txtAmount").keyup(function() {
		clickReload()
	}), $("#txtCouponCode").keyup(function() {
		clickReload()
	}), $("#BtnSubmit").click(function() {
		var amount = $("#txtAmount").val(),
			currentDate, validate;
		return $("#txtAmount").val(amount.replace(/,/g, "")), currentDate = $("#txtTransactionDate").val(), $("#hfTransactionDate").val(currentDate), $("#btnReload").click(), validate = $("#MainForm").valid(), $("#tempCouponStatus") && $("#tempCouponStatus").val() == "fail" && (validate = !1), ($(".lblError").length || $("#hfHasRightFormat").val() == "false") && (validate = !1), memberCurrency == "IDR" && validate && PokerRegister == "True" && isLogin == "true" && memberWallet == "IPK" && (PokerPopupLogin(""), validate = !1), validate ? getLoading() : convertWithComma($("#txtAmount")), validate
	}), $("#BtnCancel").click(function() {
		$("#ReceiptUpload").val(""), resetDeposit(!1)
	}), $("#TxtAccLastFive").numeric({
		decimal: !1,
		negative: !1
	}, function() {
		this.value = "", this.focus()
	})
})