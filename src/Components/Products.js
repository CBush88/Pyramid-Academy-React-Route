import React from 'react'
import desktop from ".//img/desktop.jpg"
import monitor from ".//img/monitor.png"
import laptop from ".//img/laptop.jpg"
import keyboard from ".//img/keyboard.jpg"

const Products = () => {
  return (
<body>
    <div id="content">
        <header>
            <h1>Products</h1>
        </header>
        <div class="grid">
            <img src={desktop} alt="A desktop computer" />
            <img src={monitor} alt="A computer monitor" />
            <p>Eu non exercitation deserunt do anim. Incididunt in culpa esse consequat incididunt exercitation est reprehenderit ad aliquip do officia do. Nulla occaecat veniam non irure veniam ea cupidatat ut sit esse excepteur. Deserunt aute sint eiusmod ad esse sit. Adipisicing aliqua proident officia incididunt aliqua. Cillum et incididunt irure tempor. Ea eu do do nostrud.</p>
            <p>Occaecat aliqua sunt id labore laborum. Mollit velit sunt exercitation labore Lorem nisi elit ad irure sint ea et anim. Commodo enim est eiusmod sunt irure ea pariatur eu ex elit ex ex.</p>
            <img src={laptop} alt="A laptop computer" />
            <img src={keyboard} alt="A computer keyboard" />
            <p>Deserunt sint cupidatat consequat elit eu id est dolore ut duis occaecat esse cillum elit. In irure aliquip culpa nulla incididunt eu. Sint reprehenderit aliquip adipisicing nostrud nulla nisi eiusmod qui do occaecat exercitation in nisi. Est aliqua pariatur ut elit anim eu sit.</p>
            <p>Nostrud irure aliqua cupidatat amet eiusmod veniam dolore esse ad aute nulla nulla. Eiusmod reprehenderit incididunt cupidatat elit. Ad do consectetur elit id.</p>
        </div>        
    </div>
</body>
  )
}

export default Products