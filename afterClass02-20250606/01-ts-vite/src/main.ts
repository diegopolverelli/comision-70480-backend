import { tipado } from './pruebas/01-tipado'
import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<h3>Pruebas TypeScript</h3>
<h3>${tipado}</h3>


`

