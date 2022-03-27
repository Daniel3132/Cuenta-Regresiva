import React, { useEffect, useState } from 'react'
import { CardLetters, CardnUM, CountContain, DivLetters, DivNum } from '../estilos/StyledComponents'

/* se obtiene la fecha exacta con date().getTime, y a eso le sumamos 14 dias, 
 86400000 (numero de milisegundos por dia) * 14 dias, mas 1 seg para compensar
 el tiempo de carga de la pagina  */
const FechaInicial = new Date().getTime() + (86400000 * 14) + 1000
// const FechaInicial = new Date('Dic 31, 2022 00:00:00').getTime() si quisieramos una fecha en especifico
const Clock = () => {

  //useSate para actualizar por separado cada variable y les damos el valor en que queremos que inicien
  const [timerDays, setTimerDays] = useState('14')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')

  let interval //es el que va a poner a andar la app y con el que se detiene

  const startTimer = () => {

    interval = setInterval(() => {
      const FechaActual = new Date().getTime()
      //volvemos a sacar la hora actual que se actualizara cada segundo

      const restante = FechaInicial - FechaActual //para irla restando a los 14 dias (Fecha Inicial)
      ////////////////////////////////////sec  min  hour day
      const days = Math.floor(restante / (1000 * 60 * 60 * 24))
      const hours = Math.floor((restante % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
      const minutes = Math.floor((restante % (1000 * 60 * 60) / (1000 * 60)))
      const seconds = Math.floor((restante % (1000 * 60) / 1000))

      if (restante < 0) { //no usar === 0 porque no va a pasar exacto, ya que vamos actualizando seg no mil
        //detener
        clearInterval(interval)
        alert('epale')
      } else {
        //actualizar useState
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }

    }, 1000) //intervalo de un segundo (1000 milisegundos)
  }

  useEffect(() => { //iniciar la cuenta atras apenas cargue el componente
    startTimer();
    return () => {
      clearInterval(interval) //para detener el contador
    }
  })


  return (

    <CountContain>
      <DivNum>
        <CardnUM><h1>{timerDays}</h1></CardnUM>
        <CardnUM><h1>{timerHours}</h1></CardnUM>
        <CardnUM><h1>{timerMinutes}</h1></CardnUM>
        <CardnUM><h1>{timerSeconds}</h1></CardnUM>
      </DivNum>

      <DivLetters>
        <CardLetters><h4>DAYS</h4></CardLetters>
        <CardLetters><h4>HOURS</h4></CardLetters>
        <CardLetters><h4>MINUTES</h4></CardLetters>
        <CardLetters><h4>SECONDS</h4></CardLetters>
      </DivLetters>

    </CountContain>

  )
}

export default Clock