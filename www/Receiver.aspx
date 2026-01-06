<%@ Page Language="C#" %>
<%@ import Namespace="System.Web.Security" %>

<script runat="server">
  private void Page_Load(object sender, System.EventArgs e){
    RSSBus.RSBEngine eng = new RSSBus.RSBEngine();
    try {
      eng.Call("~/pub/Receive.rsb");
    } finally {
      eng.LogRequest();
    }
  }
</script>
