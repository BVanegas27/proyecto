import React from "react";
import "../styles/List.css";
import Item from "./Item";

function List() {
    return (
     <div className="App">
     <div className='contenedorlist'>
     <Item
      nombre = 'Miles Morales'
      spiderimg = 'Miles.webp'
      universo = 'Tierra-1610'
      descripcion = 'Miles Gonzalo Morales es un adolescente de ascendencia afroamericana y latina residente en Brooklyn; quien después de haber sido mordido por una araña genéticamente modificada diseñada por el némesis de Spider-Man, Norman Osborn, asumió la identidad de Spider-Man en el Universo Ultimate tras la muerte de Peter Parker.'
      habilidades = 'Camuflaje arácnido, durabilidad sobrehumana, rayo venenoso, explosión de energía.'
      debilidades = 'Poca experiencia en situaciones difíciles'
      imagen = 'Tierra1610.jpeg'
      altImagen = 'Universo1610'
      titulo = 'Universo 1610'
     />
     <Item
      nombre = 'Peter Parker'
      spiderimg = 'Peter.webp'
      universo = 'Tierra-616'
      descripcion = 'Peter Parker era un estudiante de preparatoria que fue mordido por una araña radiactiva en la secundaria. La picadura le llevó a desarrollar poderes similares a los de una araña. Pronto fue capaz de trepar por las paredes y sentir el peligro inminente. Cuando dejó escapar a un ladrón que más tarde asesinó a su tío Ben, Peter aprendió que «Un gran poder conlleva una gran responsabilidad», y así se convirtió en el asombroso Spider-Man.'
      habilidades = 'Resistencia sobrehumana, factor de curación, sentidos ultramejorados, habilidad combativa, inteligencia de genio.'
      debilidades = 'Interrupción del sentido arácnido, cloruro de etilo.'
      imagen = 'Tierra616.jpeg'
      altImagen = 'Universo616'     
      titulo = 'Universo 615'
     />
     <Item
      nombre = 'Gwendolyne Stacy'
      spiderimg = 'Gwen.webp'
      universo = 'Tierra-65'
      descripcion = 'Gwendolyne Maxine "Gwen" Stacy es la hija del Capitán George Stacy y una joven estudiante, amante de la música, que fue picada por una araña radiactiva. Esto provocó que adquiriera poderes arácnidos.'
      habilidades = 'Fisiología arácnida, fuerza sobrehumana, fuerza sobrehumana, sentido arácnido.'
      debilidades = 'Lucha cuerpo a cuerpo'
      imagen = 'Tierra65.jpeg'
      altImagen = 'Universo65'
      titulo = 'Universo 65'
     />
     <Item
      nombre = 'Hobart Brown'
      spiderimg = 'Hobart.jpeg'
      universo = 'Tierra-138'
      descripcion = 'Es un joven afroamericano que fue picado por una araña radiactiva infectada con desechos espaciales y asumió el papel de Spider-Man para liderar un ejercito contra la tiranía del Presidente Norman Osborn. Tras liberar a su mundo de la opresión, se unió al grupo de Superior Spider-Man para combatir a Los Herederos.'
      habilidades = 'Ultra fuerza-salto, super agilidad y reflejos, capacidad física muscular, resistencia sobrehumana.'
      debilidades = 'Perdida de concentración'
      imagen = 'Tierra138.webp'
      altImagen = 'Universo138'
      titulo = 'Universo 138'
     />
     <Item
      nombre = "Miguel O'Hara"
      spiderimg = 'Miguel.jpg'
      universo = 'Tierra-928'
      descripcion = "Miguel O'Hara, es un joven científico de origen mexicano que trabajaba para la corporación Alchemax en un proyecto para crear seres humanos mejorados genéticamente, inspirándose en las habilidades del Spider-Man del siglo XXI. Adopta la identidad secreta de Spider-Man tras obtener accidentalmente poderes sobrehumanos."
      habilidades = 'Curación acelerada, garras y comillos, señuelo acelerado, visión nocrturna.'
      debilidades = 'Los ojos de Miguel son más sensibles a la luz que los de un ser humano normal, por lo que es más vulnerable a los destellos y deslumbramientos. En situaciones extremas puede producirse derrame de córnea o quedar cegado durante un periodo de tiempo prolongado.'
      imagen = 'Tierra928-S2099.webp'
      altImagen = 'Universo928'
      titulo = 'Universo 928 SPIDER 2099'
     />
     <Item
      nombre = 'Spider-Society'
      spiderimg = 'Spider.webp'
      universo = 'Tierra-928'
      descripcion = 'La Sociedad Araña fue creada por Miguel O Hara de la tierra-928B luego del casi colapso del multiverso durante los eventos multiversales de la tierra-1610B centrados en Miles Morales , el nuevo Spider-Man de esa realidad. Reclutaría varios Spider-Totems de realidades alternativas, mientras monitoreaba otros universos para asegurarse de que las historias de sus respectivos Spider-Totems siguieran sus caminos previstos, con la esperanza de evitar la destrucción de esos universos.'
      habilidades = 'Lo mejor que puede ocurrir es que varios de los spider-man se encuentren reunidos; gracias a la habilidad y poder de cada uno es la mejor combinación para una batalla.'
      debilidades = 'Una de las debilidades es que al principio varios de los spider-man se confundan al momento de unir sus fuerzas y genere un poco de caos.'
      imagen = 'Tierra928.webp'
      altImagen = 'Universo928'
      titulo = 'Universo 928'
     />
     <Item
      nombre = 'Pavitr Prabhakar'
      spiderimg = 'Pavitr.webp'
      universo = 'Tierra-50101'
      descripcion = 'Es un humilde joven de Munbai que obtuvo poderes arácnidos de un Yogui que se los entregó porque debía proteger al mundo de una amenaza demoniaca. Pero cuando Pavitr Prabhakar vio que unos ladrones querían asaltar a una mujer, no hizo nada por evitarlo. Su tío Bhim trató de ayudarla y los asaltantes lo mataron. Pavitr luego atrapa a los asaltantes y decide pelear contra el crimen como Spider-Man.'
      habilidades = 'Tiene mismas habilidades que spider-man de la tierra-616, como: Equilibrio perfecto, factor de curación, reflejos sobrehumanos.'
      debilidades = 'Poca experiencia para sobrellevar el poder y ser el hombre araña'
      imagen = 'Tierra50101.webp'
      altImagen = 'Universo50101'
      titulo = 'Universo 50101'
     />
     <Item
      nombre = 'Jessica Drew'
      spiderimg = 'Jessica.webp'
      universo = 'Tierra-616'
      descripcion = 'Spider-Woman cuya identidad es Jessica Drew, fue envenenada por radiación a temprana edad, por lo cual fue inyectada con un misterioso suero arácnido y recibió así un acelerador genético durante años. Jessica emergió como adulta, sin memoria y poderes inimaginables, un "picotazo venenoso" bioeléctrico y la habilidad de emitir y manipular feromonas.'
      habilidades = 'Vuelo, secreción de feromonas, rayo venenoso, audición sobrehumana.'
      debilidades = 'Resistencia'
      imagen = 'Tierra616J.webp'
      altImagen = 'Universo616J'
      titulo = 'Universo 616 SPIDERWOMAN'
     />
     </div>
    </div>
  );
}
        
export default List;