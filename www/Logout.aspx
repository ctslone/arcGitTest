<%@ Page Language="C#" %>
<%@ import Namespace="System.Web.Security" %>
<%@ import Namespace="System.Web.UI" %>

<script runat="server">
  private void Page_Load(object sender, System.EventArgs e){
    if (Context.User != null && Context.User.Identity != null) {
      RSSBus.RSBSecurityLogin.RecordLogout(Context.User.Identity.Name, Request.UserHostAddress);
    }
    FormsAuthentication.SignOut();
    string returl = FormsAuthentication.LoginUrl;
    string logout = (string)(Session["logouturl"]);
    if (null != logout) {
      returl = logout;
    }
    Session.Abandon();

    HttpCookie sessionCookie = Request.Cookies["ASP.NET_SessionId"];
    if (sessionCookie != null) {
      sessionCookie = new HttpCookie("ASP.NET_SessionId");
      sessionCookie.Value = null;
      sessionCookie.Expires = DateTime.Now.AddYears(-1);
      Response.Cookies.Add(sessionCookie);
    }

    HttpCookie formCookie = Request.Cookies[FormsAuthentication.FormsCookieName];
    if (formCookie != null) {
      formCookie = new HttpCookie(FormsAuthentication.FormsCookieName);
      formCookie.Value = null;
      formCookie.Expires = DateTime.Now.AddYears(-1);
      Response.Cookies.Add(formCookie);
    }

    Response.Redirect(returl, false);
  }
</script>
