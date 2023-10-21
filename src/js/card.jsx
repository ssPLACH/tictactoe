import React from "react";


const Card = () => {
    return (
        <>
            <div className="col-12 bg-success set text-center d-flex justify-content-center mb-5">
                <div className="card-body bg-primary p-2">
                    <h5 className="card-title mb-1">CHOOSE YOUR WEAPON</h5>
                    <input name="Player1" defaultValue="Player 1 Username" />
                    <input name="Player2" defaultValue="Player 2 Username" />
                    <br></br>
                    <a href="#" className="btn btn-primary btn-lg mt-2">
                        x<i class="fa-solid fa-x"></i>
                    </a>
                    <a href="#" className="btn btn-primary btn-lg mt-2">
                        o<i class="bi bi-circle"></i>
                    </a>
                </div>
                <br></br>
            </div>
        </>
    );
};

export default Card;