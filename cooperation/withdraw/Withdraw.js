$(document).ready(function() {
            $.ajax({
            type: "GET",
            url: 'http://59.110.10.115/fun/agent/getbanklist',
            data: {},
            success: function (data) {
                for (var i = 0; i < data.data.bankList.length; i++) {
                    var bankname = data.data.bankList[i].name;
                    var bankid = data.data.bankList[i].id;

                    var countryCode = '<option value="'+bankid+'">'+bankname+'</option>'
                    $("#ddlBankID").append(countryCode);
                }
                },
            error: function (a,b,c) {
               alert(data.errMsg);
                 }
        });
})

        // Input Validation
        function callSubmit() {
            var IsAccountNumberFormat = /(?!^.*^[\-]*$.*$)(?!^.*^[\s]*$.*$)(?!^.*-[\s]*-.*$)(?!^.*\s\s.*$)(?!^.*\-\s.*$)(?!^.*\s\-.*$)(^[\d\s\-]+$)/; //Only numbers, space and dash allowed
            var decimalOnly = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;
            var isNotSymbol = /(?!^.*^[\-]*$.*$)(?!^.*-[\s]*-.*$)(?!^.*\s\s.*$)(?!^.*\s\-.*$)(?!^.*\-\s.*$)(^[^\?*.\?!\@#\%\&\~`\$\^_\,()\//]*$)/; // Only '-' and space allowed
            var isAllowedSymbol = /(?!^.*\/[\s]*\/.*$)(?!^.*\,[\s]*\,.*$)(?!^.*\.[\s]*\.*$)(?!^.*\-[\s]*\-.*$)(?!^.*\s\s.*$)(?!^.*^[\s]*$.*$)(?!^.*^[\/]*$.*$)(?!^.*^[\,]*$.*$)(?!^.*^[\.]*$.*$)(?!^.*^[\-]*$.*$)(^[^\?*\?!\@#\%\&\~`\$\^_()]*$)/; // '/', ',', '.', '-' and space allowed
            var isNotSymbolOrSpace = /^[^\?*.\?!\@#\%\&\~`\$\^_\s-\,()\//]*$/; // No symbols allowed
            var isPhoneFormat = /(?!^.*^[-]*$.*$)(?!^.*\+@[\s]*-.*$)(?!^.*-[\s]*\+.*$)(?!^.*\([\s]*\).*$)(?!^.*\)[\s]*\).*$)(?!^.*\([\s]*\(.*$)(?!^.*-[\s]*-.*$)(?!^.*\+[\s]*\+.*$)(?!^.*\+[\s]*-.*$)(^(\(?\+-?[0-9]*\)?)?[0-9\- \(\)]{1,20}$)/;
            var NotAllowTagsAndSymbols = /<\/?[a-z][a-z0-9]*[^<>]*>|<!--.*?--> |[~!@#$%^&*()_+,.\/:";'\[\]\|{}=-]/; // This regex recognize any languages (letters and numbers), and not allow any tags and symbols

            var MinNum = 0;
            var MaxNum = 0;
            var strCurrency = '';
            var getCurrency = 'CNY';
            switch (getCurrency) {
                //Khairil change to new Withdrawal Limit for all brands 
                case 'THB':
                    MinNum = 2000;
                    MaxNum = 1200000;
                    strCurrency = 'THB';
                    break;
                case 'CNY':
                case 'RMB':
                    MinNum = 300;
                    MaxNum = 500000;
                    strCurrency = 'CNY';
                    break;
                case 'USD':
                    MinNum = 50;
                    MaxNum = 40000;
                    strCurrency = 'USD';
                    break;
                case 'IDR':
                    MinNum = 1000;
                    MaxNum = 400000; //not yet state, just a sample
                    strCurrency = 'IDR';
                    break;
                case 'VND':
                    MinNum = 1500;
                    MaxNum = 850000;
                    strCurrency = 'VND';
                    break;
                case 'KRW':
                    MinNum = 500;
                    MaxNum = 50000000;
                    strCurrency = 'KRW';
                    break;
            }

            // Withdrawal Amount Validation (txtamount)
            {
                if (!IsNotEmpty(document.getElementById('txtamount').value)) {
                    alert('取款金额 未输入请确认！');
                    document.getElementById('txtamount').focus();
                    return false;
                }
                if (!decimalOnly.test(document.getElementById('txtamount').value)) {
                    alert('存款金额请输入整数（不带小数点）！');
                    document.getElementById('txtamount').focus();
                    return false;
                }
                if (!IsNumeric(document.getElementById('txtamount').value)) {
                    alert('存款金额请输入整数（不带小数点）！');
                    document.getElementById('txtamount').focus();
                    return false;
                }
                if (document.getElementById('txtamount').value < MinNum) {
                    alert('最低提款金额！' + ' (' + strCurrency + ' ' + MinNum + ')');
                    document.getElementById('txtamount').focus();
                    return false;
                }
                if (document.getElementById('txtamount').value > MaxNum) {
                    alert('最高提款金额！' + ' (' + strCurrency + ' ' + MaxNum + ')');
                    document.getElementById('txtamount').focus();
                    return false;
                }
            }

            var rdWithdrawal = document.getElementById("rdlWithdrawal_0");
            if (rdWithdrawal && rdWithdrawal.checked) {
                //Email_address  
                if (!IsNotEmpty(document.getElementById("txtEmail").value)) {
                    alert('电子邮箱地址 未输入请确认!');
                    document.getElementById("txtEmail").focus();
                    return false;
                }
                if (!IsEmail(document.getElementById("txtEmail").value)) {
                    alert('电子邮箱地址 错误格式请确认!');
                    document.getElementById("txtEmail").select();
                    return false;
                }
                return true;
            }

            // Bank Account Number Validation (ddlYourBankCount)
            {
              
                    if (!IsNotEmpty(document.getElementById('txtAtmcard').value)) {
                        alert('银行账户号码 未输入请确认!');
                       document.getElementById('txtAtmcard').focus();
                       return false;
                   }
                   /*if (!IsAccountNumberFormat.test(document.getElementById('txtAtmcard.ClientID').value)) {
                        alert('AlertMessage.InvalidAccountNumber');
                        document.getElementById('txtAtmcard.ClientID').focus();
                        return false;
                    }*/
              
           }

            // Bank Account Holder Name Validation (txtAccount)
           {
               if (!IsNotEmpty(document.getElementById('txtAccount').value)) {
                    alert('银行账户的户名 未输入请确认!');
                    document.getElementById('txtAccount').focus();
                    return false;
                }

               if (NotAllowTagsAndSymbols.test(document.getElementById('txtAccount').value)) {
                   alert('银行账户的户名无效！');
                    document.getElementById('txtAccount').focus();
                    return false;
                }
            }

            // Bank Name Validation (txtBankName)
            {
                try {
                    if (!IsNotEmpty(document.getElementById('txtBankName').value)) {
                        alert('银行名称 未输入请确认!');
                        document.getElementById('txtBankName').focus();
                        return false;
                    }
                    
                    if (NotAllowTagsAndSymbols.test(document.getElementById('txtBankName').value)) {
                        alert('银行名称无效！');
                        document.getElementById('txtBankName').focus();
                        return false;
                    }
                } catch (e) { }
            }

            // Bank Address	Validation (txtBankAddress)
            {
                try {
                    if (!IsNotEmpty(document.getElementById('txtBankAddress').value)) {
                        alert('银行地址 未输入请确认!');
                        document.getElementById('txtBankAddress').focus();
                        return false;
                    }

                    if (NotAllowTagsAndSymbols.test(document.getElementById('txtBankAddress').value)) {
                        alert('银行地址无效！');
                        document.getElementById('txtBankAddress').focus();
                        return false;
                    }
                } catch (e) { }
            }

            // Bank Swift / IBAN/ABA Code Number Validation (txtBankswift)
            {
                try {
                    if (IsNotEmpty(document.getElementById('txtBankswift').value)) {
                        if (!isNotSymbolOrSpace.test(document.getElementById('txtBankswift').value)) {
                            alert('银行swift / IBAN/ABA 代码号码无效！');
                            document.getElementById('txtBankswift').focus();
                            return false;
                        }
                    }
                } catch (e) { }
            }

            // Bank Telephone Number Validation(txtBankTelNo)
            {
                try {
                    if (IsNotEmpty(document.getElementById('txtBankTelNo').value)) {
                        if (!isPhoneFormat.test(document.getElementById('txtBankTelNo').value)) {
                            alert('银行电话无效！');
                            document.getElementById('txtBankTelNo').focus();
                            return false;
                        }
                    }
                } catch (e) { }
            }

            // Province Validation (txtProvince)
            {
                if (IsNotEmpty(document.getElementById('txtProvince').value)) {
                    if (NotAllowTagsAndSymbols.test(document.getElementById('txtProvince').value)) {
                        alert('请输入正确的省份！');
                        document.getElementById('txtProvince').focus();
                        return false;
                    }
                }
            }

            // City Validation (txtCity)
            {
                if (IsNotEmpty(document.getElementById('txtCity').value)) {
                    if (NotAllowTagsAndSymbols.test(document.getElementById('txtCity').value)) {
                        alert('请输入正确的城市/城镇名称！');
                        document.getElementById('txtCity').focus();
                        return false;
                    }
                }
            }

            // Branch Validation (txtBranch)
            {
                if (!IsNotEmpty(document.getElementById('txtBranch').value)) {
                    alert('分行 未输入请确认！');
                    document.getElementById('txtBranch').focus();
                    return false;
                }

                if (NotAllowTagsAndSymbols.test(document.getElementById('txtBranch').value)) {
                    alert('请输入正确的分行！');
                    document.getElementById('txtBranch').focus();
                    return false;
                }
            }

            // Country Validation (txtCountryName)
            {
                try {
                    if (!IsNotEmpty(document.getElementById('txtCountryName').value)) {
                        alert('国家 未输入请确认!');
                        document.getElementById('txtCountryName').focus();
                        return false;
                    }

                    if (NotAllowTagsAndSymbols.test(document.getElementById('txtCountryName').value)) {
                        alert('格式错误.');
                        document.getElementById('txtCountryName').focus();
                        return false;
                    }
                } catch (e) { }
                
            }

                    var amount = $("#txtamount").val(),
                    banknum = $("#txtAtmcard").val(),
                    amountname = $("#txtAccount").val(),
                    bankname = $('#ddlBankID option:selected').val(),                    
                    sheng = $("#txtProvince").val(),
                    city = $("#txtCity").val(),
                    brunch = $("#txtBranch").val()
                    var usertoken = getCookie("s");
                    $.ajax({
                        type: "GET",
                        url: 'http://59.110.10.115/fun/agent/draw',
                        data: {
                                amount:amount,
                                account:banknum,
                                accountHolder:amountname,
                                province:sheng,
                                city:city,
                                bankId:bankname,
                                subbranch:brunch,
                                s:usertoken
                        },
                        success: function (data) {
                           alert(JSON.stringify(data));
                            
                                if (data.errCode==0){
                                    confirm('您发送了一条提款请求，请等待审核确认！');
                                }else{
                                     alert(data.errMsg);
                                }
                            },
                        error: function (data) {
                               alert("网络错误请重试");
                             }
                    });

        }

function getCookie(c_name) {
  var c_value = document.cookie;
  var c_start = c_value.indexOf(" " + c_name + "=");
  if (c_start == -1) {
      c_start = c_value.indexOf(c_name + "=");
  }
  if (c_start == -1) {
      c_value = null;
  }
  else {
      c_start = c_value.indexOf("=", c_start) + 1;
      var c_end = c_value.indexOf(";", c_start);
      if (c_end == -1) {
          c_end = c_value.length;
      }
      c_value = unescape(c_value.substring(c_start, c_end));
  }
  return c_value;
}

        function IsNumeric(strString)
            //  check for valid numeric strings	
        {
            var strValidChars = "0123456789.";
            var strChar;
            var blnResult = true;

            if (strString.length == 0) return false;

            //  test strString consists of valid characters listed above
            for (i = 0; i < strString.length && blnResult == true; i++) {
                strChar = strString.charAt(i);
                if (strValidChars.indexOf(strChar) == -1) {
                    blnResult = false;
                }
            }
            return blnResult;
        }

        function getBankAccountInfomation(bankAccountID) {
            if (bankAccountID == '0')
                return;
            //alert(bankAccountID)
            var cbo = new CallBackObject();
            cbo.OnComplete = setBankAccountInfomation;
            cbo.DoCallBack("GetBankAccountInfo.aspx?id=" + bankAccountID);
        }

        function setBankAccountInfomation(responseText, responseXml) {
            var xmlDom;
            if (window.ActiveXObject) {
                xmlDom = new ActiveXObject("MSXML2.DOMDOCUMENT.3.0");
                xmlDom.loadXML(responseText);
            }
            else {
                var domParser = new window.DOMParser();
                xmlDom = domParser.parseFromString(responseText, 'text/xml');
            }
            //window.alert(responseText);
            var rows = xmlDom.getElementsByTagName("NewDataSet");
            //AccountHolderName	    
            var _txtAccount = document.getElementById("txtAccount");
            var _txtProvince = document.getElementById("txtProvince");
            var _txtCity = document.getElementById("txtCity");
            var _txtBranch = document.getElementById("txtBranch");
            var _ddlBankID = document.getElementById("ddlBankID");
            var _ddlCountryCode = document.getElementById("ddlCountryCode");

            try {
                var _txtBankName = document.getElementById("txtBankName");
                var _txtBankAddress = document.getElementById("txtBankAddress");
                var _txtBankswift = document.getElementById("txtBankswift");
                var _txtBankTelNo = document.getElementById("txtBankTelNo");
            } catch (e) { }


            _txtAccount.value = rows[0].getElementsByTagName("AccountHolderName")[0].childNodes[0].data;
            if (rows[0].getElementsByTagName("Province")[0].childNodes[0])
                _txtProvince.value = rows[0].getElementsByTagName("Province")[0].childNodes[0].data;
            else
                _txtProvince.value = '';
            if (rows[0].getElementsByTagName("City")[0].childNodes[0])
                _txtCity.value = rows[0].getElementsByTagName("City")[0].childNodes[0].data;
            else
                _txtCity.value = '';
            if (rows[0].getElementsByTagName("Branch")[0].childNodes[0])
                _txtBranch.value = rows[0].getElementsByTagName("Branch")[0].childNodes[0].data;
            else
                _txtBranch.value = ''
            if (rows[0].getElementsByTagName("NationCode")[0].childNodes[0])
                _ddlCountryCode.value = rows[0].getElementsByTagName("NationCode")[0].childNodes[0].data;
            else
                _ddlCountryCode.value = ''

            try {
                if (rows[0].getElementsByTagName("BankName")[0].childNodes[0]) {
                    var bankName = rows[0].getElementsByTagName("BankName")[0].childNodes[0].data;

                    _txtBankName.value = bankName;
                }
                else
                    _txtBankName.value = '';
            } catch (e) { }

            try {
                if (rows[0].getElementsByTagName("BankAddress")[0].childNodes[0]) {
                    var bankAddress = rows[0].getElementsByTagName("BankAddress")[0].childNodes[0].data;

                    _txtBankAddress.value = bankAddress;
                } else
                    _txtBankAddress.value = '';
            } catch (e) { }

            try {
                if (rows[0].getElementsByTagName("SWIFTCode")[0].childNodes[0]) {
                    var Bankswift = rows[0].getElementsByTagName("SWIFTCode")[0].childNodes[0].data;

                    _txtBankswift.value = Bankswift;
                } else
                    _txtBankswift.value = '';
            } catch (e) { }

            try {
                _txtBankTelNo.value = '';
                if (rows[0].getElementsByTagName("BankTelNo")[0].childNodes[0]) {
                    var BankTelNo = rows[0].getElementsByTagName("BankTelNo")[0].childNodes[0].data;

                    _txtBankTelNo.value = BankTelNo;
                } else {
                    _txtBankTelNo.value = '';
                }
            } catch (e) { }


            if (_ddlBankID) {
                for (var i = 0; i < _ddlBankID.options.length; i++) {
                    if (_ddlBankID.options[i].innerHTML == bankName)
                        _ddlBankID.value = _ddlBankID.options[i].value;
                }
            }
            //alert(rows[0].getElementsByTagName("IIDD")[0].childNodes[0].data);		

        }
        function confirmDelete() {
            return window.confirm('您确认要删除一条记录吗？');
        }
        //-->
