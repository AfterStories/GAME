Onebook("SiteTemplate", ["global", jQuery, "i18n", "Identity", "Message"], function (global, $, i18n, Identity, message) {
  'use strict';

var Banner = React.createClass({
  GotoAsia: function GotoAsia() {
      var hostName = window.location.host;
      var FrameObj = window.top;
     
      if (Identity.IsApi) {
          FrameObj = window;
      }
      
      switch (Identity.Dep_ActStatus) {
        case "2":
           /* FrameObj.location.href = "/main.aspx?act=sports&WebSkinType=0";*/
            parent.location.href = "../index_18.html";
          break;
        case "1":
          if (Identity.IsApi) {
            /*  FrameObj.location.href = "/index.aspx?act=sports&WebSkinType=0";*/
              parent.location.href = "../index_18.html";
          } else {
            /*  FrameObj.location.href = "/vender.aspx?act=sports&WebSkinType=0";*/
              parent.location.href = "../index_18.html";
          }
          break;
        default:
            
            /*FrameObj.location.href = "/vender.aspx?act=sports&WebSkinType=0";*/
            parent.location.href = "../index_18.html";
          break;
      }
  },
  GotoEuro: function GotoEuro() {
      var hostName = window.location.host;
      var FrameObj = window.top;    
    
      if (Identity.IsApi) {
          FrameObj = window;
      }
      
      FrameObj.location.href = "../EuroSite/index_17.html";
  },
  render: function render() {
      return React.createElement(
            "div",
            { className: "switch-view-tabs" },
            React.createElement(
              "ul",
              { className: "col-3" },
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "javascript:void(0);", onClick: this.GotoAsia },
                  React.createElement(
                    "span",
                    null,
                    "经典版"
                  )
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { className: "selected" },
                  React.createElement(
                    "span",
                    null,
                    "全新版"
                  )
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "javascript:void(0);", onClick: this.GotoEuro },
                  React.createElement(
                    "span",
                    null,
                    "欧洲版"
                  )
                )
              )
            )
          );
    }
  });

  ReactDOM.render(React.createElement(Banner, null), $('#banner').get(0));
});
