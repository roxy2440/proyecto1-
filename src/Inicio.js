import React from 'react';
import './Inicio.css';
function Inicio (){
    return (
        <div>
            <header>
                <div className='cabecera'>
                <img src='/img/psique.png'  > 
                    </img>
                </div>
                <nav>
                   <a href= '#'>
                       Incio</a> 
                       <a href= '#' className='rosa' >
                       Registro</a>
                   <a href= '#'>
                       Blog
                       </a>
                       <a href= '#'>
                       Categoria</a>
                    
                       
                </nav>
            </header>
            <div className='container'>
                <div className= 'cartas'>
                <div className='carta'>
                    <img src= '/img/infantil.jpg' >

                        </img> <div className='texto'>
                                <p>Terapia Infantil</p>
                        </div>
                 </div>
                    <div className='carta'>
                    <img src= '/img/mujer.jpg' >

                        </img> <div className='texto'>
                                <p>Terapia Individual</p>
                        </div>
                        </div>
                        <div className='carta'>
                    <img src= '/img/family.jpg' >

                        </img> <div className='texto'>
                                <p>Terapia familiar</p>
                        </div>
                        </div>
                        <div className='carta'>
                    <img className='logo' src= '/img/seguridad.jpg' >

                        </img> <div className='texto'>
                                <p>segura</p>
                        </div>
                        </div>
                        <div className='carta'>
                    <img className='logo' src= '/img/copaprofesional.jpg' >

                        </img> <div className='texto'>
                                <p>profesional</p>
                        </div>
                        </div>
                        <div className='carta'>
                    <img className='logo' src= '/img/cel.png' >

                        </img> <div className='texto'>
                                <p>accesible</p>
                        </div>
                        </div>
                    </div> 
                    <aside>
                
                <h4>Estabilidad emocional para tu vida diaria</h4><br/>
<h4>??Qu?? es la psicoterapia?</h4><br/>
<p>La psicoterapia es un proceso de colaboraci??n basado en la relaci??n de una persona y un psic??logo. Como su base fundamental es el di??logo, esta te proporcionar?? un ambiente de apoyo que te permitir?? hablar abiertamente con alguien objetivo, neutral e imparcial.
Tu psic??logo y t?? trabajar??n juntos para identificar y cambiar los patrones de pensamiento y comportamiento que te impiden sentirte bien.
Al concluir este proceso, no s??lo habr??s resuelto el problema que te trajo a la consulta, sino que, adem??s, habr??s aprendido nuevas destrezas para enfrentar con mayor efectividad cualquier desaf??o que pueda surgir en el futuro</p>
          </aside>
                 </div>
        <div className= 'descripcion'>
                    <h2>??Cu??ndo debo considerar la psicoterapia como una opci??n?</h2><p>
                    Algunas personas recurren a la psicoterapia porque han estado deprimidas, ansiosas o enojadas por demasiado tiempo. Otras podr??an querer ayuda ante una enfermedad cr??nica que interfiere en su bienestar emocional o f??sico. Y otras podr??an tener problemas a corto plazo para los que necesitan ayuda. Por ejemplo, un divorcio, la partida de los hijos, sentirse abrumado por un nuevo empleo o estar de duelo por la muerte de un familiar.
                    </p>
                    </div>
        

       <footer>
        <h3>Consultoria Online: Direccion Guadalajara, Jal Prol alcalde 1909, jardines alcalde.</h3>
       </footer>
        </div>
        
        
    );
}

export default Inicio;
