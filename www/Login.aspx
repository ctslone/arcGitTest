<%@ Page Language="C#" ValidateRequest="false" %>
<%@ import Namespace="System.Web.Security" %>

<script runat="server">
  private void Page_Load(object sender, System.EventArgs e) {
    string referer = Request.Headers["referer"];
    string host = Request.Headers["host"];
    if (String.IsNullOrEmpty(referer) || !referer.Contains("://" + (host == null ? "" : host))) {
      Response.StatusCode = 403;
      return;
    }
    string username = Request["j_username"];
    string password = Request["j_password"];

    string ip = Request.UserHostAddress;
    long lockout = RSSBus.RSBSecurityLogin.CalcUserLockout(RSSBus.RSBSecurityLogin.GetUsername(username), ip);
    if (lockout > 0) {
      if (Request.IsAuthenticated) {
        RSSBus.RSBSecurityLogin.Logout();
      }
      RSSBus.RSBSecurityLogin.SendRedirect("login.rst?action=lockout&lockout=" + (lockout/1000/60 + 1));
    } else {
      try {
        if (Request.IsAuthenticated) {
          RSSBus.RSBSecurityLogin.ResumeFilter(ip);
          return;
        }
        if (!string.IsNullOrEmpty(username)
            && !string.IsNullOrEmpty(password)
            && RSSBus.RSBLoginModule.Authenticate(username, password)) {
          Session["__RSSBUS__"] = Session.SessionID;
          FormsAuthentication.SetAuthCookie(username, false);
          RSSBus.RSBSecurityLogin.StartFilter(username, ip);
          return;
        }
        if (!String.IsNullOrEmpty(username) && !String.IsNullOrEmpty(password)) RSSBus.RSBSecurityLogin.RecordLogin(username, ip, false);
        RSSBus.RSBSecurityLogin.SendRedirect("login.rst?action=error");
      } catch (Exception ex) {
        if (Request.IsAuthenticated) {
          RSSBus.RSBSecurityLogin.Logout();
        }
        if(!String.IsNullOrEmpty(RSSBus.RSBSecurityLogin.GetUsername(username))) RSSBus.RSBSecurityLogin.RecordLogin(username, ip, false);
        RSSBus.RSBSecurityLogin.SendRedirect("login.rst?action=error");
      }
    }
  }
</script>