//Criar uma variável para manipular o XML
xmlhttp = new XMLHttpRequest();
//seleciona o arquivo XML
xmlhttp.open("GET","xml/conteudo.xml", false);
//Enviar o arquivo para leitura
xmlhttp.send();
//Informar que o arquivo enviado é um XML
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("conteudo");

function Img1(){
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<img src='img/" + x[i].getElementsByTagName("Img1")[0].childNodes[0].nodeValue + "' class='img' height='150px'>");
    }
}