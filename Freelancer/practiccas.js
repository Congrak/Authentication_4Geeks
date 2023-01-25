/*pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false

function pangram(letter) {

   const array = [pangram]
    
   array.forEach((w) => Boolean(w) && letter.search(/[ A-Za-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ.-]+/g));

   return false
}
*/
///[a-zA-Z\X\u00f1\u00d1]/

// RETO 20


function fixFiles(files) {
   // ¡No olvides compartir tu solución en redes!

   let count = 0

   for (let i = 1; i < files.length; i++){

      for(let j = 0; j < i; j++){
   

          if (files[j] == files[i]){
             ++count
             files[i] = files[j] + '('+count+')'
             continue;

            }else count = 0
      }
   }count = 0
   return files

}


const files = ['photo', 'postcard', 'photo', 'photo', 'video']
console.log(fixFiles(files)) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game'] 
console.log(fixFiles(files2)) //= ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
console.log(fixFiles(files3)) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']

const prueba = ['a', 'a', 'aa', 'a', 'a', 'a', 'aa']
console.log(fixFiles(prueba))

//{ files: [], expected: ['a', 'a(1)', 'aa', 'a(2)', 'a(3)', 'a(4)', 'aa(1)'] }