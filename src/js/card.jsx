import React from "react";


const Card = () => {
    return (
        <>
            <div className="bg-success text-withe">
                <div className="card-body bg-primary mx-5 p-2">
                    <h5 className="card-title">CHOOSE YOUR WEAPON</h5>
                    <input name="Player1" defaultValue="Player 1 Username" />
                    <input name="Player2" defaultValue="Player 2 Username" />
                    <br></br>
                    <a href="#" className="btn btn-primary btn-lg mt-2">
                        x<i class="fa-solid fa-x"></i>
                    </a>
                    <a href="#" className="btn btn-primary btn-lg">
                        o<i class="bi bi-circle"></i>
                    </a>
                </div>
                <br></br>
            </div>
        </>
    );
};

export default Card;