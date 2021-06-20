import React from "react"

import homeCss from "../../css/home/home.css"
import FirstSlideImage from "../../images/book1.jpg"
import SecondSlideImage from "../../images/book2.jpg"
import ThirdSlideImage from "../../images/book3.jpg"
import BookPassionate from "../../images/book-passionate.jpg"

export default class Home extends React.Component{ 
  constructor(props){ super(props) }

  render(){ 
    return( 
      <div className="home-content">
        <div className="container">
          <div className="row" id="running">
            <div className="col-12 text-center">
              <h1>Running Plan - 10K to 15K</h1>
            </div>
          </div>
          <div className="row ">
            <div className="col-12">
              <p>Easy Run --> Passo a cui potrei sostenere una conversazione abbastanza tranquillamente durante la corsa (o, andando da solo, a cui riesco più o meno a canticchiare)</p>
              <p>Steady Runs --> N corse da circa 800m a passo veloce</p>
              <p>Tempo Run --> Il primo 30% da fare Easy, poi incremento per il 50% fino a fare 5 minuti Steady, e finisco con un 20% del tempo ancora Easy</p>
              <p>Cross Training --> Tipo camminata/bicicletta</p>
            </div>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Settimana</th>
                <th scope="col">Lun</th>
                <th scope="col">Mar</th>
                <th scope="col">Mer</th>
                <th scope="col">Gio</th>
                <th scope="col">Ven</th>
                <th scope="col">Sab</th>
                <th scope="col">Dom</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">31/05-06/06</th>
                <td>Easy Run 5K</td>
                <td>Easy Run 6.5K</td>
                <td>Steady Runs 4*800m</td>
                <td>Easy Run 3K</td>
                <td>REST DAY</td>
                <td>Cross Training</td>
                <td>Easy Run 10K</td>
              </tr>
              <tr>
                <th scope="row">07/06-13/06</th>
                <td>Easy Run 5K</td>
                <td>Easy Run 8K</td>
                <td>Tempo Run 30'</td>
                <td>Easy Run 5K</td>
                <td>REST DAY</td>
                <td>Cross Training</td>
                <td>Easy Run 11.5K</td>
              </tr>
              <tr>
                <th scope="row">14/06-20/06</th>
                <td>Easy Run 5K</td>
                <td>Easy Run 10K</td>
                <td>Steady Runs 5*800m</td>
                <td>Easy Run 6.5K</td>
                <td>REST DAY</td>
                <td>Cross Training</td>
                <td>Easy Run 13K</td>
              </tr>
              <tr className="active-week">
                <th scope="row">21/06-27/06</th>
                <td>Easy Run 5K</td>
                <td>Easy Run 6.5K</td>
                <td>Tempo Run 35'</td>
                <td>Easy Run 3K</td>
                <td>REST DAY</td>
                <td>Easy Run 6.5K</td>
                <td>Race 5K</td>
              </tr>
              <tr>
                <th scope="row">28/06-04/07</th>
                <td>Easy Run 5K</td>
                <td>Easy Run 8K</td>
                <td>Steady Runs 6*800m</td>
                <td>Easy Run 5K</td>
                <td>REST DAY</td>
                <td>Cross Training</td>
                <td>Easy Run 11.5K</td>
              </tr>
              <tr>
                <th scope="row">05/07-11/07</th>
                <td>Easy Run 5K</td>
                <td>Easy Run 10K</td>
                <td>Tempo Run 40'</td>
                <td>Easy Run 6.5K</td>
                <td>REST DAY</td>
                <td>Cross Training</td>
                <td>Easy Run 13K</td>
              </tr>
            </tbody>
          </table>
          <div className="row division">
            <div className="col-12 text-center">
              <div className="important white">
                <p>La passione è l'arte di saper fare qualcosa con amore.</p>
                <p>E con amore viene sempre tutto bene.</p>
              </div>
            </div>
          </div>
          <div className="row" id="who">
            <div className="col-12 text-center">
              <h1>Chi Siamo</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <img className="book-passionate" src={BookPassionate} alt="team"/>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-12 text-center">
                  <h3>Appassionati di Libri</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-justify">
                  <p>
                    Parlare di libri, lavorarli, leggere, sentire il profumo delle pagine
                    ci rende persone appassionate e per questo motivo diamo sempre il massimo
                    per pubblicare il tuo libro senza errori.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}