

   
      function criaCookies(nome, valor, expira) {
        var dtExpira = "expires="+expira;
        document.cookie =  nome + "=" + valor + "; " + dtExpira;
      } 

      function lerCookie(nome){
        var vnome = nome + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++){
            var c = ca[i];
            while (c.charAt(0)==' '){
                c = c.substring(1);
            }
            if(c.indexOf(vnome) == 0)
            return c.substring(vnome.length, c.length);
        }
        return "";
      }

      function verificaCookie(){
        var username=lerCookie("username");
        if (username!=""){
            
        }else{
            username = confirm("🍪 Aceitar COOKIES! Detales em Menu > Termos de Uso", "");
            if (username != "" && username != null){
                criaCookies("username", username, "Tue, 01 Jan 2115 12:00:00 UTC")
                location.reload();
            }
        }
       
      }
    