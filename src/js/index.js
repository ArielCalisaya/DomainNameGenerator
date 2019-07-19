/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector("#boton").addEventListener("click", function() {
    document.querySelector("#generator").innerHTML = generator();

    function generator() {
      let domain = "";
      const pronoun = ["the", "our"];
      const adj = ["great", "big"];
      const noun = ["jogger", "racoon"];

      for (let a = 0; a < pronoun.length; a++) {
        for (let b = 0; b < adj.length; b++) {
          for (let c = 0; c < noun.length; c++) {
            // let list = `<h2>${domain}.com</h2>`;
            //return list;
            domain += "<li>" + pronoun[a] + adj[b] + noun[c] + ".com</li>";
            console.log(domain);
          }
        }
      }
      return domain;
    }
  });
};
