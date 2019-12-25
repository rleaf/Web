/*
 Author : Jack Spirou
 Website: http://clientjs.org/
          https://github.com/jackspirou/clientjs
 License: Apache Software License 2.0
          http://www.apache.org/licenses/LICENSE-2.0
 Version: 0.1 (23 Jun 2019)
          Removed unneeded methods, reduced dependencies, and added md5 hash
*/
window.c = function() {
   function G() {
      for (var a = "", g = 0; g < K.plugins.length; g++) a = g === K.plugins.length - 1 ? a + K.plugins[g].name : a + (K.plugins[g].name + ", ");
      return a
   }

   function E() {
      for (var a = "Abadi MT Condensed Light;Adobe Fangsong Std;Adobe Hebrew;Adobe Ming Std;Agency FB;Aharoni;Andalus;Angsana New;AngsanaUPC;Aparajita;Arab;Arabic Transparent;Arabic Typesetting;Arial Baltic;Arial Black;Arial CE;Arial CYR;Arial Greek;Arial TUR;Arial;Batang;BatangChe;Bauhaus 93;Bell MT;Bitstream Vera Serif;Bodoni MT;Bookman Old Style;Braggadocio;Broadway;Browallia New;BrowalliaUPC;Calibri Light;Calibri;Californian FB;Cambria Math;Cambria;Candara;Castellar;Casual;Centaur;Century Gothic;Chalkduster;Colonna MT;Comic Sans MS;Consolas;Constantia;Copperplate Gothic Light;Corbel;Cordia New;CordiaUPC;Courier New Baltic;Courier New CE;Courier New CYR;Courier New Greek;Courier New TUR;Courier New;DFKai-SB;DaunPenh;David;DejaVu LGC Sans Mono;Desdemona;DilleniaUPC;DokChampa;Dotum;DotumChe;Ebrima;Engravers MT;Eras Bold ITC;Estrangelo Edessa;EucrosiaUPC;Euphemia;Eurostile;FangSong;Forte;FrankRuehl;Franklin Gothic Heavy;Franklin Gothic Medium;FreesiaUPC;French Script MT;Gabriola;Gautami;Georgia;Gigi;Gisha;Goudy Old Style;Gulim;GulimChe;GungSeo;Gungsuh;GungsuhChe;Haettenschweiler;Harrington;Hei S;HeiT;Heisei Kaku Gothic;Hiragino Sans GB;Impact;Informal Roman;IrisUPC;Iskoola Pota;JasmineUPC;KacstOne;KaiTi;Kalinga;Kartika;Khmer UI;Kino MT;KodchiangUPC;Kokila;Kozuka Gothic Pr6N;Lao UI;Latha;Leelawadee;Levenim MT;LilyUPC;Lohit Gujarati;Loma;Lucida Bright;Lucida Console;Lucida Fax;Lucida Sans Unicode;MS Gothic;MS Mincho;MS PGothic;MS PMincho;MS Reference Sans Serif;MS UI Gothic;MV Boli;Magneto;Malgun Gothic;Mangal;Marlett;Matura MT Script Capitals;Meiryo UI;Meiryo;Menlo;Microsoft Himalaya;Microsoft JhengHei;Microsoft New Tai Lue;Microsoft PhagsPa;Microsoft Sans Serif;Microsoft Tai Le;Microsoft Uighur;Microsoft YaHei;Microsoft Yi Baiti;MingLiU;MingLiU-ExtB;MingLiU_HKSCS;MingLiU_HKSCS-ExtB;Miriam Fixed;Miriam;Mongolian Baiti;MoolBoran;NSimSun;Narkisim;News Gothic MT;Niagara Solid;Nyala;PMingLiU;PMingLiU-ExtB;Palace Script MT;Palatino Linotype;Papyrus;Perpetua;Plantagenet Cherokee;Playbill;Prelude Bold;Prelude Condensed Bold;Prelude Condensed Medium;Prelude Medium;PreludeCompressedWGL Black;PreludeCompressedWGL Bold;PreludeCompressedWGL Light;PreludeCompressedWGL Medium;PreludeCondensedWGL Black;PreludeCondensedWGL Bold;PreludeCondensedWGL Light;PreludeCondensedWGL Medium;PreludeWGL Black;PreludeWGL Bold;PreludeWGL Light;PreludeWGL Medium;Raavi;Rachana;Rockwell;Rod;Sakkal Majalla;Sawasdee;Script MT Bold;Segoe Print;Segoe Script;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Segoe UI;Shonar Bangla;Showcard Gothic;Shruti;SimHei;SimSun;SimSun-ExtB;Simplified Arabic Fixed;Simplified Arabic;Snap ITC;Sylfaen;Symbol;Tahoma;Times New Roman Baltic;Times New Roman CE;Times New Roman CYR;Times New Roman Greek;Times New Roman TUR;Times New Roman;TlwgMono;Traditional Arabic;Trebuchet MS;Tunga;Tw Cen MT Condensed Extra Bold;Ubuntu;Umpush;Univers;Utopia;Utsaah;Vani;Verdana;Vijaya;Vladimir Script;Vrinda;Webdings;Wide Latin;Wingdings".split(";"),
            g = "", u = 0; u < a.length; u++) L.f(a[u]) && (g = u === a.length - 1 ? g + a[u] : g + (a[u] + ", "));
      return g
   }

   function w() {
      try {
         return !!H.localStorage
      } catch (a) {
         return !0
      }
   }

   function F() {
      try {
         return !!H.sessionStorage
      } catch (a) {
         return !0
      }
   }

   function B() {
      var a = String(-((new Date).getTimezoneOffset() / 60));
      0 > a ? (a = ("0" + -1 * a).slice(-2), a = "-" + a) : (a = ("0" + a).slice(-2), a = "+" + a);
      return a
   }

   function P() {
      var a = M.createElement("canvas");
      try {
         var g = a.getContext("2d")
      } catch (u) {
         return ""
      }
      g.textBaseline = "top";
      g.font = "14px 'Arial'";
      g.textBaseline = "alphabetic";
      g.fillStyle = "#f60";
      g.fillRect(125, 1, 62, 20);
      g.fillStyle = "#069";
      g.fillText("ClientJS,org <canvas> 1.0", 2, 15);
      g.fillStyle = "rgba(102, 204, 0, 0.7)";
      g.fillText("ClientJS,org <canvas> 1.0", 4, 17);
      return a.toDataURL()
   }

   function Q(a) {
      function g(p, m) {
         var k = p & 2147483648;
         var t = m & 2147483648;
         var x = p & 1073741824;
         var z = m & 1073741824;
         p = (p & 1073741823) + (m & 1073741823);
         return x & z ? p ^ 2147483648 ^ k ^ t : x | z ? p & 1073741824 ? p ^ 3221225472 ^ k ^ t : p ^ 1073741824 ^ k ^ t : p ^ k ^ t
      }

      function u(p, m, k, t, x, z, A) {
         p = g(p, g(g(m & k | ~m & t, x), A));
         return g(p << z | p >>>
            32 - z, m)
      }

      function y(p, m, k, t, x, z, A) {
         p = g(p, g(g(m & t | k & ~t, x), A));
         return g(p << z | p >>> 32 - z, m)
      }

      function C(p, m, k, t, x, z, A) {
         p = g(p, g(g(m ^ k ^ t, x), A));
         return g(p << z | p >>> 32 - z, m)
      }

      function D(p, m, k, t, x, z, A) {
         p = g(p, g(g(k ^ (m | ~t), x), A));
         return g(p << z | p >>> 32 - z, m)
      }

      function O(p) {
         var m = "",
            k;
         for (k = 0; 3 >= k; k++) {
            var t = p >>> 8 * k & 255;
            t = "0" + t.toString(16);
            m += t.substr(t.length - 2, 2)
         }
         return m
      }
      var h = [];
      a = function(p) {
         p = p.replace(/\r\n/g, "\n");
         for (var m = "", k = 0; k < p.length; k++) {
            var t = p.charCodeAt(k);
            128 > t ? m += String.fromCharCode(t) : (127 < t && 2048 >
               t ? m += String.fromCharCode(t >> 6 | 192) : (m += String.fromCharCode(t >> 12 | 224), m += String.fromCharCode(t >> 6 & 63 | 128)), m += String.fromCharCode(t & 63 | 128))
         }
         return m
      }(a);
      h = function(p) {
         var m = p.length;
         var k = m + 8;
         for (var t = 16 * ((k - k % 64) / 64 + 1), x = Array(t - 1), z, A = 0; A < m;) k = (A - A % 4) / 4, z = A % 4 * 8, x[k] |= p.charCodeAt(A) << z, A++;
         k = (A - A % 4) / 4;
         x[k] |= 128 << A % 4 * 8;
         x[t - 2] = m << 3;
         x[t - 1] = m >>> 29;
         return x
      }(a);
      var d = 1732584193;
      var b = 4023233417;
      var e = 2562383102;
      var f = 271733878;
      for (a = 0; a < h.length; a += 16) {
         var N = d;
         var T = b;
         var R = e;
         var S = f;
         d = u(d, b, e, f, h[a +
            0], 7, 3614090360);
         f = u(f, d, b, e, h[a + 1], 12, 3905402710);
         e = u(e, f, d, b, h[a + 2], 17, 606105819);
         b = u(b, e, f, d, h[a + 3], 22, 3250441966);
         d = u(d, b, e, f, h[a + 4], 7, 4118548399);
         f = u(f, d, b, e, h[a + 5], 12, 1200080426);
         e = u(e, f, d, b, h[a + 6], 17, 2821735955);
         b = u(b, e, f, d, h[a + 7], 22, 4249261313);
         d = u(d, b, e, f, h[a + 8], 7, 1770035416);
         f = u(f, d, b, e, h[a + 9], 12, 2336552879);
         e = u(e, f, d, b, h[a + 10], 17, 4294925233);
         b = u(b, e, f, d, h[a + 11], 22, 2304563134);
         d = u(d, b, e, f, h[a + 12], 7, 1804603682);
         f = u(f, d, b, e, h[a + 13], 12, 4254626195);
         e = u(e, f, d, b, h[a + 14], 17, 2792965006);
         b = u(b, e,
            f, d, h[a + 15], 22, 1236535329);
         d = y(d, b, e, f, h[a + 1], 5, 4129170786);
         f = y(f, d, b, e, h[a + 6], 9, 3225465664);
         e = y(e, f, d, b, h[a + 11], 14, 643717713);
         b = y(b, e, f, d, h[a + 0], 20, 3921069994);
         d = y(d, b, e, f, h[a + 5], 5, 3593408605);
         f = y(f, d, b, e, h[a + 10], 9, 38016083);
         e = y(e, f, d, b, h[a + 15], 14, 3634488961);
         b = y(b, e, f, d, h[a + 4], 20, 3889429448);
         d = y(d, b, e, f, h[a + 9], 5, 568446438);
         f = y(f, d, b, e, h[a + 14], 9, 3275163606);
         e = y(e, f, d, b, h[a + 3], 14, 4107603335);
         b = y(b, e, f, d, h[a + 8], 20, 1163531501);
         d = y(d, b, e, f, h[a + 13], 5, 2850285829);
         f = y(f, d, b, e, h[a + 2], 9, 4243563512);
         e = y(e,
            f, d, b, h[a + 7], 14, 1735328473);
         b = y(b, e, f, d, h[a + 12], 20, 2368359562);
         d = C(d, b, e, f, h[a + 5], 4, 4294588738);
         f = C(f, d, b, e, h[a + 8], 11, 2272392833);
         e = C(e, f, d, b, h[a + 11], 16, 1839030562);
         b = C(b, e, f, d, h[a + 14], 23, 4259657740);
         d = C(d, b, e, f, h[a + 1], 4, 2763975236);
         f = C(f, d, b, e, h[a + 4], 11, 1272893353);
         e = C(e, f, d, b, h[a + 7], 16, 4139469664);
         b = C(b, e, f, d, h[a + 10], 23, 3200236656);
         d = C(d, b, e, f, h[a + 13], 4, 681279174);
         f = C(f, d, b, e, h[a + 0], 11, 3936430074);
         e = C(e, f, d, b, h[a + 3], 16, 3572445317);
         b = C(b, e, f, d, h[a + 6], 23, 76029189);
         d = C(d, b, e, f, h[a + 9], 4, 3654602809);
         f = C(f, d, b, e, h[a + 12], 11, 3873151461);
         e = C(e, f, d, b, h[a + 15], 16, 530742520);
         b = C(b, e, f, d, h[a + 2], 23, 3299628645);
         d = D(d, b, e, f, h[a + 0], 6, 4096336452);
         f = D(f, d, b, e, h[a + 7], 10, 1126891415);
         e = D(e, f, d, b, h[a + 14], 15, 2878612391);
         b = D(b, e, f, d, h[a + 5], 21, 4237533241);
         d = D(d, b, e, f, h[a + 12], 6, 1700485571);
         f = D(f, d, b, e, h[a + 3], 10, 2399980690);
         e = D(e, f, d, b, h[a + 10], 15, 4293915773);
         b = D(b, e, f, d, h[a + 1], 21, 2240044497);
         d = D(d, b, e, f, h[a + 8], 6, 1873313359);
         f = D(f, d, b, e, h[a + 15], 10, 4264355552);
         e = D(e, f, d, b, h[a + 6], 15, 2734768916);
         b = D(b, e, f, d, h[a + 13], 21,
            1309151649);
         d = D(d, b, e, f, h[a + 4], 6, 4149444226);
         f = D(f, d, b, e, h[a + 11], 10, 3174756917);
         e = D(e, f, d, b, h[a + 2], 15, 718787259);
         b = D(b, e, f, d, h[a + 9], 21, 3951481745);
         d = g(d, N);
         b = g(b, T);
         e = g(e, R);
         f = g(f, S)
      }
      return (O(d) + O(b) + O(e) + O(f)).toLowerCase()
   }
   var L = new ua,
      M = document,
      K = navigator,
      r = screen,
      H = window;
   return {
      g: function() {
         var a = "",
            g = [];
         g.push(window && H.navigator && H.navigator.userAgent ? H.navigator.userAgent : "");
         g.push(r.width + "x" + r.height + "," + (r.availWidth + "x" + screen.availHeight) + "," + r.colorDepth + "," + r.pixelDepth + "," + r.deviceXDPI +
            "," + r.i);
         g.push(G());
         g.push(E());
         g.push(w());
         g.push(F());
         g.push(B());
         g.push(K.language);
         g.push(K.j || H.navigator.language);
         g.push(K.hardwareConcurrency);
         g.push(K.cookieEnabled);
         g.push(P());
         for (var u = 0; u < g.length; u++) a += g[u] + "|";
         a = Q(a);
         return [a.slice(0, 8), a.slice(8, 12), "4" + a.slice(12, 15), "b" + a.slice(15, 18), a.slice(20)].join("-")
      }
   }
}();
/*
 Author : Lalit Patel
 Website: http://www.lalit.org/lab/javascript-css-font-detect/
 License: Apache Software License 2.0
          http://www.apache.org/licenses/LICENSE-2.0
 Version: 0.15 (21 Sep 2009)
          Changed comparision font to default from sans-default-default,
          as in FF3.0 font of child element didn't fallback
          to parent element if the font is missing.
 Version: 0.2 (04 Mar 2012)
          Comparing font against all the 3 generic font families ie,
          'monospace', 'sans-serif' and 'sans'. If it doesn't match all 3
          then that font is 100% not available in the system
 Version: 0.3 (24 Mar 2012)
          Replaced sans with serif in the list of baseFonts
 Version: 0.4 (16 July 2019)
          Changed the display properties to hide the span used to test the text
          Check default width and height when first running font detection
*/
function ua() {
   var G = document,
      E = ["monospace", "sans-serif", "serif"],
      w, F = G.createElement("span");
   F.style.display = "hidden";
   F.style.fontSize = "72px";
   F.innerHTML = "mmmmmmmmmmlli";
   var B = {},
      P = {};
   this.f = function(Q) {
      if ("undefined" === typeof G.body || null == G.body) return !1;
      if ("undefined" === typeof w || null == w) {
         w = G.body;
         for (var L in E) F.style.fontFamily = E[L], w.appendChild(F), B[E[L]] = F.offsetWidth, P[E[L]] = F.offsetHeight, w.removeChild(F)
      }
      L = !1;
      for (var M in E) {
         F.style.fontFamily = Q + "," + E[M];
         w.appendChild(F);
         var K = F.offsetWidth !==
            B[E[M]] || F.offsetHeight !== P[E[M]];
         w.removeChild(F);
         L = L || K
      }
      return L
   }
};
/*
 Riot Games Ecosystem Analytics
*/
"object" !== typeof window.RGEA && (window.RGEA = function() {
   function G(q) {
      return "undefined" !== typeof q && null !== q
   }

   function E(q) {
      return "string" === typeof q || q instanceof String
   }

   function w(q) {
      G(console) && console.log && console.log(q)
   }

   function F() {
      return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, function(q) {
         return (q ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> q / 4).toString(16)
      })
   }

   function B(q, l, n) {
      if (!G(n) || "" === n) return q;
      q = String(q);
      var v = q.indexOf("#"),
         J = q.length; - 1 === v && (v = J);
      var I = q.substr(0,
         v);
      q = q.substr(v, J - v); - 1 === I.indexOf("?") ? I += "?" : (v = String(I), -1 !== v.indexOf("?", v.length - 1) || (I += "&"));
      return I + R(l) + "=" + R(n) + q
   }

   function P() {
      for (var q = !1, l = 0; l < t.length; l++) {
         try {
            q = t[l]()
         } catch (n) {
            continue
         }
         break
      }
      return q
   }

   function Q(q) {
      u || setTimeout(function() {
         if (!u) try {
            var l = P();
            l && (l.open("GET", q, !0), l.onreadystatechange = function() {
               4 === l.readyState && (200 <= l.status && 300 > l.status ? N ? w(m + k[U]) : w(m + k[V]) : u || L(q))
            }, l.send(q))
         } catch (n) {
            L(q)
         }
      }, 50)
   }

   function L(q) {
      w(m + k[Y]);
      var l = new Image(1, 1);
      l.onload = function() {
         N ?
            w(m + k[U]) : w(m + k[V])
      };
      l.onerror = function() {
         w(m + k[Z])
      };
      l.src = q
   }
   var M = new function() {
         function q() {
            if (y) {
               if (!N) {
                  O = T.g();
                  a: {
                     var l = F();
                     try {
                        try {
                           g.sessionStorage && g.sessionStorage.setItem(S + p[W], l)
                        } catch (aa) {}
                        b: {
                           try {
                              if (g.sessionStorage) {
                                 var n = g.sessionStorage.getItem(S + p[W]);
                                 break b
                              }
                           } catch (aa) {}
                           n = null
                        }
                        if (G(n)) {
                           h = n;
                           break a
                        }
                     } catch (aa) {}
                     h = null
                  }
               }
               n = K;
               n = B(n, r[x], y);
               n = B(n, r[z], C);
               n = B(n, r[A], D);
               N || (n = B(n, r[ba], O), n = B(n, r[ca], h), n = B(n, r[da], d));
               n = B(n, r[X], 1 * b);
               n = B(n, r[ea], e);
               N || (n = B(n, r[fa], f));
               if (H && H.location &&
                  H.location.pathname) {
                  var v = H.location.hostname;
                  var J = H.location.pathname;
                  var I = H.location.href
               }
               g && g.location && g.location.pathname && (v = g.location.hostname, J = g.location.pathname, I = g.location.href);
               G(v) && E(v) && "" !== v || (v = null, J = I);
               v = [v, J];
               n = B(n, r[ha], v[0]);
               n = B(n, r[ia], v[1]);
               v = n = B(n, r[ja], a && a.language ? a.language : null);
               J = r[ka];
               G(b) ? (I = String(b), I = -1 === I.indexOf("(") ? null : String(I.split("(")[1]).split(")")[0]) : I = null;
               n = B(v, J, I);
               N && (n = B(n, r[la], 1));
               Q(n)
            } else w(m + k[ma])
         }
         this.b = function(l) {
            for (var n = 0; n <
               g._rgea.length; n++) {
               var v = g._rgea[n],
                  J = void 0;
               v && (J = v.shift()) && this[J] ? this[J].apply(this, v) : w(m + k[na] + J)
            }
            g._rgea = [];
            l && q()
         };
         this.send = function() {
            q()
         };
         this.propertyId = function(l) {
            E(l) ? (y = l, w(m + k[oa] + y)) : w(m + k[pa])
         };
         this.feature = function(l) {
            E(l) && (C = l)
         };
         this.meta = function(l) {
            E(l) && (D = l)
         };
         this.uid = function(l) {
            E(l) && (d = l)
         };
         this.uts = function(l) {
            "object" === typeof l || l instanceof Object ? b = l : w(m + k[qa])
         };
         this.lolpid = function(l) {
            G(l) && "" !== l && (E(l) ? e = l : w(m + k[ra]))
         };
         this.lolaid = function(l) {
            G(l) && "" !== l && (E(l) ?
               f = l : w(m + k[sa]))
         };
         this.anonymous = function(l) {
            "boolean" === typeof l || l instanceof Boolean ? N = l : w(m + k[ta])
         }
      },
      K = "https://analytics.developer.riotgames.com/v1/event",
      r = {},
      H = document,
      a = navigator,
      g = window,
      u = !1,
      y = null,
      C = null,
      D = null,
      O = null,
      h = null,
      d = null,
      b = null,
      e = null,
      f = null,
      N = !0,
      T = g.c,
      R = g.encodeURIComponent,
      S = "rgea.",
      p = {},
      m = "[RGEA] ",
      k = {},
      t = [function() {
            return new XMLHttpRequest
         }, function() {
            return new ActiveXObject("Msxml3.XMLHTTP")
         }, function() {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
         }, function() {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
         },
         function() {
            return new ActiveXObject("Msxml2.XMLHTTP")
         },
         function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
         }
      ],
      x = "a",
      z = "b",
      A = "c",
      ba = "d",
      ca = "e",
      da = "f",
      X = "g",
      ea = "h",
      fa = "i",
      ha = "j",
      ia = "k",
      ja = "l",
      ka = "m",
      la = "n",
      W = "b",
      oa = "a",
      pa = "b",
      ta = "c",
      ma = "d",
      qa = "e",
      ra = "f",
      sa = "g",
      na = "h",
      V = "i",
      U = "j",
      Y = "k",
      Z = "l";
   r[x] = "pid";
   r[z] = "f";
   r[A] = "m";
   r[ba] = "did";
   r[ca] = "sid";
   r[da] = "uid";
   r[X] = "uts";
   r[ea] = "lolpid";
   r[fa] = "lolaid";
   r[ha] = "dh";
   r[ia] = "dp";
   r[ja] = "ul";
   r[ka] = "utz";
   r[la] = "anon";
   r.o = "err";
   p.a = "cookies";
   p[W] = "sid";
   k[oa] = "propertyId: ";
   k[pa] = "Invalid propertyId setting";
   k[ta] = "Invalid anonymous setting";
   k[ma] = "Event propertyId was not set; aborting";
   k[qa] = "Invalid timestamp";
   k[ra] = "Invalid lol platform id";
   k[sa] = "Invalid lol account id";
   k[na] = "Invalid method; ";
   k[V] = "Reported event";
   k[U] = "Reported event anonymously";
   k[Y] = "Falling back to image request";
   k[Z] = "Failed to report event";
   G(g._rgea) || (g._rgea = [
      [r[X], new Date]
   ]);
   (function(q, l, n, v) {
      if (q.addEventListener) return q.addEventListener(l, n, v), !0;
      if (q.attachEvent) return q.attachEvent("on" +
         l, n);
      q["on" + l] = n
   })(g, "beforeunload", function() {
      u = !0
   }, !1);
   return {
      event: M,
      h: function() {
         "complete" === H.readyState ? M.b(!0) : g.addEventListener ? g.addEventListener("load", M.b(!0), !1) : g.attachEvent && g.attachEvent("onload", M.b(!0))
      },
      p: function() {
         M.b()
      }
   }
}());
window.RGEA.h();
