// Esta constante va hacia la pantalla de visualización, es decir, el display, con ID= display, entonces así se llamará, se usa querySelector ya que solo se tendrá UNA pantalla de visualización, se le pasa el nombre del ID antecedido por #.
const display = document.querySelector("#display");
// Se define otra constante, que serán los botones, se utiliza querySelectorAll ya que se van a seleccionar todos los botones, entonces se le pasa el nombre de la etiqueta que es "button".
const buttons = document.querySelectorAll("button");

//Ahora, se van a recorrer todos los botones, entonces se tendrá un arreglo de botones, se usará la variable de los botones "buttons" para poder recorrer todos los botones ques e tengan con un forEach, dentro de forEach se usa la función de flecha, y através del "item" se pondrá recorrer todos los botones, ya que "item" pooserá toda la información de todos los botones porque ya se mapeó a través del forEach. Entonces, se reconoce el evento de "onclick", cabe mencionar que los evntos son muy importantes en JS, porque con eso ya se da funcionalidad al html, en este caso, la propiedad "onclick" la tendrán todos los botones, es decir, cuando uno da clic a un botón en específico.
// Entonces, a este onclick se le va dar la funcionalidad, en este caso no se quiere que ocurra ningún evento interno, por eso se deja vacío "()", sin embargo, se le da la funcionalidad de flecha "=>" para decirle que todos los eventos de  "onclick" se va a reconocer a QUIÉN se le a dado clic.
//Es decir, al evento onclick no se le está pasando ningún tipo de parámetro "()", pues con la funcionalidad flecha se va reconocer a través de los ID's.
//Entonces, simplemente se le va dar a reconocer cualquier ID que se haga clic, entonces a traves de los ID's es como se pueden reconocer. Por eso es importante que los ID's no se repitan en el documento HTML.
buttons.forEach((item) => {
  item.onclick = () => {
    // Ahora, se va entrar en display, que ya fue agregado arriba, entonces, se usa un condicional. Se entra a "item" que representa TODOS los botones y tienen todas sus propiedades, entonces, se entrará al "item" y se entrará a "id". Dicho de otro modo, si adentro del id yo le he dado clic y en ese id es el "clear", significado que quiero borrar...
    if (item.id == "clear") {
      // ...y ahora, si el botón fue clear, en la pantalla de visualizacion se eliminará TODO texto que exista, para eso se usa innerText="", que significa que el texto interno será borrado usando vacío "".
      display.innerText = "";
    } else if (item.id == "backspace") {
      // Ahora, en caso de haber presionado el símbolo de retroceso, se requiere borrar el último caracter, es decir, de uno en uno, para ello se declara una variable llamada string, y en ella se va almacenar todo el texto que tenga el display pero convertido en una cadena de caracteres con el método "toString()".
      let string = display.innerText.toString();
      // Una vez convertido a texto, en la ventanita del display, el texto interno va ser igual a la variable string (que es todo lo que se va escribiendo) se le hace un "substr" para poder identificar de la siguiente manera los elementos: busca dentro de la cadena de caracteres y nos permite afectar el primer caracter o el último, el que se desee, en este caso se usará para extraer el último caracter, es decir, lo borrará.
      // Toma como parámetros el inicio del índice, donde siempre será 0, y el tamaño o longitud de la cadena, en este caso nuestra cadena es "string" y se obtiene su longitud usando el método lenght() y como empieza en cero, su último elemento es n-1, es decir, la longitud - 1, por ejemplo, si se tiene 45, el índice 0 es 4, y el índice 1 es 5, el tamaño es 2, entonces 2-1 = 1, entonces se va "extraer o eliminar" el caracter con índice 1 que es 5, quedando solo el 4. Si hubiera un 467 pues quita el "índice 2" que sería 7 quedando 46. Y así se borra de uno en uno, simple :)...
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      // Ahora, en caso de que el texto interno sea diferente de "vacío", es decir, que se tengan números escritos y además que se presione el botón con el id "equal", ocurrirá lo siguiente:

      //Que haga las operaciones necesarias escritas en ese momento, entonces Js se encargará de reconocer que se ha hecho, si multiplicación, división, suma o resta, entonces se le dirá que haga la operación en específico a trvaés de display en su texto interno donde se va evaluar con eval, eval es útil cuando se tiene elementos de tipo número y están representados como si fuesen string, pues realmente se quieren representar como si fuesen operaciones aritméticas, es decir:
      // // Si se tuviese una variable como:
      // let cadena = "2+2";, lo que hará eval es tomarla como 2+2, como si fuera una operación aritmética.
      // Entonces en eval se pasa todo su texto interno que está en el display el cual tomará como operaciones aritméticas, sean las que sean.
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      // Ahora, en caso de que el texto interno sea vacío, es decir, no se tenga nada escrito en el display, y además que se presione el botón con id "equal", ocurrirá lo siguiente:
      display.innerText = "NULL"; //Mostrará la plabra "NULL".
      // Se usa el método setTimeout, o tiempo de espera en español, que ejecuta un fragmento de código en una función en un determinado tiempo, y con esto, lo que se quiere es que después de mostrar el "NULL" va desaparecer ese texto anterior y establecerá el display con nada, es decir, con vacío "". En pocas palabras, limpia el dislay, esto usando una funciónn flecha ()=>(), es en el primer parámetro, en el segundo se pasa el tiempo en el que hará eso.
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      //Ahora, en caso de que nada de lo anterior ocurra, el display en su texto interno, simplemente se adjuntará  a la pantalla de visualización (con +=) lo que corresponda al id. Por ejemplo:  8+9-2/4...etc
      display.innerText += item.id;
    }
  };
});
// Y hasta aquí las funcionalidades.

// Bueno, siempre no, falta el botón para el cambio de tema a DARK xdd
// Primero se crea una constante y se mapea dentro del documento
const themeTogglerBtn = document.querySelector(".theme-toggler");
// Se declara otra constante para poder manipular y acceder a sus propiedades
const calculator = document.querySelector(".calculator");
// Se declara otra constante para poder manipular y acceder a sus propiedades, este será el ícono que será blanco
const togglerIcon = document.querySelector(".toggler-icon");
// Se declara una variable para saber si el tema dark está activado o no, en este caso primero estará activado el tema Dark
let isDark = true;
// Cuando el botón se le de clic, y através de la función flecha ocurrirá:

// Este código en JavaScript asigna una función anónima a la propiedad "onclick" del botón "themeTogglerBtn". Cuando el usuario hace clic en el botón, se ejecuta la función, y no pasa parámetros y hace lo siguiente:

// Utiliza la función "classList.toggle()" para agregar o eliminar la clase CSS "dark" del elemento "calculator".
// Como resultado, si la clase "dark" no está presente en el elemento "calculator", se agrega; si ya está presente, se elimina.

// Este código se utiliza comúnmente para implementar un interruptor de tema en una página web, donde el usuario puede cambiar entre un tema claro y uno oscuro con un solo clic. Al hacer clic en el botón, se cambia la apariencia de los elementos que tienen la clase "dark" en su hoja de estilo CSS, lo que permite crear una apariencia visualmente diferente para el usuario.
themeTogglerBtn.onclick = () => {
  // La variable calculator aplica la clase classList con el método toggle que agrega o elimina una clase CSS llamada "dark" del elemento HTML identificado por la variable calculator.
  // El método toggle es un método de la interfaz classList, que es una propiedad de solo lectura que devuelve una colección de clases de un elemento HTML. El método toggle agrega la clase especificada si no está presente en el elemento y la elimina si ya está presente.
  // En este caso, si el elemento calculator no tiene la clase "dark", la línea de código agrega la clase "dark" al elemento y si ya tiene la clase "dark", la línea de código la elimina. Por lo tanto, esta línea de código podría usarse para cambiar el estilo o la apariencia de un elemento HTML, como un botón de alternancia para cambiar entre un tema claro y oscuro en una aplicación web.
  // Es decir, cambia todas las clases a tema Dark
  calculator.classList.toggle("dark");
  // En caso de desactivarlo, se puede manipular a través del themeTogglerBtn, pero porqué se le pasa a "active"? Porque en "active" se tiene en "theme-toggler" 
  // Este es básicamente para que se cambie a oscuro el botón en el tema claro.
  themeTogglerBtn.classList.toggle("active");
  // Ahora, solo queda decirle que el tema Dark ya no está activo, negandolo pasa a FALSE o si es FALSE pasa a TRUE.
  isDark = !isDark;
};
