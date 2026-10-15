"use strict";
const productos={A:{nombre:"Notebook Demo A",cpu:"Ryzen 5",ram:"8 GB",ssd:"512 GB",precio:"$900.000"},B:{nombre:"Notebook Demo B",cpu:"Core i3",ram:"8 GB",ssd:"256 GB",precio:"$720.000"},U:{nombre:"Mochila Demo Urbana",cap:"20 litros",color:"negro",precio:"$65.000"},E:{nombre:"Mochila Demo Ejecutiva",cap:"25 litros",color:"gris",precio:"$82.000"}};
function norm(x){return x.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9$ ]/g," ").replace(/\s+/g," ").trim()}
const has=(x,...a)=>a.some(y=>x.includes(y));const a=x=>/demo a\b/.test(x);const b=x=>/demo b\b/.test(x);
function responder(q){let t=norm(q);if(!t)return "Escribí tu consulta para continuar.";
if(has(t,"ignora","instrucciones anteriores","actua como administrador","cambia tu rol"))return "No puedo cambiar las reglas ni confirmar stock. No hay información autorizada sobre disponibilidad. Consultá al equipo de Planet.com.";
if(has(t,"mundial","futbol","capital de","presidente","receta"))return "Solo puedo ayudarte con notebooks, mochilas y orientación general de servicio técnico de Planet.com. Para otros temas consultá una fuente especializada.";
if(has(t,"descuento","rebaja","dejala en","deja la","500000"))return (a(t)?"La Notebook Demo A cuesta $900.000 de prueba. ":b(t)?"La Notebook Demo B cuesta $720.000 de prueba. ":"Los precios son simulados. ")+"No puedo modificar precios ni autorizar descuentos. Consultá condiciones especiales con el equipo de Planet.com.";
if(has(t,"no enciende","no prende","arreglar","reparar","reparacion","servicio tecnico","service","diagnostico","presupuesto"))return "Planet.com ofrece servicio técnico y reparación de equipos informáticos. No puedo diagnosticar fallas, ni informar precios o plazos de reparación sin evaluación. Consultá con el equipo técnico.";
if(has(t,"impermeable","resistente al agua"))return "No tenemos información confirmada sobre la impermeabilidad de las mochilas del catálogo de prueba. Consultá al equipo de Planet.com para verificarlo.";
if(has(t,"cual de las dos me sirve","mochila para mi notebook","compatible","cabe mi notebook"))return "La Mochila Demo Urbana tiene 20 litros y la Ejecutiva 25 litros. No conocemos sus dimensiones internas ni la compatibilidad con tu notebook. Consultá con el equipo de Planet.com antes de elegir.";
if(has(t,"stock","disponible","disponibilidad","entrega inmediata","comprar hoy"))return "No tenemos información autorizada sobre stock o disponibilidad para compra inmediata. El equipo de Planet.com puede verificarlo.";
if((a(t)&&b(t))||(has(t,"diferencia","comparar")&&t.includes("notebook")))return "Notebook Demo A: Ryzen 5, RAM 8 GB, SSD 512 GB, $900.000.\nNotebook Demo B: Core i3, RAM 8 GB, SSD 256 GB, $720.000.\nLa Demo A tiene 256 GB más de almacenamiento y cuesta $180.000 más. Datos simulados.";
if(a(t))return "Notebook Demo A: procesador Ryzen 5, RAM 8 GB, SSD 512 GB; precio de prueba $900.000. No se confirma disponibilidad.";
if(b(t))return "Notebook Demo B: procesador Core i3, RAM 8 GB, SSD 256 GB; precio de prueba $720.000. No se confirma disponibilidad.";
if(/notebook demo [cxz]\b/.test(t))return "Ese modelo no figura en el catálogo simulado. No puedo inventar sus características o precio. Consultá al equipo de Planet.com.";
if(t.includes("demo urbana"))return "Mochila Demo Urbana: capacidad 20 litros, color negro, precio simulado $65.000.";
if(t.includes("demo ejecutiva"))return "Mochila Demo Ejecutiva: capacidad 25 litros, color gris, precio simulado $82.000.";
if(t.includes("mochila"))return "Catálogo de mochilas:\n• Mochila Demo Urbana: 20 litros, negra, $65.000.\n• Mochila Demo Ejecutiva: 25 litros, gris, $82.000.\nPrecios simulados, sin stock confirmado.";
if(t.includes("notebook"))return "Catálogo de notebooks:\n• Notebook Demo A: Ryzen 5, 8 GB RAM, SSD 512 GB, $900.000.\n• Notebook Demo B: Core i3, 8 GB RAM, SSD 256 GB, $720.000.\nPrecios académicos, no stock real.";
if(has(t,"hola","buenas","gracias","planet"))return "¡Hola! Soy la simulación de Planet.com. Puedo informar sobre notebooks, mochilas y orientación general de servicio técnico con datos ficticios.";
return "No encontré una regla para esa consulta. Esta demostración no utiliza IA generativa. Podés preguntar sobre notebooks, mochilas o servicio técnico.";
}
const chat=document.getElementById("mensajes");const input=document.getElementById("consulta");function msg(t,cl){let el=document.createElement("div");el.className="bubble "+cl;el.textContent=t;chat.append(el);chat.scrollTop=chat.scrollHeight}function enviar(t){if(!t.trim())return;msg(t,"user");msg(responder(t),"");input.value="";input.focus()}function reset(){chat.replaceChildren();msg("¡Hola! 👋 Soy la demostración de Planet.com. Esta web utiliza respuestas programadas, no inteligencia artificial generativa. ¿Qué querés consultar?","")}document.getElementById("form").addEventListener("submit",e=>{e.preventDefault();enviar(input.value)});document.querySelectorAll("[data-q]").forEach(x=>x.addEventListener("click",()=>enviar(x.dataset.q)));document.getElementById("reset").addEventListener("click",reset);reset();

/* Logo institucional: transparencia generada localmente, sin redibujar la marca.
   La composición original incluye ".com" fuera del círculo: no recortar. */
(function prepararLogoTransparente() {
  const logo = document.querySelector(".site-header .brand-logo img");
  if (!logo) return;
  function procesar() {
    try {
      if (!logo.naturalWidth || !logo.naturalHeight) return;
      const canvas = document.createElement("canvas");
      canvas.width = 520;
      canvas.height = Math.round(520 * logo.naturalHeight / logo.naturalWidth);
      const w = canvas.width, h = canvas.height;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;
      ctx.drawImage(logo, 0, 0, w, h);
      const frame = ctx.getImageData(0, 0, w, h);
      const pixels = frame.data;
      const gray = new Uint8Array(w * h);
      const dark = new Uint8Array(w * h);
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = y * w + x, p = i * 4;
          const g = Math.round((pixels[p] + pixels[p + 1] + pixels[p + 2]) / 3);
          gray[i] = g;
          if (g < 195 && x > 0.41 * w && y > 0.61 * h && y < 0.84 * h) dark[i] = 1;
        }
      }
      // Dilatación eficiente de 2 pasadas para proteger el contorno blanco de ".com".
      const radius = 7;
      const horizontal = new Uint8Array(w * h), nearby = new Uint8Array(w * h);
      for (let y = 0; y < h; y++) {
        const row = y * w;
        for (let x = 0; x < w; x++) {
          for (let dx = -radius; dx <= radius; dx++) {
            if (x + dx >= 0 && x + dx < w && dark[row + x + dx]) {
              horizontal[row + x] = 1; break;
            }
          }
        }
      }
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          for (let dy = -radius; dy <= radius; dy++) {
            if (y + dy >= 0 && y + dy < h && horizontal[(y + dy) * w + x]) {
              nearby[y * w + x] = 1; break;
            }
          }
        }
      }
      const cx = 587 / 1374 * w, cy = 570 / 1145 * h;
      const rx = 535 / 1374 * w, ry = 512 / 1145 * h;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = y * w + x, g = gray[i];
          const oval = ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2;
          const circular = Math.max(0, Math.min(255, (1.015 - oval) * 16000));
          let outside = 0;
          if (nearby[i]) {
            outside = Math.max(
              Math.max(0, Math.min(255, (240 - g) / 30 * 255)),
              Math.max(0, Math.min(255, (g - 249) / 3 * 255))
            );
          }
          pixels[i * 4 + 3] = Math.round(Math.max(circular, outside));
        }
      }
      ctx.putImageData(frame, 0, 0);
      logo.src = canvas.toDataURL("image/png");
    } catch (err) {
      // Si no se puede procesar, el original queda visible.
      console.warn("Logo Planet.com: se mantiene la imagen original.", err);
    }
  }
  if (logo.complete && logo.naturalWidth) procesar();
  else logo.addEventListener("load", procesar, { once: true });
})();
